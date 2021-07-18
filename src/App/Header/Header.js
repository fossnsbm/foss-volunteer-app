import classNames from "./Header.module.scss";
import { DefaultButton } from "../../components";
import { PageHeader, Descriptions } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classNames.header}>
      <div className={classNames.headerWrapper}>
        <PageHeader>
          <div className={classNames.headerContent}>
            <Descriptions.Item>
              <h1>
                Volunteering is an act of heroism on a grand scale. And it
                matters profoundly.
              </h1>
              <h4>– William J. Clinton</h4>
            </Descriptions.Item>
          </div>
          <Link
            to={{
              pathname: "https://forms.gle/xSeLtcHVU8e42t9b8",
            }}
            target="_blank"
          >
            <DefaultButton size="large" className={classNames.headerBtn}>
              Become a Member
            </DefaultButton>
          </Link>
        </PageHeader>
      </div>
    </div>
  );
};

export default Header;
