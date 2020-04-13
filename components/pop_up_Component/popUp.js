import { message, Button } from 'antd';

const success = () => {
  message.success('Başarıyla Giriş Yapıldı.');
};

const error = () => {
  message.error('Hatalı Giriş');
};

const warning = () => {
  message.warning('Alan doldurulmalıdır.');
};

const Component = () => (
  <div>
    <Button onClick={success}>Başarılı</Button>
    <Button onClick={error}>Hata</Button>
    <Button onClick={warning}>Uyarı</Button>
  </div>
);
export default Component;