# Price SMM REST API Documentation

## Endpoint

```
GET https://kratos.aisbirnusantara.com/smm/getallprice
```

- **Method:** `GET`
- **Authentication:** Not required
- **Request Body:** None
- **Query Parameters:** None

## Example Request

```http
GET https://kratos.aisbirnusantara.com/smm/getallprice
```

## Example Response

```json
{
  "data": [
    {
      "id": 37414,
      "name": "CapCut Followers Nama Indonesia [3K] [INSTAN]",
      "note": "\u003Cp\u003EINPUT TARGET LINK PROFILE \u003Cbr\u003ECONTOH \" \u003Ca href=\"https://mobile.capcutshare.com/s/Zs8kQe3Qo/\" target=\"_blank\"\u003Ehttps://mobile.capcutshare.com/s/Zs8kQe3Qo/\u003C/a\u003E \"\u003C/p\u003E",
      "category": "[-]  CapCut",
      "type": "capcut",
      "price": 11000,
      "priceSatuan": "11",
      "min": 100,
      "max": 3000,
      "refill": 0
    },
    {
      "id": 27661,
      "name": "TikTok Views | Max 50M | Cheap | Days/10M-20M",
      "note": "",
      "category": "[-] Cheapest Services on the Market",
      "type": "Other",
      "price": 205,
      "priceSatuan": "0,205",
      "min": 100,
      "max": 2147483647,
      "refill": 0
    },
    {
      "id": 27667,
      "name": "Instagram Video Views [Max Unlimited] | All Link | Fast ⚡️",
      "note": "",
      "category": "[-] Cheapest Services on the Market",
      "type": "Other",
      "price": 142,
      "priceSatuan": "0,142",
      "min": 100,
      "max": 50000000,
      "refill": 0
    }
  ]
}
```

## Response Fields

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
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
