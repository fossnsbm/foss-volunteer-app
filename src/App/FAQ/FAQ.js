import classNames from "./FAQ.module.scss";
import { Typography, Collapse, Row, Col } from "antd";
import { RiArrowRightSFill } from "react-icons/ri";

const { Title } = Typography;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ = () => {
  return (
    <div className={classNames.faq}>
      <div className={classNames.faqWrapper}>
        <Row>
          <Col lg={10} md={24} sm={24} xs={24}>
            <div className={classNames.faqContent}>
              <Title level={2} style={{ color: "#8bc34a" }}>
                Frequently Asked Questions
              </Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col lg={13} md={24} sm={24} xs={24}>
            <div className={classNames.questions}>
              <Collapse
                accordion
                ghost
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <RiArrowRightSFill size={18} rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse"
                style={{
                  fontSize: "18px",
                  padding: "8px",
                  background: "#fff",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                <Panel
                  header="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  key="1"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal" }}>{text}</p>
                </Panel>
                <Panel
                  header="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  key="2"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal" }}>{text}</p>
                </Panel>
                <Panel
                  header="This is panel header 3"
                  key="3"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal" }}>{text}</p>
                </Panel>
                <Panel
                  header="This is panel header 4"
                  key="4"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal" }}>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FAQ;
