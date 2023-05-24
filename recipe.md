# {{PROBLEM}} Multi-Class Planned Design Recipe

```javascript

const data = require('./data.json');

class ShopDetails {
  constructor() {
    this.storeDetails = []
    this.itemPrices = []
  }

  storeDetails() {
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

class CustomerOrder {
  constructor(itemPrices) {
    this.itemPrices = itemPrices;
    this.tableDetails = []
    this.order = []
    this.totals = []
  }

  tableDetails() {
    // "What table is the customer? - to cancel, press 9"
    // 2
    // Table: 2 / [4]
    // Customer name(s) - to cancel, press 9"
    // Max, Sam
    // Customer: Max, Sam
    // end loop and push details to this.tableDetails.tableNumber
    // this.tableDetails.customerDetails
  }

  takeOrder() {
    // ask customer what they want with UI "What was the customers order?"
    // Choose or press 9 when order is complete
    // 1. Cafe Latte
    // 2. Flat White...
    // 1
    // What is the quantity? 
    // 2
    // Cafe Latte 2 x 4.75
    // Choose or press 9 when order is complete
    // 9
    // end loop and push order to this.order
  }

  totalBeforeTax() {
    // sum up the this.order.price
    // include to 2DP
  }

  tax() {
    // take 8.64% of the this.calculateTotalBeforeTax
    // push { tax: 5.52 } to this.totals
  }

  totalWithTax() {
    // this.totalBeforeTax + this.tax
    // push { total: 15.23 } to this.totals
  }
}

class CustomerReceipt {
  constructor(storeDetails, tableDetails, customerDetails, order, totals) {
    this.storeDetails = storeDetails;
    this.tableDetails = tableDetails;
    this.customerDetails = customerDetails;
    this.order = order;
    this.totals = totals;
  }

  dateNow() {
    // return Date.now
  }

  formatStoreDetails() {
    // Store Name (this.storeDetails.name)
    // ---------------
    // Address (this.storeDetails.address)
    // Phone: +1 234 3455 (this.storeDetails.number)
  }

  formatTableDetails() {
    // ---------------
    // Table: 1 / [4] (this.tableDetails.table)
    // Max, Sam (this.tableDetails.customerDetails)
    // -------------------
  }

  formatOrderDetails() {
    // Cafe Latte          2 x 4.75 (this.order)
    // -------------------
  }

  formatOrderTotals() {
    // Tax:                this.tax
    // Total               this.totalWithTax
  }

  thanksMessage() {
    return "Thank you!"
  }

  formatReceipt() {
    this.dateNow();
    this.formatStoreDetails();
    this.formatTableDetails();
    this.formatOrderDetails();
    this.thanksMessage();
  }
}
```

## 3. Create Examples as Integration Tests

_Create examples of the classes being used together in different situations and
combinations that reflect the ways in which the system will be used._

```javascript

// ShopDetails class
describe('ShopDetails', () => {
  let shopDetails;

  beforeEach() {
    shopDetails = new ShopDetails;
  }

  // it('initializes with an empty this.storeDetails array', () => {
  //   expect(shopDetails.storeDetails).toEqual([]);
  // })

  // it('returns store name from .json file', () => {
  //   expect(shopDetails.storeDetails.name).toBe('The Coffee Connection');
  // })

  // it('returns store address from .json file', () => {
  //   expect(shopDetails.storeDetails.address).toBe('123 Lakeside Way');
  // })

  // it('returns store phone number from .json file', () => {
  //   expect(shopDetails.storeDetails.number).toBe(16503600708);
  // })

  it('returns store phone number from .json file formatted', () => {
    expect(shopDetails.storeDetails.number).toBe('+1 (650) 260-0708');
  })

  it('returns first price and item in an array', () => {
    expect(shopDetails.itemPrices[0]).toBe({'Cafe Latte': 4.75});
  })

  it('returns last price and item in an array', () => {
    expect(shopDetails.itemPrices[-1]).toBe({'Muffin Of The Day': 4.55});
  })
})

// CustomerOrder class Unit Test
describe('CustomerOrder', () => {
  let customerOrder;
    // mock the item prices
  // mock the input from the customer

  beforeEach() {
    customerOrder = new CustomerOrder(mockItemPrices);
  }

  // Test for the store details being empty

  it('initializes with empty details in store array', () => {

  })

  // Test for mocking the itemPrices

  it('mocks some itemPrices', () => {

  })

  // Test for asking the customer table 1/4 and entering the correct table

  it('asks for customer table and enters the correct table', () => {

  })

  // Test for asking for customer table and entering incorrect table

  it('asks for customer table and enters the incorrect table', () => {

  })

  // Test for asking for customer name

  // Test for asking for customer name and entering a number instead

  // Test for asking for both customer table and customer name
  
  // Test for takeOrder under the OI

  // Test for asking for the customers order
  // expect(mockValue).toBe('What was the customers order')
  // 1. 'Cafe Latte'
  // 2. 'Flat White'
  // expect(mockReturnedValue).toBe(2)
  // expect(mockValue to be, what is the quantity )

})

// CustomerOrder Integration Test
  // require the storeDetails 
  // pull directly from the itemPrices of the score details


// CustomerReceipt Unit Test
  // mock the CustomerOrder and the StoreDetails

describe('CustomerReceipt', () => {
  let customerReceipt;
    // mock the item prices
  // mock the input from the customer

  beforeEach() {
    customerReceipt = new CustomerReceipt(mockStoreDetails, mockItemPrices, mockTableDetails, mockCustomerDetails, mockOrder, mockTotals);
  }

  // test the date functionality
  it('mocks a returned date', () => {

  })

  // test the date functionality formatted
  it('mocks a returned date', () => {

  })








})




// CustomerReceipt IntegrationTest
  // require the storeDetails and the CustomerOrder class

```

_Encode each example as a test. You can add to the above list as you go._

## 5. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green,
refactor to implement the behaviour._

