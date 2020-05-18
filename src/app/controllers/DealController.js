const Deal = require('../models/Deal');
const Pipedrive = require('../../services/Pipedrive');
const Bling = require('../../services/Bling');

class DealController {
  constructor() {}

  index(req, res, next) {
    try {
      const deals = Deal.find({});

      res.status(200).json({ deals });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getFromPipePostToBling(req, res) {
    try {
      const results = await Pipedrive.getDeals();

      const xmlPedido = `
            <?xml version="1.0" encoding="utf-8" ?>
              <pedidocompra>
              ${results.map((result) => {
                return `
                  <fornecedor>
                    <nome>${result.owner_name}</nome>
                  </fornecedor>
                  <itens>
                    <item>
                        <codigo${result.deal_id}</codigo>
                        <descricao>Produto teste 1</descricao>
                        <un/>
                        <qtde>10</qtde>
                        <valor>${result.value}</valor>
                    </item>
                  </itens>`;
              })}
            </pedidocompra>
          `;

      const bling = new Bling(xmlPedido);

      const resp = await bling.postToBling();

      res.status(200).json({ resp });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to get the data' });
    }
  }
}

module.exports = new DealController();
