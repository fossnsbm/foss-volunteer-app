import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import { Row, Col } from 'antd';


export const Content  =() =>{
return(

    <Layout>
      
      <Content>  
    <Row>
      <Col span={24} >lorem ipsum dolor si amet</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
        </Content>
   
    </Layout>
)}