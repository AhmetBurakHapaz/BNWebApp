import {
  Avatar,
  Badge,
  Layout,
  List,
  Menu,
  Col,
  Row,
  Button,
  message,
  notification,
} from "antd";
import {
  BarChart,
  Bell,
  ChevronsDown,
  Maximize,
  Minimize,
  Settings,
  ShoppingCart,
  User,
  Triangle,
  LogOut,
  Key,
  HelpCircle,
  MessageCircle,
  ShoppingBag
} from "react-feather";
import DashHeader, { Notification } from "./styles/Header";
import ModalLogin from "./sign_in_sign_up_Component/login-form"; //
import Link from "next/link";
import MockNotifications from "../demos/mock/notifications";
import { useAppState } from "./shared/AppProvider";
import { useState, useEffect } from "react";
import Router from "next/router"

import ProfileSettings from "./profile_page_Component/ProfileSettings";
//react hooks
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import { getConnectionLink } from "../lib/connector";

import { ProfileInformation } from "../redux/actions/profileViewActions";
import { logoutUser } from "../redux/actions/logoutActions";
import { removeFromCart } from "../redux/actions/cartActions";
import styled from 'styled-components'


//import { logoutUser } from "../redux/actions/logoutActions";

const MenuItemGroup = Menu.ItemGroup;
const { SubMenu } = Menu;
const { Header } = Layout;

