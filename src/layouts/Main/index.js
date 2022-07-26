import { Footer, Header } from "Components";
import "./main.css";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <div className="content-wrap">{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
