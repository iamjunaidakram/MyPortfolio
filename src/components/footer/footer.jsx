import "./style.scss";
import { useEffect, useRef, useState } from "react";
import {
  GithubOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  MailOutlined,
  EnvironmentOutlined,
  BehanceOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  UserOutlined,
  ProfileOutlined,
  StarOutlined,
  CommentOutlined,
  BulbOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footerElement = footerRef.current;

    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(footerElement);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(footerElement);

    return () => {
      observer.unobserve(footerElement);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? "footer-visible" : ""}`}
    >
      <div className="footer-container">
        <div className="footer-col footer-animate footer-delay-1">
          <div className="footer-logo">Junaid Akram</div>

          <p className="footer-desc">
            Frontend developer specializing in Angular and scalable UI systems.
            I build clean, responsive, and high-performance web interfaces.
          </p>
        </div>

        <div className="footer-col footer-animate footer-delay-2">
          <div>
            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">
              <li className="footer-contact">
                <UserOutlined />
                <a href="#about">About</a>
              </li>

              <li className="footer-contact">
                <BulbOutlined />
                <a href="#skills">Skills</a>
              </li>

              <li className="footer-contact">
                <ProfileOutlined />
                <a href="#projects">Projects</a>
              </li>

              <li className="footer-contact">
                <StarOutlined />
                <a href="#experience">Experience</a>
              </li>

              <li className="footer-contact">
                <CommentOutlined />
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-col footer-animate footer-delay-3">
          <h4 className="footer-title">Contact</h4>

          <a className="footer-contact" href="tel:+923033489769">
            <div className="footer-contact-img">
              <PhoneOutlined
                style={{ fontSize: "20px" }}
                className="footer-icon-rotate"
              />
            </div>
            <span>+92-303-3489769</span>
          </a>

          <a
            className="footer-contact"
            href="https://maps.google.com/?q=Faisalabad,Pakistan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-contact-img">
              <EnvironmentOutlined style={{ fontSize: "20px" }} />
            </div>
            <span>Faisalabad, Pakistan</span>
          </a>

          <a className="footer-contact" href="mailto:thejunaidakram@gmail.com">
            <div className="footer-contact-img">
              <MailOutlined style={{ fontSize: "18px" }} />
            </div>
            <span>thejunaidakram@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom footer-animate footer-delay-4">
        <div>
          © {new Date().getFullYear()} All Rights Reserved By{" "}
          <span>Junaid Akram</span>
        </div>

        <div className="footer-socials">
          <a href="#" target="_blank" rel="noreferrer">
            <InstagramOutlined style={{ fontSize: "19px" }} />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <YoutubeOutlined style={{ fontSize: "22px" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/junaid-akram-4a0a19202/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinOutlined style={{ fontSize: "18px" }} />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <GithubOutlined style={{ fontSize: "18px" }} />
          </a>

          <a
            href="https://www.behance.net/junaidakram45"
            target="_blank"
            rel="noreferrer"
          >
            <BehanceOutlined style={{ fontSize: "24px" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
