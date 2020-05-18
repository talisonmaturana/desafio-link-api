const axios = require('axios');
require('dotenv').config({ silent: true });

class Pipedrive {
  constructor(status = 'won', limit = 500) {
    this.apiKey = process.env.PIPEDRIVE_API_KEY;
    this.baseURL = `https://${process.env.PIPEDRIVE_DOMAIN}.pipedrive.com/v1`;
    this.dealsEndpoint = `${this.baseURL}/deals?status${status}&start=0&limit=${limit}&api_token=${this.apiKey}`;
  }

  async getDeals() {
    try {
      const response = await axios.get(this.dealsEndpoint);

      const data = response.data.data.map((res) => {
        return {
          deal_id: res.id,
          owner_name: res.owner_name,
          title: res.title,
          value: res.value,
          currency: res.currency,
          org_name: res.org_name,
        };
      });

      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

module.exports = new Pipedrive();
