import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="feature-container-wrapper">
      <div className="feature-container">
        <div className="visibility-feature">
          <div className="visibility-feature-content">
            <div className="visibility-feature-icons">
              <img
                className="eye-1-icon"
                loading="lazy"
                alt=""
                src="/eye-1@2x.png"
              />
            </div>
            <div className="impact-icon">
              <div className="vizbilitate-wrapper">
                <b className="vizbilitate">Vizbilitate</b>
              </div>
              <div className="taxiurile-noastre-parcurg">
                Taxiurile noastre parcurg întregul oraș, expunând reclama dvs.
                zilnic la mii de persoane, de la districtele de afaceri la
                zonele rezidențiale.
              </div>
            </div>
          </div>
          <div className="visibility-feature-content1">
            <div className="target-1-wrapper">
              <img
                className="target-1-icon"
                loading="lazy"
                alt=""
                src="/target-1@2x.png"
              />
            </div>
            <div className="frame-parent2">
              <div className="impact-targetat-wrapper">
                <b className="impact-targetat">Impact targetat</b>
              </div>
              <div className="cu-mmm-reclamele-container">
                <span>{`Cu `}</span>
                <span className="mmm1">MMM</span>
                <span>
                  , reclamele tale nu doar că se văd, ci și captează atenția.
                  Selecționăm strategic rutele și timpurile pentru a-ți plasa
                  brandul în fața publicului potrivit, exact când trebuie.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flexibility-feature">
          <div className="flexibility-content">
            <div className="flexibility-header">
              <div className="flexibility-icon-container">
                <div className="agility-1-wrapper">
                  <img
                    className="agility-1-icon"
                    loading="lazy"
                    alt=""
                    src="/agility-1@2x.png"
                  />
                </div>
                <b className="flexibilitate-i-control">
                  Flexibilitate și Control
                </b>
              </div>
            </div>
            <div className="de-la-campanii">
              De la campanii pe termen scurt la mesaje sezoniere, platforma
              noastră oferă flexibilitatea de a-ți schimba mesajul conform
              nevoilor tale de marketing. Actualizările instantanee și afișajele
              digitale asigură că conținutul tău este mereu actual.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
