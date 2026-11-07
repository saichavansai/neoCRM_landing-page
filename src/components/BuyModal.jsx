import { useEffect, useRef, useState } from "react";
import {
  PRODUCT_NAME, PRICE_AMOUNT, GST_RATE, GST_AMOUNT, TOTAL, formatINR,
  DOWNLOAD_URL, DOWNLOAD_FILE_NAME,
} from "../config";
import { STATES, COUNTRY_CODES } from "../data/states";
import { startCheckout } from "../services/checkout";

const GSTIN_PATTERN = /^\d{2}[A-Z]{5}\d{4}[A-Z][A-Z\d]Z[A-Z\d]$/;

function validate(v) {
  const e = {};
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!/^\d{10}$/.test(v.phone.trim())) e.phone = "Enter a 10-digit phone number.";
  if (v.gstin.trim() && !GSTIN_PATTERN.test(v.gstin.trim().toUpperCase())) e.gstin = "Enter a valid 15-character GSTIN, or leave it empty.";
  if (!v.state) e.state = "Select your state.";
  return e;
}

export default function BuyModal({ onClose }) {
  const [step, setStep] = useState("form");
  const [values, setValues] = useState({ email: "", code: "+91", phone: "", gstin: "", state: "" });
  const [errors, setErrors] = useState({});
  const firstField = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && step !== "processing" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, step]);

  useEffect(() => { firstField.current?.focus(); }, []);

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStep("processing");
    try {
      await startCheckout({
        email: values.email.trim(),
        phone: values.code + values.phone.trim(),
        gstin: values.gstin.trim().toUpperCase(),
        state: values.state,
        amount: TOTAL,
      });
      setStep("done");
    } catch {
      setStep("error");
    }
  }

  const Err = ({ name }) => errors[name] ? <div className="err" id={name + "-err"}>{errors[name]}</div> : null;

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && step !== "processing" && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="buy-title">
        {step !== "processing" && <button className="close" onClick={onClose} aria-label="Close">×</button>}

        {step === "form" && (
          <form onSubmit={submit} noValidate>
            <h2 id="buy-title">Buy {PRODUCT_NAME}</h2>
            <p className="form-help">Access to this purchase will be sent to this email</p>

            <input ref={firstField} className="inp" name="email" type="email" placeholder="Email Address"
              aria-label="Email address" autoComplete="email" value={values.email} onChange={change} />
            <Err name="email" />

            <div className="phone">
              <select name="code" aria-label="Country code" value={values.code} onChange={change}>
                {COUNTRY_CODES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <input name="phone" type="tel" inputMode="numeric" placeholder="Phone number *"
                aria-label="Phone number" autoComplete="tel-national" value={values.phone} onChange={change} />
            </div>
            <Err name="phone" />

            <input className="inp" name="gstin" placeholder="GSTIN (Optional)" aria-label="GSTIN, optional"
              maxLength={15} value={values.gstin} onChange={change} />
            <Err name="gstin" />

            <select className="inp sel" name="state" aria-label="State" value={values.state} onChange={change}>
              <option value="">Select State</option>
              {STATES.map((s) => <option key={s}>{s}</option>)}
            </select>
            <Err name="state" />

            <div className="totals">
              <div><span>Sub Total</span><span>{formatINR(PRICE_AMOUNT)}</span></div>
              {GST_RATE > 0 && <div><span>GST</span><span>{formatINR(GST_AMOUNT)}</span></div>}
              <div className="grand"><span>Total</span><span>{formatINR(TOTAL)}</span></div>
            </div>

            <button className="btn buy" type="submit"><span>Buy Now</span><span className="buy-arrow" aria-hidden="true">→</span></button>
            <p className="demo-note">Demo mode: no real payment is taken yet.</p>
          </form>
        )}

        {step === "processing" && (
          <div className="center" role="status">
            <div className="spinner" />
            <h2 id="buy-title">Processing your payment</h2>
            <p>Please do not close this window.</p>
          </div>
        )}

        {step === "done" && (
          <div className="center">
            <div className="tick" aria-hidden="true">✓</div>
            <h2 id="buy-title">Download {PRODUCT_NAME}</h2>
            <p>Your purchase is complete. Click the button to start the download.</p>
            <div className="file"><div><b>{DOWNLOAD_FILE_NAME}</b><span>Demo file</span></div></div>
            <a className="btn" href={DOWNLOAD_URL} download>Download {PRODUCT_NAME}</a>
            <p className="demo-note">This is a demo file. The final {PRODUCT_NAME} file will replace it.</p>
          </div>
        )}

        {step === "error" && (
          <div className="center">
            <h2 id="buy-title">Payment did not go through</h2>
            <p>Nothing was charged. Please try again.</p>
            <button className="btn" onClick={() => setStep("form")}>Try again</button>
          </div>
        )}
      </div>
    </div>
  );
}
