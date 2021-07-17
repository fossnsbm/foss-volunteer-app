import classNames from "./Footer.module.scss";
import logo from "../../assets/img/logo-white.png";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "antd";
import { DefaultButton, DefaultCard } from "../../components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classNames.footer}>
      <div className={classNames.footerWrapper}>
        <Row>
          <Col span={8}>
            <Image height={90} src={logo} preview={false}></Image>
            <h3>FOSS Community of NSBM</h3>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet{" "}
            </p>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <p>FOSS Community of NSBM</p>
          </Col>
          <Col span={4}>
            <div>
              <Link to="/">Home</Link>
              <a href="https://fossnsbm.org/">Blog</a>
              <a href="https://fossnsbm.org/events">Events</a>
              <a href="https://forum.fossnsbm.org/">Forum</a>
            </div>
          </Col>
          <Col span={12}>
            <DefaultCard>
              <h3>Subscribe to our newsletter</h3>
              <input htmlType="text"></input>
              <DefaultButton>Apply Now</DefaultButton>
            </DefaultCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
