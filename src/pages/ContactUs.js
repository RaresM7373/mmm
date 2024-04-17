import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterDetails from "../components/FooterDetails";
import "./ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const onTextGalbenPng2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="contact-us">
      <section className="main-content-wrapper">
        <div className="main-content">
          <NavBar onTextGalbenPng2Click={onTextGalbenPng2Click} />
          <div className="form-container">
            <div className="form-area">
              <div className="contact-us-parent">
                <h2 className="contact-us1">Contact Us</h2>
                <div className="dac-suntei-interesat-container">
                  <span>{`Dacă sunteți interesat să faceți publicitate prin `}</span>
                  <span className="mmm">{`MMM `}</span>
                  <span>
                    Advertising, completați formularul și noi vă vom contacta.
                  </span>
                </div>
              </div>
              <div className="rectangle-parent">
                <div className="frame-child" />
                <div className="rectangle-group">
                  <div className="frame-item" />
                  <input
                    className="first-name"
                    placeholder="First name"
                    type="text"
                  />
                </div>
                <div className="frame-parent">
                  <div className="rectangle-container">
                    <div className="frame-inner" />
                    <input
                      className="last-name"
                      placeholder="Last name"
                      type="text"
                    />
                  </div>
                  <div className="frame-container">
                    <div className="frame-div">
                      <div className="rectangle-div" />
                      <input
                        className="email-address"
                        placeholder="Email address"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="frame-wrapper1">
                    <div className="rectangle-parent1">
                      <div className="frame-child1" />
                      <input
                        className="ce-tip-de"
                        placeholder="Ce tip de utilizator esti?"
                        type="text"
                      />
                    </div>
                  </div>
                  <textarea
                    className="frame-textarea"
                    placeholder="Informatii utile"
                    rows={15}
                    cols={27}
                  />
                </div>
                <div className="instance-wrapper">
                  <button className="group-button">
                    <div className="submit-wrapper">
                      <b className="submit">Submit</b>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="group-div">
          <div className="frame-child2" />
          <img
            className="cub-3-png-1-1"
            loading="lazy"
            alt=""
            src="/cub-3-png-1-1@2x.png"
          />
          <FooterDetails
            mditelephone="pending_205:259"
            icbaselineFacebook1="pending_205:263"
          />
        </div>
        <div className="icon-area">
          <img
            className="cub-3-png-1-3"
            loading="lazy"
            alt=""
            src="/cub-3-png-1-1@2x.png"
          />
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
