import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="targeting-wrapper">
      <div className="targeting">
        <img className="targeting-child" loading="lazy" alt="" />
        <div className="targeting-options">
          <h2 className="targeting1">Targeting</h2>
          <div className="options-background" />
          <div className="targeting-option-container">
            <div className="hyper-targeting-option">
              <div className="hyper-targeting-content">
                <div className="hyper-targeting-content-child" />
                <div className="bxmap-parent">
                  <img
                    className="bxmap-icon"
                    loading="lazy"
                    alt=""
                    src="/bxmap.svg"
                  />
                  <div className="hyper-targeting-wrapper">
                    <b className="hyper-targeting">{`Hyper-Targeting `}</b>
                  </div>
                </div>
                <div className="revolutionizing-approach-optio">
                  <div className="revolutionizing-icon-container">
                    <img
                      className="management-1-icon"
                      loading="lazy"
                      alt=""
                      src="/management-1@2x.png"
                    />
                  </div>
                  <b className="revolutionizing-approach">
                    Revolutionizing approach
                  </b>
                </div>
              </div>
            </div>
            <div className="taxi-visibility">
              <img className="taxi-1-icon" alt="" src="/taxi-1@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
