const ShopDetails = require('./shopDetails');

describe('ShopDetails', () => {
  let shopDetails;

  beforeEach(() => {
    shopDetails = new ShopDetails;
  })

  it('initializes with an empty this.storeDetails array', () => {
    expect(shopDetails.storeDetails).toEqual([]);
  })

  it('returns store phone number from .json file formatted', () => {
    expect(shopDetails.formatPhone()).toBe('+1 (650) 360-0708');
  })

  it('returns store details from .json file', () => {
    shopDetails.storeInfo();
    expect(shopDetails.storeDetails[0]).toEqual({"address": "123 Lakeside Way", "name": "The Coffee Connection", "phone": "+1 (650) 360-0708"});
  })

})