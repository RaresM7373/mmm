import "./NavBar.css";

const NavBar = ({ onTextGalbenPng2Click, onPentruClientiContainerClick }) => {
  return (
    <header className="navbar1">
      <img
        className="text-galben-png-21"
        loading="lazy"
        alt=""
        src="/text-galben-png-21@2x.png"
        onClick={onTextGalbenPng2Click}
      />
      <div className="navbar-inner">
        <div className="pentru-soferi-parent">
          <div className="pentru-soferi2">
            <b className="pentru-soferi3"> Pentru Soferi</b>
          </div>
          <div
            className="pentru-clienti3"
            onClick={onPentruClientiContainerClick}
          >
            <div className="pentru-clienti4">
              <b className="pentru-clienti5">Pentru Clienti</b>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="inscrie-te-container">
              <b className="inscrie-te1">Inscrie-te</b>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
