import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterDetails from "../components/FooterDetails";
import "./Oferte.css";

const Oferte = () => {
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);

  const onTextGalbenPng2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPentruClientiContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="oferte">
      <div className="oferte-child" />
      <section className="main-container" style={{ width: "100vw" }}>
        <div className="navbar-parent">
          <NavBar
            onTextGalbenPng2Click={onTextGalbenPng2Click}
            onPentruClientiContainerClick={onPentruClientiContainerClick}
          />
          <div className="oferte-wrapper">
            <h2 className="oferte1">Oferte</h2>
            <br />
          </div>{" "}
          {
            <div
              style={{
                width: "100vw",
              }}
            >
              <p style={{ fontSize: 24, textAlign: "center" }}>
                Email: advertising@mmminvests.com
              </p>
              <p
                style={{ fontSize: 24, textAlign: "center", display: "block" }}
              >
                Telefon: 0768691986
              </p>
            </div>
          }
        </div>
        <div className="pricing-table">
          <div className="table-header">
            <div className="table-columns">
              <div className="table-columns-child" />
              <div className="column-titles">
                <div className="months-title">
                  <div className="months">12 months</div>
                </div>
                <img className="column-titles-child" loading="lazy" alt="" />
                <div className="price-details">
                  <div className="eur-tva-container">
                    <p className="eur-tva">1000 Eur + TVA</p>
                    <p className="rularizi">150 rulari/zi</p>
                    <p className="rulari">
                      <b>{`36000 rulari `}</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="buy-buttons">
                <div className="buy-now">
                  <div className="button-shape" />
                  <div className="buy-now1">Buy now</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer1">
            <div className="footer-child" />
            <div className="contact-info">
              <div className="contact-header">
                <div className="months1">6 months</div>
              </div>
              <img className="header-separator-icon" loading="lazy" alt="" />
              <div className="price-label">
                <div className="eur-tva-container1">
                  <p className="eur-tva1">540 Eur + TVA</p>
                  <p className="rularizi1">150 rulari/zi</p>
                  <p className="rulari1">
                    <b>{`18000 rulari `}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="purchase-button">
              <div className="buy-now2">
                <div className="button-box" />

                <div className="buy-now3">Buy now</div>
              </div>
            </div>
          </div>
          <div className="table-header1">
            <div className="rectangle-parent2">
              <div className="frame-child3" />
              <img className="line-icon" alt="" />
              <div className="frame-group">
                <div className="month-wrapper">
                  <div className="month">1 month</div>
                </div>
                <img className="button-separator-icon" loading="lazy" alt="" />
                <div className="price-details1">
                  <div className="eur-tva-container2">
                    <p className="eur-tva2">100 Eur + TVA</p>
                    <p className="rularizi2">150 rulari/zi</p>
                    <p className="rulari2">
                      <b>{`3000 rulari `}</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="buy-now4">
                <div className="buy-now-child" />
                <div className="buy-now5">Buy now</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="group-section">
        <div className="frame-child4" />
        <img
          className="cub-3-png-1-11"
          loading="lazy"
          alt=""
          src="/cub-3-png-1-1@2x.png"
        />
        <FooterDetails
          mditelephone="pending_205:279"
          icbaselineFacebook1="pending_205:283"
        />
      </section>
    </div>
  );
};

export default Oferte;
