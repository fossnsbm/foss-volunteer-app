import classNames from "./FooterCTA.module.scss";
import { DefaultButton, DefaultCard } from "../../components";
import { Link } from "react-router-dom";

const FooterCard = () => {
  return (
    <div className={classNames.footerCard}>
      <div className={classNames.footerCardWrapper}>
        <DefaultCard
          style={{ backgroundColor: "#f5f5f5" }}
          border="no-border"
          shadow="medium"
        >
          <div className={classNames.card}>
            <h1 style={{ fontWeight: "600" }}>
              In open source, we feel strongly that to really do something well,
              you have to get a lot of people involved.
            </h1>
            <Link
              to={{
                pathname: "https://forms.gle/xSeLtcHVU8e42t9b8",
              }}
              target="_blank"
            >
              <DefaultButton
                size="large"
                variant="secondary"
                className={classNames.footerBtn}
              >
                Become a Member
              </DefaultButton>
            </Link>
          </div>
        </DefaultCard>
      </div>
    </div>
  );
};

export default FooterCard;
