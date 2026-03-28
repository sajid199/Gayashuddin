# दरबार-ए-गौस पाक — वेबसाइट

## फ़ाइलें (Files)
| फ़ाइल | पेज |
|-------|-----|
| index.html | होम पेज |
| about.html | परिचय |
| services.html | सेवाएं |
| certificate.html | प्रमाण पत्र |
| gallery.html | वीडियो / गैलरी |
| testimonials.html | समीक्षाएं |
| contact.html | संपर्क |
| style.css | सभी पेजों का डिज़ाइन |
| main.js | JavaScript |

## फ़ोटो जोड़ने का तरीका
अपनी फ़ोटो को इन नामों से save करें और website folder में रखें:

- `hazrat-photo.jpg` — हज़रत जी की फ़ोटो (जो आपने शेयर की है)
- `certificate.jpg` — प्रमाण पत्र की फ़ोटो
- `aadhar-card.jpg` — आधार कार्ड की फ़ोटो
- `photo1.jpg`, `photo2.jpg` — गैलरी की फ़ोटोज़

## YouTube वीडियो जोड़ना
gallery.html में "VIDEO SLOT" वाली जगह पर:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        width="100%" height="315" allowfullscreen></iframe>
```
अपना VIDEO_ID YouTube embed link से लें।

## YouTube Channel Link
gallery.html में यह बदलें:
```
https://youtube.com/@YourChannelName
```
को अपने असली channel URL से बदलें।

## Website कैसे चलाएं?
किसी भी browser में `index.html` open करें — website चलेगी।

Online डालने के लिए:
- Hostinger / GoDaddy / BigRock पर hosting लें
- सभी files upload करें
- Domain name जैसे: hazratgyasudddin.in लें
