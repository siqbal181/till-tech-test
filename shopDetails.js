const data = require('./hipstercoffee.json');

class ShopDetails {
  constructor() {
    this.storeDetails = []
    this.itemPrices = []
  }

  storeInfo() {
    const name = data[0].shopName;
    const address = data[0].address;
    const phone = this.formatPhone();
    this.storeDetails.push({name, address, phone});
  }

  formatPhone() {
    const unformattedPhone = data[0].phone;
    const countryCode = unformattedPhone.substring(0, 1);
    const areaCode = unformattedPhone.substring(1, 4);
    const firstPart = unformattedPhone.substring(4, 7);
    const secondPart = unformattedPhone.substring(7, 11);

    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }

  itemPrices() {
    // return the item prices iterating over the price array in single object
    // push individually to the this.itemPrices
  }
}

module.exports = ShopDetails;