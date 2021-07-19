import classNames from "./FAQ.module.scss";
import { Typography, Collapse, Row, Col } from "antd";
import { RiArrowRightSFill } from "react-icons/ri";

const { Title } = Typography;
const { Panel } = Collapse;

const text1 = `
  First,fill the volunteer form provided below.
  Confirmation mail will be sent to inform you are a volunteer of the FOSS Community NSBM.
`;

const text2 = `
  NO.You don't need any volunteering experiences to join the FOSS community.
  You can gain a lot of experiences by volunteering for the FOSS community.
  And you can develop your skills as well.
`;

const text3 = `
  There are several events, projects and competitions. So you can contribute and participate in any.
`;

const text4 = `
  Yes.You need the membership.
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
                  header="How to get started?"
                  key="1"
                  className="site-collapse-custom-panel"
                >
                  <p style={{ fontWeight: "normal", paddingLeft: 29 }}>
                    {text1}
                  </p>
                </Panel>
                <Panel
                  header="Do I need previous experiences or qualifications for volunteering? "
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
