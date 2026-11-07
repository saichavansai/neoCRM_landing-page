export const PRODUCT_NAME = "neoCRM";
export const PRICE_AMOUNT = 999;
export const GST_RATE = 0;
export const PRICE_NOTE = "One-time payment";
export const DOWNLOAD_URL = "/downloads/neocrm-demo.zip";
export const DOWNLOAD_FILE_NAME = "neocrm-demo.zip";

export function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
}
export const GST_AMOUNT = Math.round(PRICE_AMOUNT * GST_RATE * 100) / 100;
export const TOTAL = Math.round((PRICE_AMOUNT + GST_AMOUNT) * 100) / 100;
export const PRICE = formatINR(PRICE_AMOUNT);
