import React from "react";
import classNames from "./FooterCTA.module.scss";
import { DefaultCard } from "../../components";
import { DefaultButton } from "../../components";
import { Row, Col, Typography } from "antd";

const {Title} = Typography;

const FooterCTA = () => {
    return(
        <div className={classNames.footercta}>

            
            <DefaultCard
                padding="sm"
                border="no-border"
                style={{
                  height: "260px",
                  marginBottom: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
               
               <Row gutter={{ xs: 12, sm: 12, md: 24, lg: 32 }}>
                   <Col className = "gutter-row" lg={16} md={24} sm={24} xs={24}>
                <Title size={40} style={{ alignContent: "left", color: "#000000" }}>
                In open source, we feel strongly that to really do something well, you have to get a lot of people involved.

                </Title>
                </Col>
                <Col className = "gutter-row" lg={8} md={24} sm={24} xs={24}>
                <DefaultButton variant="secondary" size="large" className={classNames.navBtn}>Become a Member</DefaultButton>
                </Col>
                </Row>


              </DefaultCard>


            
            </div>
       

    ); 
            };
            export default FooterCTA;
           


