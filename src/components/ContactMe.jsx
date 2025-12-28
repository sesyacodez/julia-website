import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_ovwloyi",
        "template_r77haf6",
        templateParams,
        "us3OLJKNunjT-OPnf"
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-me container" id="contact-me">
      <div className="contact-me__image">
        <img src="img/contact-me/japandi.jpg" alt="Contact visual" />
      </div>

      <div className="contact-me__text">
        <h2 className="contact-me__title">Contact Me</h2>
        <svg
          className="contact-me__divider"
          xmlns="http://www.w3.org/2000/svg"
          width="3000"
          height="31"
          style={{ width: "8%" }}
        >
          <path
            d="M0 15.5 L3000 15.5"
            stroke="var(--text-color)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <p className="contact-me__subtitle">
          LET'S CREATE SOMETHING GREAT TOGETHER!
        </p>

        <form className="contact-me__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />

          {status.message && (
            <p
              className={`contact-me__status contact-me__status--${status.type}`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="contact-me__button"
            disabled={isLoading}
          >
            {isLoading ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
