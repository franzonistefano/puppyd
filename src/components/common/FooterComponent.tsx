import { Menubar } from "primereact/menubar";
import Logo from "../../assets/img/logo.png";
import "../../assets/theme/CustomStyle.scss";

const FooterComponent = (props: any) => {
  return (
    // <Menubar start={start} className="header"/>
    <div id="CustomStyle" className="background-primary">
      <div className="container-fluid footer">
        <div className="row full-height justify-content-center align-items-buttom bottom">
          <div className="col-12 text-center">
            <h2>
              Made by{" "}
              <a href="https://www.linkedin.com/in/stefano-franzoni-a7b512105/">
                Stefano Franzoni
              </a>
            </h2>
          </div>
          <div className="col-12 text-center">&copy; Copyright</div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
