# {{PROBLEM}} Multi-Class Planned Design Recipe

```javascript

const data = require('./data.json');

class CoffeeShop {
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
  constructor() {
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

  formatReceipt() {
    // Date (this.dateNow)
    // Store Name (this.storeDetails.name)
    // ---------------
    // Address (this.storeDetails.address)
    // Phone: +1 234 3455 (this.storeDetails.number)
    // ---------------
    // Table: 1 / [4] (this.tableDetails.table)
    // Max, Sam (this.tableDetails.customerDetails)
    // -------------------
    // Cafe Latte          2 x 4.75 (this.order)
    // -------------------
    // Tax:                this.tax
    // Total               this.totalWithTax
    // this.thankYou
  }

  thankYou() {
    return "Thank you!"
  }
}
```

## 3. Create Examples as Integration Tests

_Create examples of the classes being used together in different situations and
combinations that reflect the ways in which the system will be used._

```ruby
# EXAMPLE

# Gets all tracks
library = MusicLibrary.new
track_1 = Track.new("Carte Blanche", "Veracocha")
track_2 = Track.new("Synaesthesia", "The Thrillseekers")
library.add(track_1)
library.add(track_2)
library.all # => [track_1, track_2]
```

## 4. Create Examples as Unit Tests

_Create examples, where appropriate, of the behaviour of each relevant class at
a more granular level of detail._

```ruby
# EXAMPLE

# Constructs a track
track = Track.new("Carte Blanche", "Veracocha")
track.title # => "Carte Blanche"
```

_Encode each example as a test. You can add to the above list as you go._

## 5. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green,
refactor to implement the behaviour._

