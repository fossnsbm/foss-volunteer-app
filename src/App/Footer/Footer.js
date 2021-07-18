import classNames from "./Footer.module.scss";
import logo from "../../assets/img/logo-white.png";
import { Link } from "react-router-dom";
import { Row, Col, Image, Input, Typography } from "antd";
import { DefaultButton } from "../../components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const { Title } = Typography;

const footerText = `
  </>
`;

const Footer = () => {
  return (
    <div className={classNames.footer}>
      <div className={classNames.footerWrapper}>
        <Row>
          <Col lg={10} md={8} sm={24} xs={24}>
            <div className={classNames.footerLogo}>
              <Image width={60} src={logo} preview={false}></Image>
              <Title level={3} style={{ color: "#fff" }}>
                <span>FOSS Community of NSBM</span>
              </Title>
            </div>
            <p className={classNames.footerContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={classNames.socials}>
              <a href="https://www.facebook.com/foss.nsbm/">
                <FaFacebook size={18} color={"#fff"} />
              </a>
              <a href="https://twitter.com/fossnsbm">
                <FaTwitter size={18} color={"#fff"} />
              </a>
              <a href="https://www.instagram.com/fossnsbm/">
                <FaInstagram size={18} color={"#fff"} />
              </a>
              <a href="https://www.linkedin.com/company/fossnsbm">
                <FaLinkedin size={18} color={"#fff"} />
              </a>
            </div>
          </Col>
          <Col
            lg={6}
            md={8}
            sm={24}
            xs={24}
            className={classNames.footerMiddle}
          >
            <Title level={3} style={{ color: "#fff" }}>
              Site Map
            </Title>
            <div className={classNames.footerMenu}>
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <a href="https://fossnsbm.org/">Blog</a>
              <a href="https://fossnsbm.org/events">Events</a>
              <a href="https://forum.fossnsbm.org/">Forum</a>
            </div>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <div className={classNames.newsletter}>
              <Title level={3} style={{ color: "#fff" }}>
                Interested in joining us?
              </Title>
              <Title
                level={4}
                style={{
                  color: "#fafafa",
                  fontWeight: "normal",
                  marginBottom: "15px",
                }}
              >
                Subscribe to stay in touch for updates
              </Title>
              <Input
                placeholder="Email address"
                style={{
                  width: "70%",
                  height: "38px",
                  borderRadius: "8px",
                  marginRight: "2px",
                  marginBottom: "5px",
                }}
              />
              <DefaultButton size="medium">Subscribe</DefaultButton>
            </div>
          </Col>
        </Row>
        <div className={classNames.hr}></div>
        <div className={classNames.footerCopyright}>
          <p>
            &copy; {new Date().getFullYear()} FOSS Community of NSBM. All Rights
            Reserved.
          </p>
          <p>{footerText} with ❤️ by the FOSS Community of NSBM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
