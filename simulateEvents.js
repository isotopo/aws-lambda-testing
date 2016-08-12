'use strict'
const numUsers=3
const numBillingAddress = 3
const numShippingAddress = 3
const faker = require('faker')


let userinfo=[]
for (var i = 0; i <numUsers ; i++) {
  userinfo.PUSH({
    '$user_id': 'billy_jones_30'+i,
    '$session_id': 'gigtleqddo84l8cm15qe4i'+i,
    '$order_id': 'ORDER-'+Math.floor(10000000*Math.random()),
    '$user_email': faker.internet.email(),
    '$card_bin': [Math.floor()],
    '$card_last4': '4444'
  })
}
let $billing_address= []

for (var i = 0; i <numBillingAddress ; i++) {
  billing_address.push({
    '$name': faker.name.findName(),
    '$phone': faker.phone.phoneNumber(),
    '$address_2': faker.address.secondaryAddress(),
    '$address_1': faker.address.streetAddress(),
    '$city': faker.address.city(),
    '$region': faker.address.state(),
    '$country': faker.address.country(),
    '$zipcode': faker.address.ZipCode()
  })
}
    let $payment_type=[
$cash,
$credit_card,
$gift_card,
$money_order,
$store_credit,
$third_party_processor,
]

  let  $payment_gateway=[
$amazon_payments,
$compropago,
$conekta,
$cuentadigital,
$cybersource,
$paypal,
$webmoney,
]




let $shipping_address= []

for (var i = 0; i <numShippingAddress ; i++) {
  shipping_address.push({
    '$name': faker.name.findName(),
    '$phone': faker.phone.phoneNumber(),
    '$address_2': faker.address.secondaryAddress(),
    '$address_1': faker.address.streetAddress(),
    '$city': faker.address.city(),
    '$region': faker.address.state(),
    '$country': faker.address.country(),
    '$zipcode': faker.address.ZipCode()
  })
}

