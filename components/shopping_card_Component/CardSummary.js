import { Component } from 'react'
import { Menu } from "antd";
import {ShoppingCart} from "react-feather";
import Link from "next/link";
const MenuItemGroup = Menu.ItemGroup;
const { SubMenu } = Menu;
class Shopping_Card extends Component {
    renderEmpty()
    {
        return
        (<Menu.Item>
            <Link href="">
              Sepetiniz Boş
            </Link>
          </Menu.Item>)
    }
    render() {
        return (
            <div>
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
          </div>
        );
      }
    }
    
export default Shopping_Card