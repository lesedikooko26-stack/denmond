import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <h2 className="section-heading">Get in touch</h2>
          <a href="mailto:hello@denmond.com" className="contact__email">
            hello@denmond.com
          </a>
          <ul className="contact__socials">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <p className="contact__success">Thank you. Your message has been received.</p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} />

              <button type="submit" className="btn btn--primary">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
