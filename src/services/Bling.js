const axios = require('axios');
require('dotenv').config({ silent: true });

class Bling {
  constructor(xml) {
    this.apiKey = process.env.BLING_API_KEY;
    this.baseURL = `https://bling.com.br/Api/v2/pedido/json/`;
    this.data = [{ apikey: this.apiKey }, { xml: xml }];
  }

  async postToBling() {
    try {
      const { data } = await axios.post(this.baseURL, this.data);

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = Bling;
