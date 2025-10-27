# Price SMM REST API Documentation

## Price Calculation API

Calculate the price for SMM services using the following endpoint:

```
GET https://kratos.aisbirnusantara.com/smm/calculate?id=&amount=
```

- `id`: The SMM service ID.
- `amount`: The quantity you want to order.



### Example Request

```
GET https://kratos.aisbirnusantara.com/smm/calculate?id=123&amount=123
```

### Example Response

```json
{
  "amount": 234568,
  "amount_display": "234,568",
  "data": {
    "id": 38862,
    "name": "Youtube Live Stream Views + Likes [ Max 5M ] | HQ | 100% Concurrent | 1 Day",
    "note": "",
    "category": "Youtube Live Stream [ NEW PACKAGE ] [ CHEAPEST PRICE]",
    "type": "Youtube",
    "price": 84447,
    "priceSatuan": "84,447",
    "min": 50,
    "max": 5000000,
    "refill": 0
  },
  "msg": "OK",
  "price_satuan": "84,447",
  "status": true,
  "total_price": 19808564,
  "total_price_display": "19,808,564"
}
```

> **Note:** If parameters are missing or invalid, the API will return an error message.