import FooterDetails from "./FooterDetails";
import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <footer className="footer-desk">
      <div className="footer-desk-child" />
      <img
        className="cub-3-png-1-12"
        loading="lazy"
        alt=""
        src="/cub-3-png-1-1@2x.png"
      />
      <FooterDetails
        mditelephone="40x40x2145898898"
        icbaselineFacebook1="40x40x2045531149"
      />
    </footer>
  );
};

export default GroupComponent;
