import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User
} from 'react-feather';

export default [
  {
    path: '/',
    name: 'Anasayfa',
    icon: <Home strokeWidth={1} size={16} />
  },
  {
    name: 'Ürünler',
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/products',
        name: 'Ürün Görüntüleme & Satış'
      },
      {
        path: '/productadd',
        name: 'Ürün Ekleme'
      },
    ]
  },
  
  {
    name: 'Stok',
    icon: <PieChart strokeWidth={1} size={16} />,
    children: [
      {
        path: '/stocks',
        name: 'Stok Görüntüleme'
      },
      {
        path: '/addstock',
        name: 'Stok Ekleme'
      },
    ]
  },
  {
    path: '/notifications',
    name: 'Bildirim Gönderme Paneli',
    icon: <MessageCircle  size={16} />
  },
  {
    name: 'Satış',
    icon: <Gift strokeWidth={1} size={16} />,
    children: [
      {
        path: '/orders',
        name: 'Sipariş Onayı'
      },
      {
        path: '/salesstatus',
        name: 'Satış Analizi'
      },
    ]
  },

];
