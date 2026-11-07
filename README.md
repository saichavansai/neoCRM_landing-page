# neoCRM landing page

React + Vite + Tailwind CSS + Framer Motion + Lucide icons. One landing page; the "Buy now" button opens a download popup.

## Run
    npm install
    npm run dev        (opens http://localhost:5173)
    npm run build      (production files go to /dist)

## Where to change things
- src/config.js              product name, price, download file name and link
- public/downloads/          put the real neoCRM file here (replace neocrm-demo.zip)
- src/services/checkout.js   the ONE place to connect the real payment
- src/data/content.js        feature texts and sample pipeline leads
- src/components/            one file per page section; BuyModal.jsx is the popup
- src/index.css              Tailwind setup. Page design uses Tailwind classes in each component.
- src/modal.css              styles for the purchase popup
- public/screens/            real neoCRM screenshots used on the page
- public/video/              product video (neocrm-demo.mp4) and its poster image

## For the backend team
Clicking "Buy now" opens a popup with the purchase form (email, phone, GSTIN, state).
On "Buy Now" the form calls `startCheckout(order)` in src/services/checkout.js.
Replace its body with the real payment call: resolve on success, throw on failure.
After success the popup shows the download button. Serve the real file from a
protected link, because anything in public/ can be downloaded by anyone who knows
its address.
