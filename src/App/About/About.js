import React from 'react';
import classNames from "./About.module.scss";
import { DefaultCard } from '../../components';
import { Row, Col,  } from 'antd';
import "antd/dist/antd.css";
import {Divider} from "antd";

const About  =() =>{
return(

    <div className={classNames.crd+""+classNames.soft+""+classNames.medium+""+classNames.noshadow+""+classNames.sm+""+classNames.md+""+classNames.lg}>
       
    <Row>
      <Col span={24}><h2>lorem ipsum dolor si amet</h2></Col>
    </Row>
    <Divider />
    <Row gutter={{ xs: 12, sm: 12, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
      <DefaultCard className="crd">
          <h1>100+ Events held.</h1>
      </DefaultCard>
      </Col>
      <Col className="gutter-row" span={6}>
      <DefaultCard className="crd">
          <h1>100+ Events held.</h1>
      </DefaultCard>
      </Col>
      <Col className="gutter-row" span={6}>
      <DefaultCard className="crd">
          <h1>100+ Events held.</h1>
      </DefaultCard>
      </Col>
      <Col className="gutter-row" span={6}>
      <DefaultCard className="crd">
          <h1>100+ Events held.</h1>
      </DefaultCard>
      </Col>
    </Row>
    </div>
)}
export default About;