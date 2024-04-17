import "./ContentContainer.css";

const ContentContainer = () => {
  return (
    <section className="content-container">
      <div className="hero-content-parent">
        <div className="hero-content">
          <div className="frame-parent1">
            <div className="background-shape-parent">
              <img
                className="background-shape-icon"
                alt=""
                src="/background-shape@2x.png"
                data-scroll-to="backgroundShapeImage"
              />
              <h2 className="o-agenie-de-container">
                <span>{`O `}</span>
                <span className="agenie-de-publicitate">
                  agenție de publicitate
                </span>
                <span> pentru o lume modernă</span>
              </h2>
            </div>
            <b className="partenerul-tu-strategic-container">
              <p className="partenerul-tu-strategic">
                Partenerul tău strategic pentru vizibilitate și interacțiune de
                top
              </p>
            </b>
          </div>
          <button className="hero-content-inner">
            <div className="start-campanie-container">
              <b className="start-campanie1">Start Campanie!</b>
            </div>
          </button>
        </div>
        <div className="why-choose-us-header-wrapper">
          <div className="why-choose-us-header">
            <h2 className="de-ce-sa">De ce sa alegi ?</h2>
            <img
              className="text-galben-png-3"
              loading="lazy"
              alt=""
              src="/text-galben-png-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentContainer;
