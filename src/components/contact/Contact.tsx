// Contact page component with contact form, info, and map
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <div className="row">
        {/* Contact form section */}
        <div className="col-md-6 top">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="+20 10 12345678"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows={5}
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact information section */}
        <div className="col-md-6">
          <h5 className="col">Get in touch</h5>
          <p className="col">Email: support@yourrestaurant.com</p>
          <p className="col">Phone: +20 10 080260757</p>
          <p className="col">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="me-2 text-danger"
            />
            Address: 108 Saqr Quraish Buildings, next to Al-Farouk Mosque,
            Sheraton Al Matar, Nozha District
          </p>

          <h5 className="col mt-4">Follow us</h5>
          <div className="col d-flex gap-3">
            <a
              href="https://www.facebook.com/shrimpzone1/"
              className="icon-facebook fs-1 text-decoration-none"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/shrimpzone1/?hl=ar"
              className="icon-instagram fs-1 text-decoration-none"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@shrimpzone0"
              className="icon-tiktok fs-1  text-decoration-none"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>

          {/* Google map section (optional) */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110449.57841252077!2d31.441831429207856!3d30.107090922957063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1458176b80c66707%3A0x710439a6f1bc1e4e!2zMTA4INi12YLYsSDZgtix2YrYtCDZhdiz2KfZg9mG2Iwg2KjYrNmI2KfYsSDZhdiz2KzYryDYp9mE2YHYp9ix2YjZgtiMINi02YrYsdin2KrZiNmGINin2YTZhdi32KfYsdiMINmC2LPZhSDYp9mE2YbYstmH2Kk!3m2!1d30.1071095!2d31.371791199999997!5e0!3m2!1sar!2seg!4v1752790928784!5m2!1sar!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
