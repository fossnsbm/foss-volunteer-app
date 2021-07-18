import classNames from "./About.module.scss";
import { Row, Col, Typography } from "antd";
import { DefaultCard } from "../../components";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { MdEventAvailable } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCode, FaProjectDiagram } from "react-icons/fa";

const { Title } = Typography;

const About = () => {
  return (
    <div className={classNames.about}>
      <div className={classNames.aboutWrapper}>
        <div className={classNames.aboutContent}>
          <Title level={2} style={{ color: "#8bc34a" }}>
            Get to know the FOSS Community of NSBM
          </Title>
          <p>
            Contribute to the society with developments and new concepts
            transforming young lives to feel as a part of the world’s largest
            developing community
          </p>
        </div>
        <div className={classNames.cardWrapper}>
          <Row gutter={{ xs: 12, sm: 12, md: 24, lg: 32 }}>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                shadow="medium"
                padding="sm"
                border="no-border"
                style={{
                  height: "260px",
                  marginBottom: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <MdEventAvailable size={48} color={"#8c8c8c"} />
                <Title level={2} style={{ fontSize: "48px" }}>
                  <CountUp end={1000} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4} style={{ color: "#8c8c8c" }}>
                  Events Held
                </Title>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                shadow="medium"
                padding="sm"
                border="no-border"
                style={{
                  height: "260px",
                  marginBottom: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <IoIosPeople size={48} color={"#8c8c8c"} />
                <Title level={2} style={{ fontSize: "48px" }}>
                  <CountUp end={10000} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4} style={{ color: "#8c8c8c" }}>
                  People Influenced
                </Title>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                shadow="medium"
                padding="sm"
                border="no-border"
                style={{
                  height: "260px",
                  marginBottom: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <FaCode size={48} color={"#8c8c8c"} />
                <Title level={2} style={{ fontSize: "48px" }}>
                  <CountUp end={20} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4} style={{ color: "#8c8c8c" }}>
                  Hackathons Organized
                </Title>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                shadow="medium"
                padding="sm"
                border="no-border"
                style={{
                  height: "260px",
                  marginBottom: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <FaProjectDiagram size={48} color={"#8c8c8c"} />
                <Title level={2} style={{ fontSize: "48px" }}>
                  <CountUp end={10} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4} style={{ color: "#8c8c8c" }}>
                  Projects Done
                </Title>
              </DefaultCard>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
