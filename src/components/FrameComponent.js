import NavBarInstance from "./NavBarInstance";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="specifications-header-wrapper">
      <div className="specifications-header">
        <h2 className="specs">
          <p className="specs1">{`Specs `}</p>
        </h2>
        <NavBarInstance />
      </div>
    </section>
  );
};

export default FrameComponent;
