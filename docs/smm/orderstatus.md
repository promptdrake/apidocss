# Price SMM REST API Documentation

## Endpoint

```
GET https://magnesium.aisbirnusantara.com/api/smmhistory?page=1
```

- **Method:** `GET`
- **Authentication:** Bearer API key required in the `Authorization` header
- **Request Body:** None
- **Query Parameters:**
    - `page` (integer, required): Page number for pagination

## Example Request

```http
GET https://magnesium.aisbirnusantara.com/api/smmhistory?page=1
Authorization: Bearer YOUR_API_KEY
```

## Example Response

```json
{
    "totalPages": 1,
    "response": [
        {
            "id": 4,
            "userId": "admi_ymd",
            "apikey": "[HIDDEN]",
            "trxid": "ACN1749309293807",
            "idPesanan": "17987979",
            "productId": "37918",
            "namaproduk": "Instagram Likes [ Max 1M ] | Low Quality | Cancel Enable | No Refill ⚠️ | Instant | Day 200K",
            "totalFoll": 1000,
            "target": "https://www.instagram.com/p/DKbytzAyPTG/",
            "price": 201,
            "isFullgaransi": "0",
            "date": "6/7/2025, 10:14:54 PM",
            "status": "Success",
            "charge": 183,
            "start_count": 6,
            "remains": 0
        },
        {
            "id": 2,
            "userId": "admi_ymd",
            "apikey": "[HIDDEN]",
            "trxid": "ACN1748943051386",
            "idPesanan": "17939836",
            "productId": "38311",
            "namaproduk": "Instagram Likes [ Max 1M ] | Low Quality | Cancel Enable | No Refill ⚠️ | Instant | Day 200K",
            "totalFoll": 5000,
            "target": "https://www.instagram.com/p/DKwt-RwSd05/",
            "price": 197,
            "isFullgaransi": "0",
            "date": "6/3/2025, 4:30:52 PM",
            "status": "Success",
            "charge": 895,
            "start_count": 156,
            "remains": 0
        }
    ]
}
```

## Response Fields

| Field        | Type      | Description                                              |
|--------------|-----------|----------------------------------------------------------|
| totalPages   | integer   | Total number of pages available                          |
| response     | array     | Array of order history objects                           |

### Order Object

| Field         | Type      | Description                                             |
|---------------|-----------|---------------------------------------------------------|
| id            | integer   | Order record ID                                         |
| userId        | string    | User identifier                                         |
| apikey        | string    | API key (hidden in response example)                    |
| trxid         | string    | Transaction ID                                          |
| idPesanan     | string    | Order ID                                                |
| productId     | string    | Product ID                                              |
| namaproduk    | string    | Product name                                            |
| totalFoll     | integer   | Total followers/quantity ordered                        |
| target        | string    | Target URL or username                                  |
| price         | integer   | Price per unit                                          |
| isFullgaransi | string    | Full warranty flag ("1" for yes, "0" for no)            |
| date          | string    | Order date and time                                     |
| status        | string    | Order status                                            |
| charge        | integer   | Total charge                                            |
| start_count   | integer   | Starting count                                          |
| remains       | integer   | Remaining count                                         |

## Notes

- Bearer API key must be provided in the `Authorization` header.
- Use the `page` query parameter to paginate through order history.
- The response lists order history for the authenticated user.
- The `apikey` field is hidden in the example for security.
