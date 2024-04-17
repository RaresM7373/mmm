import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainContainer.css";

const MainContainer = () => {
  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact-us");
  };

  const onTextGalbenPng2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundShapeImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPentruClientiContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <header className="main-container1">
      <div className="navbar">
        <img
          className="text-galben-png-2"
          loading="lazy"
          alt=""
          src="/text-galben-png-2@2x.png"
          onClick={onTextGalbenPng2Click}
        />
        <div className="nav-options">
          <nav className="driver-client-options">
            <div className="pentru-soferi" onClick={goToContactUs}>
              <b className="pentru-soferi1"> Pentru Soferi</b>
            </div>
            <div
              className="pentru-clienti"
              onClick={onPentruClientiContainerClick}
            >
              <div className="pentru-clienti1" onClick={goToContactUs}>
                <b className="pentru-clienti2">Pentru Clienti</b>
              </div>
            </div>
            <div className="driver-client-options-inner">
              <div
                className="inscrie-te-wrapper"
                onClick={() => {
                  navigate("/oferte");
                }}
              >
                <b className="inscrie-te">Inscrie-te</b>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainContainer;
