import { Card, Divider, Col, Row } from 'antd';
import { Button, Input } from 'antd';
import { Component } from 'react'
import { List, Avatar } from 'antd';
import {
    Star
  } from 'react-feather';

const data = [
    {
      title: <a href="#">Sepetim</a>
      
    },
    {
      title: <a href="#">Adres Bilgilerim</a>
    },
    {
      title: <a href="#">Ayarlarım</a>
    }

  ];

class ProfileCard extends Component{
    render() {
        return(
            <div>
            <Card 
            title="Profilim"
            style={{marginTop:'10px'}}>
                <Row>
                    <Col lg={16} md={32}>
                    <Col lg={8} md={16} style={{marginBottom:'50px', float:'center'}}>
                        <img src="https://www.scripturaengage.com/wp-content/uploads/2017/05/Profile-Picture-Toon-Wouters-circle-ScripturaEngage.png" alt="profilelogo1"/>

                    </Col>
                    <Col lg={4} md={8}>

                    </Col>
                    <Col lg={12} md={24} style={{marginTop:'10px'}}>
                        <h2 style={{marginBottom:'30px'}}>John Doe</h2>
                        <p>E-Mail : johndoe@gmail.com</p>
                        <p>Adres : Sallabaşı Cad. 23/4 Kadıköy/İst</p>
                        <p>Posta Numarası : HASJ49FM</p>
                        <p>Telefon : 0533 333 33 33</p>
                        
                        <Button type="primary" style={{marginTop:"50px"}}>BİLGİLERİ DÜZENLE</Button>
                        
                    </Col>
                    </Col>
                    <Col lg={8} md={16}>
                    <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={
                                        <Star size={20} strokeWidth={1} />
                                    }
                                    title={<a href="https://ant.design">{item.title}</a>}
                                   
                                    />
                                </List.Item>
                                )}
                            />
                    </Col>
                </Row>
                
               
      
      
            </Card>
        </div>
        );
    }
}
export default ProfileCard;