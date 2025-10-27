# Price SMM REST API Documentation

## Endpoint

```
GET https://kratos.aisbirnusantara.com/smm/category?name=
```

- **Method:** `GET`
- **Authentication:** Not required
- **Request Body:** None
- **Query Parameters:**
    - `name` (string, required): The category name to filter services, e.g. `[IG] Instagram Likes Indonesia`

## Example Request

```http
GET https://kratos.aisbirnusantara.com/smm/category?name=[IG]%20Instagram%20Likes%20Indonesia
```

## Example Response

```json
{
  "data": [
    {
      "id": 3900,
      "name": "Youtube views | Lifetime | min 500 | 10k-15k/day speed [ Recommended]",
      "note": "3 hours 25 minutes ",
      "category": "[YT] Youtube Views [Real and Active]",
      "type": "Youtube",
      "price": 25947,
      "priceSatuan": "25,947",
      "min": 100,
      "max": 100000000,
      "refill": 1
    },
    {
      "id": 3901,
      "name": "Youtube Views - 20k-50K- 30 Days Refill - S2 - Best and Stable",
      "note": "Youtube Views - 20k-50K- 30 Days Refill - S2 - Best and Stable",
      "category": "[YT] Youtube Views [Real and Active]",
      "type": "Youtube",
      "price": 24866,
      "priceSatuan": "24,866",
      "min": 100,
      "max": 10000000,
      "refill": 0
    },
    {
      "id": 26226,
      "name": "Youtube Views - 1-3% Likes [ Speed 500-1K/day ] [ Start Time : 0-5Min ] [ Lifetime Guaranteed ]",
      "note": "",
      "category": "[YT] Youtube Views [Real and Active]",
      "type": "Youtube",
      "price": 19028,
      "priceSatuan": "19,028",
      "min": 100,
      "max": 10000000,
      "refill": 1
    }
  ]
}
```

## Response Fields

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| status   | boolean | Request status (true if successful)              |
| message  | string  | Status message                                   |
| data     | array   | Array of service objects matching the category   |

### Service Object

Each object in the `data` array contains:

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| id       | integer | Service ID                                       |
| name     | string  | Service name                                     |
| type     | string  | Service type                                     |
| category | string  | Category name                                    |
| price    | number  | Price per unit                                   |
| min      | integer | Minimum order quantity                           |
| max      | integer | Maximum order quantity                           |
| refill   | integer | Refill available (1 = yes, 0 = no)               |
| status   | integer | Service status (1 = active, 0 = inactive)        |
| note     | string  | Additional notes (may contain HTML)              |

## Notes

- The `category` query parameter is required and must match a valid category name.
- The response lists available services for the specified category.
- All service details and availability are subject to change.

