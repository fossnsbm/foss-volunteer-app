import classNames from "./FAQ.module.scss";
import { Typography, Collapse, Row, Col } from "antd";
import { RiArrowRightSFill } from "react-icons/ri";

const { Title } = Typography;
const { Panel } = Collapse;

const text1 = `
  Please fill the provided volunteer form. We will contact you after reviewing your application.
`;

const text2 = `
  No. You don't need any volunteering experiences to join the FOSS Community of NSBM.
  You can gain a lot of experiences and develop your skills by volunteering for FOSS Community of NSBM.
`;

const text3 = `
  We organize technical and other extra curricular events and activities at FOSS Community of NSBM. We also contribute to open source projects as well. You are welcome to contribute for any.
`;

const text4 = `
  There's no fee to become a member at FOSS Community of NSBM. Anyone is welcome to join us and contribute to the world of open source.
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
                We are here to help you to resolve any question you may have.
                You can explore the questions below to find what you are looking for.
              </p>
            </div>
          </Col>
          <Col lg={14} md={24} sm={24} xs={24}>
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
                  header="How do I volunteer?"
                  key="1"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal", paddingLeft: 29 }}>
                    {text1}
                  </p>
                </Panel>
                <Panel
                  header="Do I need previous experiences or qualifications for volunteering?"
                  key="2"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal", paddingLeft: 29 }}>
                    {text2}
                  </p>
                </Panel>
                <Panel
                  header="How can I contribute to FOSS?"
                  key="3"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal", paddingLeft: 29 }}>
                    {text3}
                  </p>
                </Panel>
                <Panel
                  header="Do I need a membership?"
                  key="4"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal", paddingLeft: 29 }}>
                    {text4}
                  </p>
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
