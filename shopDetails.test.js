const ShopDetails = require('./shopDetails');

describe('ShopDetails', () => {
  let shopDetails;

  beforeEach(() => {
    shopDetails = new ShopDetails;
  })

  it('initializes with an empty this.storeDetails array', () => {
    expect(shopDetails.storeDetails).toEqual([]);
  })
})