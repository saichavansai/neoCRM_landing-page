export default function MobileApp() {
  return (
    <section>
      <div className="wrap mobile">
        <div>
          <h2>Check in from your phone</h2>
          <p style={{ color: "var(--mute)" }}>The mobile companion app shows your dashboard, lead details and follow-up tasks, with tap-to-call where available and configured.</p>
        </div>
        <div className="col" style={{ minHeight: 200 }}>
          <h3>Today's follow-ups</h3>
          <div className="lead">Call Maple Dental</div>
          <div className="lead">Send proposal to Orbit Logistics</div>
        </div>
      </div>
    </section>
  );
}
