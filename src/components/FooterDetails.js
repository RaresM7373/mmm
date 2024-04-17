import "./FooterDetails.css";

const FooterDetails = ({ mditelephone, icbaselineFacebook1 }) => {
  return (
    <div className="footer-details">
      <div className="footer-main">
        <div className="contact-info-area">
          <div className="contact-us2">Contact Us</div>
        </div>
        <div className="social-media-links">
          <div className="social-media-icons">
            <div className="phone-icon-area">
              <div className="social-icons-area">
                <div className="contact-icons">
                  <img
                    className="icbaseline-facebook-icon"
                    alt=""
                    src="/icbaselinefacebook.svg"
                  />
                </div>
                <img
                  className="mdiinstagram-icon"
                  loading="lazy"
                  alt=""
                  src="/mdiinstagram.svg"
                />
              </div>
              <img
                className="icbaseline-phone-icon"
                loading="lazy"
                alt=""
                src="/icbaselinephone.svg"
              />
            </div>
            <div className="social-labels">
              <div className="facebook-instagram-label">
                <div className="facebook">Facebook</div>
              </div>
              <div className="facebook-instagram-label1">
                <div className="instagram">Instagram</div>
              </div>
              <div className="div">+40768691986</div>
            </div>
          </div>
          <div className="contact-details-area">
            <div className="email-area">
              <div className="advertisingmmminvestscom">
                advertising@mmminvests.com
              </div>
              <div className="email-social-icon">
                <img
                  className="material-symbolsmail-icon"
                  alt=""
                  src="/materialsymbolsmail.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDetails;
