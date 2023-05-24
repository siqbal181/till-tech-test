const ShopDetails = require('./shopDetails');

describe('ShopDetails', () => {
  let shopDetails;

  beforeEach(() => {
    shopDetails = new ShopDetails;
  })

  it('initializes with an empty this.storeDetails array', () => {
    expect(shopDetails.storeDetails).toEqual([]);
  })

  it('returns store name from .json file', () => {
    expect(shopDetails.storeInfo()).toBe('The Coffee Connection');
  })

})