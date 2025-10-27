# MyHistory SMM REST API Documentation

## Endpoint

```
GET https://putri.aisbirnusantara.com/smm/myhistory?apikey=YOUR_API_KEY&page=1
```

- **Method:** `GET`
- **Authentication:** API key required as a query parameter (`apikey`)
- **Request Body:** None
- **Query Parameters:**
    - `apikey` (string, required): Your API key
    - `page` (integer, required): Page number for pagination

## Example Request

```http
GET https://putri.aisbirnusantara.com/smm/myhistory?apikey=YOUR_APIKEY&page=1
```

## Example Response

```json
{
  "data": [
    {
      "id": 3,
      "userid": "admi_ymd",
      "apikey": "ACN",
      "serviceName": "IGL26 (50/300K) {70K-80k/day} [Real Mixed] NR",
      "serviceId": 25583,
      "quantity": "50",
      "target": "https://www.instagram.com/p/DNls0vNSXiE/",
      "status": "Pending",
      "created_at": "2025-10-02T02:05:54+07:00",
      "idResseler": 19030594,
      "isRefunded": 0,
      "priceTotal": "25"
    }
  ],
  "msg": "OK",
  "status": true
}
```

## Response Fields

| Field        | Type      | Description                                              |
|--------------|-----------|----------------------------------------------------------|
| data         | array     | Array of order objects                                   |
| msg          | string    | Response message                                         |
| status       | boolean   | Request status (true if successful)                      |

### Order Object

| Field        | Type      | Description                                              |
|--------------|-----------|----------------------------------------------------------|
| id           | integer   | Order record ID                                          |
| userid       | string    | User identifier                                          |
| apikey       | string    | API key used for the request                             |
| serviceName  | string    | Name of the service/product                              |
| serviceId    | integer   | Service/product ID                                       |
| quantity     | string    | Quantity ordered                                         |
| target       | string    | Target URL or username                                   |
| status       | string    | Order status (e.g., Pending, Success)                    |
| created_at   | string    | Order creation date and time (ISO 8601 format)           |
| idResseler   | integer   | Reseller ID                                              |
| isRefunded   | integer   | Refund status (1 for refunded, 0 for not refunded)       |
| priceTotal   | string    | Total price of the order                                 |

## Notes

- The `apikey` must be provided as a query parameter.
- Use the `page` parameter to paginate through order history.
- The response lists order history for the authenticated API key.
- The `isRefunded` field indicates if the order has been refunded.
