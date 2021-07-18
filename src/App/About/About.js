import classNames from "./About.module.scss";
import { Row, Col, Typography } from "antd";
import { DefaultCard } from "../../components";

const { Title } = Typography;

const About = () => {
  return (
    <div className={classNames.about}>
      <div className={classNames.aboutWrapper}>
        <div className={classNames.aboutContent}>
          <Title level={2}>FOSS Community of NSBM</Title>
          <p>
            Contribute to the society with developments and new concepts
            transforming young lives to feel as a part of the world’s largest
            developing community
          </p>
        </div>
        <div
          className={
            classNames.crd +
            "" +
            classNames.soft +
            "" +
            classNames.medium +
            "" +
            classNames.noshadow +
            "" +
            classNames.sm +
            "" +
            classNames.md +
            "" +
            classNames.lg
          }
        >
          <Row gutter={{ xs: 12, sm: 12, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <DefaultCard className="crd">
                <h1>100+ Events held.</h1>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" span={6}>
              <DefaultCard className="crd">
                <h1>1000+ people influenced</h1>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" span={6}>
              <DefaultCard className="crd">
                <h1>2 hackathons</h1>
              </DefaultCard>
            </Col>
            <Col className="gutter-row" span={6}>
              <DefaultCard className="crd">
                <h1>20+ Projects</h1>
              </DefaultCard>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
