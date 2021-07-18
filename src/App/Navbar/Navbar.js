import classNames from "./Navbar.module.scss";
import { DefaultButton } from "../../components";
import { Image } from "antd";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classNames.navbar}>
      <div className={classNames.nav}>
        <Link to="/">
          <Image
            width={36}
            src={logo}
            preview={false}
            className={classNames.logo}
          ></Image>
        </Link>
        <div className={classNames.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <a href="https://fossnsbm.org/">Blog</a>
          <a href="https://fossnsbm.org/events">Events</a>
          <a href="https://forum.fossnsbm.org/">Forum</a>
        </div>

        <Link
          to={{
            pathname: "https://forms.gle/xSeLtcHVU8e42t9b8",
          }}
          target="_blank"
        >
          <DefaultButton variant="secondary" className={classNames.navBtn}>
            Apply
          </DefaultButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
