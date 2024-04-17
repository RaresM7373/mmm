import MainContainer from "../components/MainContainer";
import ContentContainer from "../components/ContentContainer";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ClientsLogos from "../components/ClientsLogos";
import GroupComponent from "../components/GroupComponent";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <MainContainer />
      <ContentContainer />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className="clienti-cu-care-colaboram-wrapper">
        <h2 className="clienti-cu-care">Clienti cu care colaboram</h2>
      </section>
      <ClientsLogos />
      <section className="home-inner">
        <div className="frame-wrapper">
          <div className="start-campanie-wrapper">
            <b className="start-campanie">Start Campanie</b>
          </div>
        </div>
      </section>
      <GroupComponent />
    </div>
  );
};

export default Home;