'$expedited_shipping': true,
'$shipping_method': '$physical',
'$items': [
  {
    '$item_id': '12344321',
    '$product_title': 'Microwavable Kettle Corn: Original Flavor',
    '$price': 4990000, // $4.99
    '$upc': '097564307560',
    '$sku': '03586005',
    '$brand': 'Peters Kettle Corn',
    '$manufacturer': 'Peters Kettle Corn',
    '$category': 'Food and Grocery',
    '$tags': ['Popcorn', 'Snacks', 'On Sale'],
    '$quantity': 4
  },
  {
    '$item_id': 'B004834GQO',
    '$product_title': 'The Slanket Blanket-Texas Tea',
    '$price': 39990000, // $39.99
    '$upc': '67862114510011',
    '$sku': '004834GQ',
    '$brand': 'Slanket',
    '$manufacturer': 'Slanket',
    '$category': 'Blankets & Throws',
    '$tags': ['Awesome', 'Wintertime specials'],
    '$color': 'Texas Tea',
    '$quantity': 2
  }
let events = {
  create_order: {
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$session_id': 'gigtleqddo84l8cm15qe4il',
    '$order_id': 'ORDER-28168441',
    '$user_email': 'bill@gmail.com',
    '$amount': 115940000, // $115.94
    '$currency_code': 'USD',
    '$billing_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },
    '$payment_methods': [
      {
        '$payment_type': '$credit_card',
        '$payment_gateway': '$braintree',
        '$card_bin': '542486',
        '$card_last4': '4444'
      }
    ],
    '$shipping_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },
    '$expedited_shipping': true,
    '$shipping_method': '$physical',
    '$items': [
      {
        '$item_id': '12344321',
        '$product_title': 'Microwavable Kettle Corn: Original Flavor',
        '$price': 4990000, // $4.99
        '$upc': '097564307560',
        '$sku': '03586005',
        '$brand': 'Peters Kettle Corn',
        '$manufacturer': 'Peters Kettle Corn',
        '$category': 'Food and Grocery',
        '$tags': ['Popcorn', 'Snacks', 'On Sale'],
        '$quantity': 4
      },
      {
        '$item_id': 'B004834GQO',
        '$product_title': 'The Slanket Blanket-Texas Tea',
        '$price': 39990000, // $39.99
        '$upc': '67862114510011',
        '$sku': '004834GQ',
        '$brand': 'Slanket',
        '$manufacturer': 'Slanket',
        '$category': 'Blankets & Throws',
        '$tags': ['Awesome', 'Wintertime specials'],
        '$color': 'Texas Tea',
        '$quantity': 2
      }
    ],

  // For marketplaces, use $seller_user_id to identify the seller
    '$seller_user_id': 'slinkys_emporium',

  // Sample Custom Fields
    'digital_wallet': 'apple_pay', // "google_wallet", etc.
    'coupon_code': 'dollarMadness',
    'shipping_choice': 'FedEx Ground Courier',
    'is_first_time_buyer': false
  },
  update_order: {
  // Required Fields
    '$type': '$update_order',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$session_id': 'gigtleqddo84l8cm15qe4il',
    '$order_id': 'ORDER-28168441',
    '$user_email': 'bill@gmail.com',
    '$amount': 115940000, // $115.94
    '$currency_code': 'USD',
    '$billing_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },
    '$payment_methods': [
      {
        '$payment_type': '$credit_card',
        '$payment_gateway': '$braintree',
        '$card_bin': '542486',
        '$card_last4': '4444'
      }
    ],
    '$shipping_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },
    '$expedited_shipping': true,
    '$shipping_method': '$physical',
    '$items': [
      {
        '$item_id': '12344321',
        '$product_title': 'Microwavable Kettle Corn: Original Flavor',
        '$price': 4990000, // $4.99
        '$upc': '097564307560',
        '$sku': '03586005',
        '$brand': 'Peters Kettle Corn',
        '$manufacturer': 'Peters Kettle Corn',
        '$category': 'Food and Grocery',
        '$tags': ['Popcorn', 'Snacks', 'On Sale'],
        '$quantity': 4
      },
      {
        '$item_id': 'B004834GQO',
        '$product_title': 'The Slanket Blanket-Texas Tea',
        '$price': 39990000, // $39.99
        '$upc': '67862114510011',
        '$sku': '004834GQ',
        '$brand': 'Slanket',
        '$manufacturer': 'Slanket',
        '$category': 'Blankets & Throws',
        '$tags': ['Awesome', 'Wintertime specials'],
        '$color': 'Texas Tea',
        '$quantity': 2
      }
    ],

  // For marketplaces, use $seller_user_id to identify the seller
    '$seller_user_id': 'slinkys_emporium',

  // Sample Custom Fields
    'digital_wallet': 'apple_pay', // "google_wallet", etc.
    'coupon_code': 'dollarMadness',
    'shipping_choice': 'FedEx Ground Courier',
    'is_first_time_buyer': false
  },
  transaction: {
  // Required Fields
    '$type': '$transaction',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',
    '$amount': 506790000, // $506.79
    '$currency_code': 'USD',

  // Supported Fields
    '$user_email': 'bill@gmail.com',
    '$transaction_type': '$sale',
    '$transaction_status': '$success',
    '$order_id': 'ORDER-123124124',
    '$transaction_id': '719637215',

    '$billing_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },
    '$payment_method': {
      '$payment_type': '$credit_card',
      '$payment_gateway': '$braintree',
      '$card_bin': '542486',
      '$card_last4': '4444'
    },

  // Supported Fields
    '$shipping_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },
    '$session_id': 'gigtleqddo84l8cm15qe4il',

  // For marketplaces, use $seller_user_id to identify the seller
    '$seller_user_id': 'slinkys_emporium',

  // Sample Custom Fields
    'digital_wallet': 'apple_pay', // "google_wallet", etc.
    'coupon_code': 'dollarMadness',
    'shipping_choice': 'FedEx Ground Courier',
    'is_first_time_buyer': false
  },
  create_account: {
  // Required Fields
    '$type': '$create_account',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$session_id': 'gigtleqddo84l8cm15qe4il',
    '$user_email': 'bill@gmail.com',
    '$name': 'Bill Jones',
    '$phone': '1-415-555-6040',
    '$referrer_user_id': 'janejane101',
    '$payment_methods': [
      {
        '$payment_type': '$credit_card',
        '$card_bin': '542486',
        '$card_last4': '4444'
      }
    ],
    '$billing_address': {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6040',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },

    '$social_sign_on_type': '$twitter',

  // Suggested Custom Fields
    'twitter_handle': 'billyjones',
    'work_phone': '1-347-555-5921',
    'location': 'New London, NH',
    'referral_code': 'MIKEFRIENDS',
    'email_confirmed_status': '$pending',
    'phone_confirmed_status': '$pending'
  }, update_account: {
  // Required Fields
    '$type': '$update_account',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$changed_password': true,
    '$user_email': 'bill@gmail.com',
    '$name': 'Bill Jones',
    '$phone': '1-415-555-6040',
    '$referrer_user_id': 'janejane102',
    '$payment_methods': [
      {
        '$payment_type': '$credit_card',
        '$card_bin': '542486',
        '$card_last4': '4444'
      }
    ],
    '$billing_address':
    {
      '$name': 'Bill Jones',
      '$phone': '1-415-555-6041',
      '$address_1': '2100 Main Street',
      '$address_2': 'Apt 3B',
      '$city': 'New London',
      '$region': 'New Hampshire',
      '$country': 'US',
      '$zipcode': '03257'
    },

    '$social_sign_on_type': '$twitter',

  // Suggested Custom Fields
    'email_confirmed_status': '$success',
    'phone_confirmed_status': '$success'
  },
  create_content: {
  // Required Fields
    '$type': '$create_content',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$contact_email': 'bill@gmail.com',
    '$contact_phone': '1-415-555-6040',
    '$subject': 'Job available now',
    '$content': 'Contact me for more details.'
  },
  add_item_to_cart: {
  // Required Fields
    '$type': '$add_item_to_cart',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$session_id': 'gigtleqddo84l8cm15qe4il',
    '$item': {
      '$item_id': 'B004834GQO',
      '$product_title': 'The Slanket Blanket-Texas Tea',
      '$price': 39990000, // $39.99
      '$currency_code': 'USD',
      '$upc': '67862114510011',
      '$sku': '004834GQ',
      '$brand': 'Slanket',
      '$manufacturer': 'Slanket',
      '$category': 'Blankets & Throws',
      '$tags': ['Awesome', 'Wintertime specials'],
      '$color': 'Texas Tea',
      '$quantity': 16
    }
  },
  remove_item_from_cart: {
  // Required Fields
    '$type': '$remove_item_from_cart',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$session_id': 'gigtleqddo84l8cm15qe4il',
    '$item': {
      '$item_id': 'B004834GQO',
      '$product_title': 'The Slanket Blanket-Texas Tea',
      '$price': 39990000, // $39.99
      '$currency_code': 'USD',
      '$quantity': 2,
      '$upc': '67862114510011',
      '$sku': '004834GQ',
      '$brand': 'Slanket',
      '$manufacturer': 'Slanket',
      '$category': 'Blankets & Throws',
      '$tags': ['Awesome', 'Wintertime specials'],
      '$color': 'Texas Tea'
    }
  },
  submit_review: {
  // Required Fields
    '$type': '$submit_review',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$content': 'Text content of submitted review goes here.',
    '$review_title': 'Title of Review Goes Here',
    '$item_id': 'V4C3D5R2Z6',
    '$reviewed_user_id': 'billy_jones_301',
    '$submission_status': '$success',

  // Sample Custom Fields
    'rating': '5'
  },
  send_message: {
  // Required Fields
    '$type': '$send_message',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Supported Fields
    '$recipient_user_id': '512924123',
    '$subject': 'Subject line of the message.',
    '$content': 'Text content of message.'
  },
  login: {
  // Required Fields
    '$type': '$login',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',

  // Recommended Fields
    '$session_id': 'gigtleqddo84l8cm15qe4il',
    '$login_status': '$success'
  },
  logout: {
  // Required Fields
    '$type': '$logout',
    '$api_key': '209f490k25lb9021',
    '$user_id': 'billy_jones_301'
  },
  link_session_to_user: {
  // Required Fields
    '$type': '$link_session_to_user',
    '$api_key': '209f490k25lb9021',
    '$user_id': 'billy_jones_301',
    '$session_id': 'gigtleqddo84l8cm15qe4il'
  },
  chargeback: {
  // Required Fields
    '$type': '$chargeback',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',
    '$order_id': 'ORDER-123124124',
    '$transaction_id': '719637215',

  // Recommended Fields
    '$chargeback_state': '$lost',
    '$chargeback_reason': '$duplicate'
  },
  order_status: {
  // Required Fields
    '$type': '$order_status',
    '$api_key': 'your_api_key_here',
    '$user_id': 'billy_jones_301',
    '$order_id': 'ORDER-28168441',
    '$order_status': '$canceled',

  // Optional Fields
    '$reason': '$payment_risk',
    '$source': '$manual_review',
    '$analyst': 'someone@your-site.com',
    '$webhook_id': '3ff1082a4aea8d0c58e3643ddb7a5bb87ffffeb2492dca33',
    '$description': 'Canceling because multiple fraudulent users on device'
  }
}
