# Price SMM REST API Documentation

## Endpoint

```
GET https://magnesium.aisbirnusantara.com/api/smminit
```

- **Method:** `GET`
- **Authentication:** Not required
- **Request Body:** None
- **Query Parameters:** None

## Example Request

```http
GET https://magnesium.aisbirnusantara.com/api/smminit
```

## Example Response

```json
{
    "status": true,
    "message": "OK",
    "data": {
        "youtube": [
            "[YT] Youtube Subscribers ",
            "[YT] Youtube Views [Real and Active]",
            "[YT] YouTube Likes/ Dislikes / Upvotes",
            "[YT] YouTube Live Stream Viewers",
            "[YT] Youtube Live Stream [ New Low Price Server ] 100% concurrent",
            "[YT] Youtube Live Stream [ 80-90% Concurrent]",
            "[YT]  Youtube Livestream Views [Emergency} Crypto and Gaming Stream",
            "[YT] YouTube Live Stream [ 50-80% Concurrent] #Best Seller",
            "[YT] YouTube Live Stream [ 30 Minute to 24 hours ] [ Low Quality]",
            "[YT] YouTube Live Stream [ 15 Minute to 24 hours ] [ PREMIUM QUALITY MIN - 100 ]",
            "[YT] Youtube Views {High Retention}",
            "[YT] Youtube Live Stream | Premiere",
            "[YT] Youtube Comments/Reply Likes/Dislikes",
            "[YT] YouTube Live Stream [ 30 Minute to 24 hours ] [ HIGH ACTIVE VIEWERS]",
            "[YT] Youtube Views - NO GUARANTEE - Service Only for SEO",
            "[YT] Youtube Views {Normal} [READ DESCRIPTION BEFORE ORDERING]",
            "[YT] Youtube Shorts",
            "[YT] Youtube Live Stream [ Start 0-5 minute] Concurrent 100%",
            "[YT] 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - [ BEST LIVE STREAM SERVER ] 100% ConCurrent",
            "[YT] YouTube Live Streaming | [ Latest Service ]",
            "[YT] Youtube Views Native ADS",
            "[YT] Youtube Views [ 𝐍𝐨𝐧 𝐃𝐫𝐨𝐩 ]",
            "[YT] Youtube Live Stream [ NEW PACKAGE ] [ MEDIUM QUALITY]",
            "[YT] YouTube Views Best Services ⭐️⭐️⭐️",
            "[YT] YouTube Views {Ads}"
        ],
        "instagram": [
            "[IG] Instagram Likes Indonesia",
            "[IG] Instagram Followers [Refill] ♻️",
            "[IG] Instagram Reels Views/Likes/Comments",
            "[IG] Instagram Views [IGTV / VIDEO / REEL]",
            "[IG] Instagram Followers Indonesia Gender / KOTA  [ SESUAI JENIS KELAMIN DAN KOTA ]",
            "[IG] Instagram Likes",
            "[IG] Instagram Likes Real",
            "[IG] Instagram - Impressions / HighLights / Reach / Profile Visits / Shares",
            "[IG] Instagram Story Quiz/Poll Votes",
            "[IG] Instagram Top (Comments)",
            "[IG] Instagram Saves",
            "[IG] Instagram Followers Refill 365 Hari ♻️",
            "[IG] Instagram Followers [ASIA] ",
            "[IG] Instagram Followers 𝗛𝗤 𝗥𝗘𝗔𝗟 𝟭𝟱+ 𝗣𝗢𝗦𝗧𝗦 [ 𝗦𝟮]",
            "[IG] Instagram Followers Indonesia",
            "[IG] Instagram Followers [ Old Accounts ] [ İncreases Likes + Story Views + Profile Views ]",
            "[IG] Instagram Story - Viewers & Stats",
            "[IG] Instagram Followers Update",
            "[IG] Instagram  Followers INDIA"
        ],
        "tiktok": [
            "[TK] Tiktok Followers",
            "[TK] Tiktok Creator Comments [Verified Profiles]",
            "[TK] Tiktok Likes",
            "[TK] TikTok Likes [TARGETED]",
            "[TK] TikTok Saves",
            "[TK] Tiktok Shares / Comments",
            "[TK] Tiktok Views",
            "[TK] TikTok Indonesia",
            "[TK] TikTok Likes | Guaranteed ♻️",
            "[TK] TikTok Likes Gender",
            "[TK] TikTok - Buzzer Indonesia [ REAL ]",
            "[TK]TikTok Followers ᵁᴾᴰᴬᵀᴱᴰ",
            "[TK] Tiktok Live Stream Views | 𝗖𝗵𝗲𝗮𝗽 🥇"
        ],
        "other": [
            "[-] Tokopedia",
            "🛒 Shopee Followers Indonesia",
            "[-] SoundCloud Plays",
            "[-] Cheapest Services on the Market",
            "𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - Views [ BEST FOR SEO ]",
            "[-]  CapCut",
            "Youtube Live Stream [ NEW PACKAGE ] [ CHEAPEST PRICE]"
        ],
        "telegram": [
            "[TE] Telegram Post Views",
            "[TE] Telegram Members and Votes",
            "[TW] Twitter Favorites / Likes",
            "[TW] Twitter Poll Votes",
            "[TW] Twitter Video Views",
            "[TW] Twitter Video Views [Country Targeted]",
            "[WT] Website Traffic",
            "[TE] Telegram Permium Reaction",
            "[TE] Telegram Reactions",
            "[SY] Spotify {Monthly Listeners}",
            "[SY] Spotify Monthly Listeners [ Targeted Country] [Min 1k]",
            "[TW] Twitter Followers",
            "[TW] Twitter Statistics",
            "[TW] Twitter Statistics Services",
            "[TE] Tik-Tok Livestream Views"
        ],
        "facebook": [
            "[FB] Facebook Live Stream",
            "[FB] Facebook Reels Views",
            "[FB] Facebook Shares",
            "[FB] Facebook Video Views/Story views",
            "[FB] Facebook Live Stream Views",
            "[FB] Facebook Live Stream Views 2",
            "[FB] Facebook Comments",
            "[FB] Facebook Page LIKES / Followers ",
            "[FB] Facebook Profile Followers",
            "[FB] Facebook Post Likes",
            "[FB] Facebook Post Reactions"
        ],
        "spotify": [
            "[SY] Spotify Plays",
            "[SY] Spotify Followers",
            "[SY] Spotify PlayList Plays"
        ]
    }
}
```

## Response Fields

| Field    | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| status   | boolean | Request status (true if successful)              |
| message  | string  | Status message                                   |
| data     | object  | Object containing arrays of category names        |

### Data Object

Each key in the `data` object represents a platform (e.g., `youtube`, `instagram`) and maps to an array of category names for that platform.

## Notes

- No authentication or parameters are required.
- The response lists available service categories grouped by platform.
- All categories and groupings are subject to change.

