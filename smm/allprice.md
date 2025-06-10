# Price SMM REST API Documentation

## Endpoint

```
GET https://magnesium.aisbirnusantara.com/api/pricesmm
```

- **Method:** `GET`
- **Authentication:** Not required
- **Request Body:** None
- **Query Parameters:** None

## Example Request

```http
GET https://magnesium.aisbirnusantara.com/api/pricesmm
```

## Example Response

```json
{
    "status": true,
    "message": "OK",
    "data": [
        {
            "id": 383,
            "name": "Youtube Subscribers - MAX 1K TERMURAH",
            "type": "Default",
            "category": "[YT] Youtube Subscribers ",
            "price": 319000,
            "min": 50,
            "max": 1000,
            "refill": 0,
            "status": 1,
            "note": "- 0 - 12h Mulai - Kecepatan 500 - 1k Untuk saat ini - Non Drop - Lifetime Guaranteed"
        },
        {
            "id": 3291,
            "name": "Instagram Likes Indonesia [30K] ALL LINK [REFILL 5 HARI ] ⚡🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 6600,
            "min": 100,
            "max": 30000,
            "refill": 0,
            "status": 1,
            "note": "<p><span style=\"font-family: \"Arial Black\"; background-color: rgb(255, 255, 255);\"><b style=\"\">NO REFILL REAL ACCOUNT + BOT</b></span></p>"
        },
        {
            "id": 3900,
            "name": "Youtube views | Lifetime | min 500 | 10k-15k/day speed [ Recommended]",
            "type": "Default",
            "category": "[YT] Youtube Views [Real and Active]",
            "price": 25638,
            "min": 100,
            "max": 100000000,
            "refill": 1,
            "status": 1,
            "note": "3 hours 25 minutes "
        },
        {
            "id": 3901,
            "name": "Youtube Views - 20k-50K- 30 Days Refill - S2 - Best and Stable",
            "type": "Default",
            "category": "[YT] Youtube Views [Real and Active]",
            "price": 24570,
            "min": 100,
            "max": 10000000,
            "refill": 0,
            "status": 1,
            "note": "Youtube Views - 20k-50K- 30 Days Refill - S2 - Best and Stable"
        }
    ]
}
```

## Response Fields

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| status   | boolean | Request status (true if successful)              |
| message  | string  | Status message                                   |
| data     | array   | List of price objects                            |

### Price Object

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| id       | integer | Unique service ID                                |
| name     | string  | Service name                                     |
| type     | string  | Service type                                     |
| category | string  | Service category                                 |
| price    | integer | Price in local currency                          |
| min      | integer | Minimum order quantity                           |
| max      | integer | Maximum order quantity                           |
| refill   | integer | Refill available (1 = yes, 0 = no)               |
| status   | integer | Service status (1 = active, 0 = inactive)        |
| note     | string  | Additional notes (may contain HTML)              |

## Notes

- No authentication or parameters are required.
- The `note` field may contain HTML tags.
- All prices and limits are subject to change.
