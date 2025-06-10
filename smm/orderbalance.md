# Place SMM Order REST API Documentation

## Endpoint

```
POST https://magnesium.aisbirnusantara.com/api/ordersmm
```

- **Method:** `POST`
- **Authentication:** Required (Bearer Token in `Authorization` header)
- **Request Body:** JSON
- **Query Parameters:** None

## Request Headers

| Header         | Value                | Description                |
|----------------|---------------------|----------------------------|
| Authorization  | Bearer `<API_KEY>`  | Your API key as a Bearer token |

## Request Body

```json
{
    "idsmm": 383,
    "amounts": 100,
    "target": "target_value"
}
```

| Field    | Type    | Required | Description                  |
|----------|---------|----------|------------------------------|
| idsmm    | integer | Yes      | SMM service/package ID       |
| amounts  | integer | Yes      | Quantity to order            |
| target   | string  | Yes      | Target username/link/etc     |

## Example Request

```http
POST https://magnesium.aisbirnusantara.com/api/ordersmm
Authorization: Bearer <API_KEY>
Content-Type: application/json

{
    "idsmm": 383,
    "amounts": 100,
    "target": "target_value"
}
```

## Example Response

```json
{
    "code": 200,
    "message": "Placing Order Success",
    "redirected": "/dashboard",
    "detail": {
        "id": "ACN123456789",
        "totalHarga": 319000,
        "totalFoll": 100
    },
    "item": {
        "id": 383,
        "name": "Youtube Subscribers - MAX 1K TERMURAH",
        "min": 50,
        "max": 1000,
        "price": 319000
    }
}
```

## Response Fields

| Field      | Type    | Description                                 |
|------------|---------|---------------------------------------------|
| code       | integer | HTTP-like status code (200 = success)       |
| message    | string  | Status message                              |
| redirected | string  | Redirect URL after order                    |
| detail     | object  | Order details                               |
| item       | object  | Ordered item details                        |

### `detail` Object

| Field      | Type    | Description                  |
|------------|---------|-----------------------------|
| id         | string  | Transaction/order ID        |
| totalHarga | integer | Total price                 |
| totalFoll  | integer | Total quantity ordered      |

### `item` Object

| Field | Type    | Description                |
|-------|---------|----------------------------|
| id    | integer | Service/package ID         |
| name  | string  | Service/package name       |
| min   | integer | Minimum order quantity     |
| max   | integer | Maximum order quantity     |
| price | integer | Price per unit             |

## Notes

- All parameters in the request body are required.
- Authentication is required via Bearer token.
- The `redirected` field provides a URL for post-order actions.
- Prices and limits are subject to change.
- No additional parameters are needed for balance payment.