const MainHeader = () => {
  const [loading, setloading] = useState(false);
  const [state, dispatch] = useAppState();
  const [notifications] = useState(MockNotifications);

  const token = useSelector((state) => state.authReducer);
  const profile = useSelector((state) => state.profileViewReducer);

  const cart = useSelector((state) => state.cartReducer);

  const dispat = useDispatch();

  if (token != "" && !loading) {
    var paramsNames = ["token", "tokenType"];
    var paramsValues = [token, "web"];
    var obj = getConnectionLink("profile", paramsNames, paramsValues, "POST");
    dispat(ProfileInformation(obj));
    setloading(true);
  }

  function logout() {
    dispat(logoutUser());
    setTimeout(() => {
      // Router.push("/logout");
      window.location.reload(false);
    }, 500);
  }
  function hasToken() {
    if (token == "") {
      return (
        <Menu.Item>
          <ModalLogin />
        </Menu.Item>
      );
    }
  }

  function removeCart(product) {
    dispat(removeFromCart(product));
    message.error(product.product_name + " Başarıyla Silindi");
    notification['error']({
      message: (product.product_name + " Başarıyla Silindi"),
      placement: 'bottomRight'
    });
  }


  function shoppingMenu() {
    return (
      <SubMenu title={<ShoppingCart size={20} strokeWidth={1} style={{color:"red"}}  />} >
        <Menu.Item style={{ width: "100%", height: "100%", color:"rgba(0, 0, 0, 0.65)", backgroundColor:"#ffffff", textAlign:"center",cursor:"default" }} >
          Sepet Listesi
        </Menu.Item>
        <Menu.Divider />
        {cart.map((cartItem) => (
          <Menu.Item 
            key={cartItem.product.product_id}
            style={{ width: "100%", height: "100%", color:"rgba(0, 0, 0, 0.65)", backgroundColor:"#ffffff" }}
          >
            <Button type="danger" onClick={() => removeCart(cartItem.product)}>
              X
            </Button>{" "}
            {cartItem.product.product_name} ({cartItem.quantity} Adet)
          </Menu.Item>
        ))}
        <Menu.Divider />
        <Menu.Item style={{ width: "100%", height: "100%", backgroundColor:"#ffffff", textAlign:"center" }}>
          <a href="/shoppingcard"><ShoppingBag size="16px"/> Sepetime git</a>
        </Menu.Item>
      </SubMenu>
    );
  }

  function emptyCard() {
    return (
      <SubMenu title={<a href="/products" style={{color:"rgba(0, 0, 0, 0.65)"}}><ShoppingCart size={20} strokeWidth={1} /></a>}></SubMenu>
    );
  }

  function hasTokenBottom() {
    if (profile != "") {
      return (
        <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
          <Menu.Item >
            <Link href="/passwordchange">
              <a >
                <Key size={16} /> Şifre İşlemleri
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ paddingTop: "10px" }}>
            <ProfileSettings />
          </Menu.Item>
          <Menu.Item>
            <Link href="">
              <a onClick={() => logout()}>
                <LogOut size={16} /> ÇIKIŞ YAP
              </a>
            </Link>
          </Menu.Item>
        </SubMenu>
      );
    } else {
      return (
        <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
          <Menu.Item>
            <ModalLogin />
          </Menu.Item>
        </SubMenu>
      );
    }
  }
  function hasProfile() {
    if (profile != "") {
      if (profile.user_img =="")
      {
         profile.user_img = "/static/images/defaultAvatar.png" 
      }
      return (
        <SubMenu title={<Avatar src={profile.user_img} />}>
          <Menu.Item style={{ height: "100%" }}>
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              renderItem={(item) => (
                <Notification>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar size="large" src={profile.user_img} />}
                      title={
                        <a href="javascript:;">
                          {profile.user_real_name} {profile.user_surname}
                        </a>
                      }
                      description={<small>{profile.user_mail}</small>}
                    />
                  </List.Item>
                </Notification>
              )}
            />
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item style={{ height: "100%" }}>
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="/passwordchange">
                    <Key size={16} /> Şifre işlemleri
                  </a>
                }
              />
            </List.Item>
          </Menu.Item>

          <Menu.Item style={{ height: "100%" }}>
            <List.Item>
              <ProfileSettings />
            </List.Item>
          </Menu.Item>
          <Menu.Item style={{ height: "100%" }}>
            <List.Item>
              <List.Item.Meta
                title={
                  <a href="#">
                    <HelpCircle size={16} /> Yardım
                  </a>
                }
              />
            </List.Item>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item style={{ height: "100%" }}>
            <List.Item>
              <List.Item.Meta
                title={
                  <a onClick={() => logout()}>
                    <LogOut size={16} /> Çıkış
                  </a>
                }
              />
            </List.Item>
          </Menu.Item>
        </SubMenu>
      );
    } else {
      return null;
    }
  }
  return (
    <DashHeader>
      <Header>
        {state.mobile && (
          <a
            onClick={() => dispatch({ type: "mobileDrawer" })}
            className="trigger"
          >
            <BarChart size={20} strokeWidth={1} />
          </a>
        )}
        <Link href="/homepage">
          <a className="brand">
          <img src="../static/images/bnLogo.png" style={{maxWidth:"50px",maxHeigth:"50px" }} alt="logo"/>
            <strong className="mx-1 text-black">BN YÖNETİM PANELİ</strong>
          </a>
        </Link>

        <Menu mode="horizontal" className="menu-divider">
          {!state.mobile && (
            <Menu.Item>
              <Link href="homepage">
                <a>ANASAYFA</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="products">
                <a>ÜRÜNLERİMİZ</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="about">
                <a>HAKKIMIZDA</a>
              </Link>
            </Menu.Item>
          )}

          {!state.mobile && (
            <Menu.Item>
              <Link href="contact">
                <a>İLETİŞİM</a>
              </Link>
            </Menu.Item>
          )}

          {state.mobile && (
            <SubMenu title={<ChevronsDown size={20} strokeWidth={1} />}>
              <Menu.Item>
                <Link href="homepage">
                  <a>ANASAYFA</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="products">
                  <a>ÜRÜNLERİMİZ</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="contact">
                  <a>İLETİŞİM</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="about">
                  <a>HAKKIMIZDA</a>
                </Link>
              </Menu.Item>
            </SubMenu>
          )}
        </Menu>

        <span className="mr-auto" />

        <Menu mode="horizontal" className="menu-divider">
          {!state.mobile && hasProfile()}

          {/* {!state.mobile && hasLevel()} */}

          {!state.mobile && hasToken()}

          {state.mobile && hasTokenBottom()}
        </Menu>
      </Header>
    </DashHeader>
  );
};

const mapStateToProps = (state) => ({
  currentToken: state.authReducer,
  profile: state.profileViewReducer,
  cart: state.cartReducer,
});

const mapDispatchToProps = {
  loginUser,
  ProfileInformation,
  logoutUser,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
