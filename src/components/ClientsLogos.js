import "./ClientsLogos.css";

const ClientsLogos = () => {
  return (
    <section className="clients-logos">
      <div className="logos-parent">
        <div className="logos">
          <img
            className="logo-elements-icon"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
        <div className="logos1">
          <img
            className="logos-child"
            loading="lazy"
            alt=""
            src="/ellipse-2@2x.png"
          />
        </div>
        <img
          className="logos-icon"
          loading="lazy"
          alt=""
          src="/ellipse-3@2x.png"
        />
        <img
          className="logos-icon1"
          loading="lazy"
          alt=""
          src="/ellipse-4@2x.png"
        />
      </div>
    </section>
  );
};

export default ClientsLogos;
