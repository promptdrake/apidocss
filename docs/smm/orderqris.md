# Place SMM Order with QRIS Payment REST API Documentation
How we work?
![Order Flow](/flowchart.png)

## Endpoint

```
POST https://magnesium.aisbirnusantara.com/api/resellsmm
```

- **Method:** `POST`
- **Authentication:** Required (API key in request body)
- **Request Body:** JSON
- **Query Parameters:** None

## Request Body

```json
{
    "idsmm": 383,
    "amount": 100,
    "target": "target_value",
    "apikey": "your_api_key",
    "persen": 10
}
```

| Field    | Type    | Required | Description                                 |
|----------|---------|----------|---------------------------------------------|
| idsmm    | integer | Yes      | SMM service/package ID                      |
| amount   | integer | Yes      | Quantity to order                           |
| target   | string  | Yes      | Target username/link/etc                    |
| apikey   | string  | Yes      | Your API key                                |
| persen   | number  | Yes      | Percentage markup to apply (e.g., 10 for 10%)|

## Example Request

```http
POST https://magnesium.aisbirnusantara.com/api/resellsmm
Content-Type: application/json

{
    "idsmm": 383,
    "amount": 100,
    "target": "target_value",
    "apikey": "your_api_key",
    "persen": 10
}
```

## Example Response

```json
{
    "code": 200,
    "redirected": "https://passport.aisbirnusantara.com",
    "price": 350900,
    "hargaori": 319000,
    "uangDiterima": 31900,
    "qrString": "QRIS_STRING_DATA",
    "item": {
        "harga": 1000, // default price same at default
        "base": 1000, // base harga
        "diminta": "", // what foll they need
        "price": "", // same as harga idk im lazy to remove it
        "amount": "", // price but parsed as  IDR currency
        "item": "" // item name
    }
}
```

## Response Fields

| Field         | Type    | Description                                              |
|---------------|---------|----------------------------------------------------------|
| code          | integer | HTTP-like status code (200 = success)                    |
| redirected    | string  | Payment URL for QRIS                                     |
| price         | integer | Final price after markup                                 |
| hargaori      | integer | Original calculated price                                |
| uangDiterima  | integer | Amount received from markup (persen)                     |
| qrString      | string  | QRIS string for payment                                  |
| item          | object  | Calculation and order details                            |

### `item.smmcalculate` Object

- Contains calculation details for the SMM order (fields may vary).

## Notes

- All parameters in the request body are required.
- Authentication is via the `apikey` field in the request body.
- The `redirected` field provides a URL for QRIS payment.
- The `qrString` field contains the QRIS code for payment.
- The `persen` field applies a markup percentage to the order price.
- Prices and limits are subject to change.
- No additional parameters are needed for balance payment.

