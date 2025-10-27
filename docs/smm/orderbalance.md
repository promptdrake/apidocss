# Place SMM Order REST API Documentation

## Endpoint

```
POST https://kratos.aisbirnusantara.com/smm/buy
```

- **Method:** `POST`
- **Authentication:** Required (At Body apikey)
- **Request Body:** JSON
- **Query Parameters:** None


## Request Body

```json
{
    "service_id": 383,
    "amount": 100,
    "target": "target_value",
    "apikey": "YOUR_API_KEY"
}
```

| Field    | Type    | Required | Description                  |
|----------|---------|----------|------------------------------|
| service_id    | integer | Yes      | SMM service/package ID       |
| amount  | integer | Yes      | Quantity to order            |
| target   | string  | Yes      | Target username/link/etc     |
| apikey   | string  | Yes      | User Apikey     |

## Example Request

```http
POST https://kratos.aisbirnusantara.com/smm/buy
Content-Type: application/json

{
    "service_id": 383,
    "amount": 100,
    "target": "target_value",
    "apikey": "YOUR_API_KEY"
}
```

## Notes

- All parameters in the request body are required.
- Prices and limits are subject to change.
- No additional parameters are needed for balance payment.

