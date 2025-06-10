# Price SMM REST API Documentation

## Endpoint

```
GET https://magnesium.aisbirnusantara.com/api/filtersmm?category=
```

- **Method:** `GET`
- **Authentication:** Not required
- **Request Body:** None
- **Query Parameters:**
    - `category` (string, required): The category name to filter services, e.g. `[IG] Instagram Likes Indonesia`

## Example Request

```http
GET https://magnesium.aisbirnusantara.com/api/filtersmm?category=[IG]%20Instagram%20Likes%20Indonesia
```

## Example Response

```json
{
    "status": true,
    "message": "OK",
    "data": [
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
            "id": 15567,
            "name": "🇮🇩Instagram Likes Photo / Video / TV / Reel Indonesia [40K] [REAL] [IMPRESSION + REACH + PROFILE VISIT [INSTAN] REFILL 7 HARI ⭐🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 7700,
            "min": 100,
            "max": 40000,
            "refill": 0,
            "status": 1,
            "note": "<p>REFILL .- AKUN INDONESIAAKTIF - CAMPURAN BOT -DAN AKUN TUMPAL</p>"
        },
        {
            "id": 15568,
            "name": "🇮🇩Instagram Likes Photo / Video / TV / Reel Indonesia [15K] [REAL] [IMPRESSION + REACH + PROFILE VISIT [INSTAN] REFILL 45 HARI ⭐🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 28600,
            "min": 100,
            "max": 15000,
            "refill": 1,
            "status": 1,
            "note": "<div class=\"w-full text-token-text-primary\" data-testid=\"conversation-turn-5\">\r\n<div class=\"px-4 py-2 justify-center text-base md:gap-6 m-auto\">\r\n<div class=\"flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion\">\r\n<div class=\"relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn\">\r\n<div class=\"flex-col gap-1 md:gap-3\">\r\n<div class=\"flex flex-grow flex-col max-w-full\">\r\n<div class=\"min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&]:mt-5 overflow-x-auto\" data-message-author-role=\"assistant\" data-message-id=\"521cba72-e329-4b94-8c42-dc41f7baad62\">\r\n<div class=\"markdown prose w-full break-words dark:prose-invert dark\">\r\n<p><strong>Tampilkan jumlah like jangan merahasiakannya! </strong><br><strong>Permintaan refill bisa dilakukan melalui tiket, baik lewat link maupun link API dengan fitur otomatis yang keren. Jangan pesan di tempat lain jika menginginkan refill. </strong><br><strong>Drop rate berkisar antara 5% - 20% [tergantung Instagram], bisa drop hingga 40% dengan update Instagram terbaru. Semua akun adalah akun Indonesia - tidak ada akun asing, tumbal, atau bot. Kami memberikan jaminan refill jika drop rate lebih dari 40% dalam 20 hari! </strong><br><strong>Bisa berkali kali untuk permintaan refill yang dapat diajukan!!! </strong><br><strong>Refill tidak berlaku jika drop rate kurang dari 40%, misalnya hanya 20% - kami akan menunggu sampai drop 40% untuk hasil refill yang segar dan optimal. </strong><br><strong>Dan kami tidak akan melakukan refill jika pembelian lebih dari 20 hari - refill tidak berlaku!!! </strong><button class=\"flex items-center gap-1.5 rounded-md p-1 text-xs hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible md:group-[.final-completion]:visible\"></button></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"
        },
        {
            "id": 15569,
            "name": "🇮🇩Instagram Likes Photo / Video / TV / Reel Indonesia [20K] [REAL] [IMPRESSION + REACH + PROFILE VISIT [INSN] REFILL 60 HARI ⭐🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 36300,
            "min": 100,
            "max": 20000,
            "refill": 1,
            "status": 1,
            "note": "<div class=\"w-full text-token-text-primary\" data-testid=\"conversation-turn-5\">\r\n<div class=\"px-4 py-2 justify-center text-base md:gap-6 m-auto\">\r\n<div class=\"flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion\">\r\n<div class=\"relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn\">\r\n<div class=\"flex-col gap-1 md:gap-3\">\r\n<div class=\"flex flex-grow flex-col max-w-full\">\r\n<div class=\"min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&]:mt-5 overflow-x-auto\" data-message-author-role=\"assistant\" data-message-id=\"521cba72-e329-4b94-8c42-dc41f7baad62\">\r\n<div class=\"markdown prose w-full break-words dark:prose-invert dark\">\r\n<p><strong>Tampilkan jumlah like jangan merahasiakannya! </strong><br><strong>Permintaan refill bisa dilakukan melalui tiket, baik lewat link maupun link API dengan fitur otomatis yang keren. Jangan pesan di tempat lain jika menginginkan refill. </strong><br><strong>Drop rate berkisar antara 5% - 20% [tergantung Instagram], bisa drop hingga 40% dengan update Instagram terbaru. Semua akun adalah akun Indonesia - tidak ada akun asing, tumbal, atau bot. Kami memberikan jaminan refill jika drop rate lebih dari 40% dalam 60mnhari! </strong><br><strong>Bisa berkali kali untuk permintaan refill yang dapat diajukan!!! </strong><br><strong>Refill tidak berlaku jika drop rate kurang dari 40%, misalnya hanya 20% - kami akan menunggu sampai drop 40% untuk hasil refill yang segar dan optimal. </strong><br><strong>Dan kami tidak akan melakukan refill jika pembelian lebih dari 60 hari - refill tidak berlaku!!!</strong></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"
        },
        {
            "id": 22563,
            "name": "🇮🇩Instagram Likes Photo / Video / TV / Reel Indonesia [40K] [REAL] [IMPRESSION + REACH + PROFILE VISIT [INSTAN] REFILL 30 HARI ⭐🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 18700,
            "min": 100,
            "max": 40000,
            "refill": 1,
            "status": 1,
            "note": "<p>JUMLAH LIKE JANGAN DI SEMBUNYIKAN REQUEST REFILL BISA VIA TIKET - LINK DAN LINK API OTOMATIS KEDIP - JANGAN ORDER DI TEMPAT LAIN JIKA INGIN REFILL - drop rate 5% - 20% [TERGANTUNG INSTAGRAMNYA] BISA DROP 40% LEBIHI NSTAGRAM UPDATE || SEMUA INDO GAK ADA AKUN LUAR - REAL ACCOUNT- AKUN TUMBAL - BOT ACCOUNT - jika dalam 10 hari drop rate lebih dari 40% itu garansi refill !!! refill requrest CUMA 1 KALI !!!! REFILL TIDAK BERLAKU JIKA DROPNYA KURANG DARI 40% MISAL CUMA 20% GAK AKAN KITA REFIL TUNGGU SAMPE DROP 40% AGAR HASIL REFILL FRESH DAN MAXIMAL ||| DAN TIDAK AKAN KITA REFILL JIKA PEMBELIAN LEBIH DARI 10 HARI TIDAK BERLAKU REFILLNYA !!! reqest refill ke tiket *syarat refill sesudah / sebelum order selama 3 hari jangan membeli di tempat manapun dan startaccount sesuai dengan yang orderan* || HARGA INI BELUM DI KURANG DENGAN BONUS DEPOSIT PROSES OTOMATIS</p>"
        },
        {
            "id": 22581,
            "name": "🇮🇩Instagram Likes Photo / Video / TV / Reel Indonesia [40K] [REAL] [IMPRESSION + REACH + PROFILE VISIT [INSTAN] REFILL 10 HARI ⭐🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 13200,
            "min": 100,
            "max": 40000,
            "refill": 1,
            "status": 1,
            "note": "<div class=\"w-full text-token-text-primary\" data-testid=\"conversation-turn-5\">\r\n<div class=\"px-4 py-2 justify-center text-base md:gap-6 m-auto\">\r\n<div class=\"flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion\">\r\n<div class=\"relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn\">\r\n<div class=\"flex-col gap-1 md:gap-3\">\r\n<div class=\"flex flex-grow flex-col max-w-full\">\r\n<div class=\"min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&]:mt-5 overflow-x-auto\" data-message-author-role=\"assistant\" data-message-id=\"521cba72-e329-4b94-8c42-dc41f7baad62\">\r\n<div class=\"markdown prose w-full break-words dark:prose-invert dark\">\r\n<p><strong>Tampilkan jumlah like jangan merahasiakannya! </strong><br><strong>Permintaan refill bisa dilakukan melalui tiket, baik lewat link maupun link API dengan fitur otomatis yang keren. Jangan pesan di tempat lain jika menginginkan refill. </strong><br><strong>Drop rate berkisar antara 5% - 20% [tergantung Instagram], bisa drop hingga 40% dengan update Instagram terbaru. Semua akun adalah akun Indonesia - tidak ada akun asing, tumbal, atau bot. Kami memberikan jaminan refill jika drop rate lebih dari 40% dalam 10 hari! </strong><br><strong>Bisa berkali kali untuk permintaan refill yang dapat diajukan!!! </strong><br><strong>Refill tidak berlaku jika drop rate kurang dari 40%, misalnya hanya 20% - kami akan menunggu sampai drop 40% untuk hasil refill yang segar dan optimal. </strong><br><strong>Dan kami tidak akan melakukan refill jika pembelian lebih dari 10 hari - refill tidak berlaku!!! </strong><button class=\"flex items-center gap-1.5 rounded-md p-1 text-xs hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible md:group-[.final-completion]:visible\"></button></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"
        },
        {
            "id": 23401,
            "name": "🇮🇩Instagram Likes Photo / Video / TV / Reel Indonesia [40K] [REAL] [IMPRESSION + REACH + PROFILE VISIT [INSTAN] REFILL 8 HARI ⭐🔥",
            "type": "Default",
            "category": "[IG] Instagram Likes Indonesia",
            "price": 11000,
            "min": 100,
            "max": 40000,
            "refill": 0,
            "status": 1,
            "note": "<p>REFILL 3 HARI .- REFILL BERKALI KALI MAX 2K PER POSTINGAN</p>"
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

