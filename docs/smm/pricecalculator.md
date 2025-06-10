# Price SMM REST API Documentation

## Price Calculation API

Calculate the price for SMM services using the following endpoint:

```
GET https://magnesium.aisbirnusantara.com/api/calculasiharga?action=[idsmm,amount]
```

- `idsmm`: The SMM service ID.
- `amount`: The quantity you want to order.

Alternatively, you can use query parameters:

```
GET https://magnesium.aisbirnusantara.com/api/calculasiharga?idsmm=SERVICE_ID&amount=QUANTITY
```

### Example Request

```
GET https://magnesium.aisbirnusantara.com/api/calculasiharga?action=[12345,1000]
```

### Example Response

```json
{
    "code": 200,
    "harga": 150574,
    "amount": "Rp 150.574,00",
    "price": 197
}
```

- `harga`: Total price in integer format.
- `amount`: Formatted price string.
- `price`: Price per unit.

> **Note:** If parameters are missing or invalid, the API will return an error message.