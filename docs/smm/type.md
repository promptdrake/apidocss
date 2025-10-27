# Price SMM REST API Documentation

## Endpoint

```
GET https://kratos.aisbirnusantara.com/smm/type?name=
```

- **Method:** `GET`
- **Authentication:** Not required
- **Request Body:** None
- **Query Parameters:** YES
name: Required

## Example Request

```http
GET https://kratos.aisbirnusantara.com/smm/type?name=youtube
```

## Available type
Check at client.aisbirnusantara.com

## Example Response

```json
{
  "data": [
    {
      "id": 383,
      "name": "Youtube Subscribers - MAX 1K TERMURAH",
      "note": "- 0 - 12h Mulai - Kecepatan 500 - 1k Untuk saat ini - Non Drop - Lifetime Guaranteed",
      "category": "[YT] Youtube Subscribers ",
      "type": "Youtube",
      "price": 319000,
      "priceSatuan": "319",
      "min": 50,
      "max": 1000,
      "refill": 0
    },
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
    }
  ]
}
```

## Response Fields

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| data     | object  | Object containing arrays of category names        |

### Data Object

Each key in the `data` object represents a platform (e.g., `youtube`, `instagram`) and maps to an array of category names for that platform.

## Notes

- No authentication or parameters are required.
- The response lists available service categories grouped by platform.
- All categories and groupings are subject to change.

