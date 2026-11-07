import { features } from "../data/content";

export default function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <h2>What neoCRM helps your team do</h2>
        <div className="grid">
          {features.map(([title, text]) => (
            <div key={title}><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
        <p className="note">Integrations and calling depend on the provider, credentials and setup for your deployment.</p>
      </div>
    </section>
  );
}
