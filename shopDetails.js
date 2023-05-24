const data = require('./hipstercoffee.json');

class ShopDetails {
  constructor() {
    this.storeDetails = []
    this.itemPrices = []
  }

  storeInfo() {
    let name = data[0].shopName;
    return name;
    // return the store details from .json in string
    // Store Name
    // Store Address
    // Phone: +1 (650) 260-0708
    // push it to this.storeDetails
  }

  itemPrices() {
    // return the item prices iterating over the price array in single object
    // push individually to the this.itemPrices
  }
}

module.exports = ShopDetails;