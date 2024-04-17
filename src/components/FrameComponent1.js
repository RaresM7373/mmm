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
              <img className="visibility-path-icon" alt="" />
              <div className="path-segments">
                <img className="path-segments-child" loading="lazy" alt="" />
                <img className="path-segments-item" loading="lazy" alt="" />
                <img className="path-segments-inner" loading="lazy" alt="" />
                <img className="path-segments-child1" loading="lazy" alt="" />
                <img className="path-segments-child2" loading="lazy" alt="" />
                <img className="path-segments-child3" loading="lazy" alt="" />
                <img className="final-path-segment" alt="" />
              </div>
            </div>
          </div>
          <img className="targeting-options-child" alt="" />
          <img className="targeting-options-item" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
