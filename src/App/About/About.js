import classNames from "./About.module.scss";
import { Typography } from "antd";

const { Title } = Typography;

const About = () => {
  return (
    <div className={classNames.about}>
      <div className={classNames.aboutWrapper}>
        <div className={classNames.aboutContent}>
          <Title>FOSS Community of NSBM</Title>
          <p>
            Contribute to the society with developments and new concepts
            transforming young lives to feel as a part of the world’s largest
            developing community
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
