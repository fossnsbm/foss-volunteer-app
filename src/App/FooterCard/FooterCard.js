import classNames from "./FooterCard.module.scss";
import { DefaultButton, DefaultCard } from "../../components";
import { Link } from "react-router-dom";

const FooterCard = () => {
  return (
    <div className={classNames.footerCard}>
      <div className={classNames.footerCardWrapper}>
        <DefaultCard>
          <div className={classNames.card}>
            <h1>
              In open source, we feel strongly that to really do something well,
              you have to get a lot of people involved.
            </h1>
            <Link
              to={{
                pathname: "https://forms.gle/xSeLtcHVU8e42t9b8",
              }}
              target="_blank"
            >
              <DefaultButton size="large" className={classNames.footerBtn}>
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
