import { Menubar } from "primereact/menubar";
import Logo from "../../assets/img/logo.png";
import "../../assets/theme/CustomStyle.scss";

const FooterComponent = (props: any) => {
  return (
    // <Menubar start={start} className="header"/>
    <div id="CustomStyle" className="background-primary">
      <div className="container-fluid footer">
        <div className="row full-height justify-content-center align-items-buttom">
          <div className="col-12 text-center bottom">
            <div className="bottom">&copy; Copyright</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
