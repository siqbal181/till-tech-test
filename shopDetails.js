const data = require('./hipstercoffee.json');

class ShopDetails {
  constructor() {
    this.storeDetails = []
    this.itemPrices = []
  }

  storeInfo() {
    const name = data[0].shopName;
    const address = data[0].address;
    const phone = data[0].phone;
    this.storeDetails.push({name, address, phone});
  }

  itemPrices() {
    // return the item prices iterating over the price array in single object
    // push individually to the this.itemPrices
  }
}

module.exports = ShopDetails;