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
          <Title level={2}>Get to know the FOSS Community of NSBM</Title>
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
                padding="sm"
                style={{ height: "260px", marginBottom: "20px" }}
              >
                <MdEventAvailable size={48} />
                <Title level={2}>
                  <CountUp end={1000} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4}>Events Held</Title>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                padding="sm"
                style={{ height: "260px", marginBottom: "20px" }}
              >
                <IoIosPeople size={48} />
                <Title level={2}>
                  <CountUp end={10000} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4}>People Influenced</Title>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                padding="sm"
                style={{ height: "260px", marginBottom: "20px" }}
              >
                <FaCode size={48} />
                <Title level={2}>
                  <CountUp end={20} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4}>Hackathons Organized</Title>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
              <DefaultCard
                padding="sm"
                style={{ height: "260px", marginBottom: "20px" }}
              >
                <FaProjectDiagram size={48} />
                <Title level={2}>
                  <CountUp end={10} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Title>
                <Title level={4}>Projects Done</Title>
              </DefaultCard>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
