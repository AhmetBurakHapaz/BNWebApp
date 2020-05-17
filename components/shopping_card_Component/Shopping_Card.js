import Header from "../../components/styles/Header";
import { Component } from "react";
import {
  AutoComplete,
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Card,
  message,
  notification,
} from "antd";
import PropTypes from "prop-types";
import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as shoppingActions from "../../redux/actions/shoppingActions";
import * as cartActions from "../../redux/actions/cartActions";
import * as profileViewActions from "../../redux/actions/profileViewActions";
import Router from "next/router";
import CreditCardInput from "react-credit-card-input";

const firstLogin = () => {
  message.error("Önce Giriş Yapmalısınız!");
};
const firstProduct = () => {
  message.error("Önce Ürün Seçmelisiniz!");
};

const provinceData = ["Türkiye"];
const cityData = {
  Türkiye: ["Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkâri",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kilis",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Şanlıurfa",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak"]
};

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const ProductForm = Form.create()(
  class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        cart: "",
        loaded: false,
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0]
      };
    }
    handleProvinceChange = value => {
      this.setState({
        cities: cityData[value],
        secondCity: cityData[value][0]
      });
    };
  
    onSecondCityChange = value => {
      this.setState({
        secondCity: value
      });
    };  
    componentDidMount() {
      // setTimeout(() => {
      //   if (this.props.currentToken == "") {
      //     firstLogin();
      //     Router.push("/homepage");
      //   }
      // }, 700);
      // setTimeout(() => {
      //   if (this.props.cart == "") {
      //     firstProduct();
      //     Router.push("/products");
      //   }
      // }, 700);
    }

    editData() {
      var arr = [];
      this.props.cart.map((cartItem) => {
        arr.push({
          product_id: cartItem.product.product_id,
          type: cartItem.product.type,
          product_price: cartItem.product.product_price,
          quantity: cartItem.quantity,
          product_name: cartItem.product.product_name,
          product_description: cartItem.product.product_description,
        });
      });
      return arr;
    }

    totalPrice() {
      var total = 0;
      this.props.cart.map((cartItem) => {
        total += cartItem.product.product_price * cartItem.quantity;
      });
      var totalString = total.toFixed(2);
      var rounded = Number(totalString);
      //this.props.cart[0]
      return rounded;
    }
    onFirstNamePaste(event){
      var text = event.clipboardData.getData('Text')
      this.value = text.split(' ').join('');
   }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (err) {
          if (this.props.cart.length != 0) {
            var arr = this.editData(); 
            var totalprice = this.totalPrice();
            const stringData = arr.reduce((result, item) => {
              return `${result}${item.product_id},${item.product_price},${item.type},${item.quantity},${item.product_name},${item.product_description},|`;
            }, "");
            console.log(this.props.profile)
            var address =
              "" +
              user_address.value +
              " " +
              values.user_city +
              "/" +
              values.user_nation;
            var creditCardExDate =
              "" + values.card_month + "/" + values.card_year;
            var mail = this.props.profile.user_mail;  
            var NewText1 = this.state.cardNumber;
            const cardNumber = NewText1.split(/\s/).join('');
            var NewText2 = this.state.expiryDate;
            const expiryDate = NewText2.split(/\s/).join('');

            var paramsNames = [
              "orders",
              "email",
              "user_real_name",
              "user_id",
              "user_surname",
              "user_address",
              "user_phone",
              "creditCardNo",
              "creditCardFullName",
              "creditCardExDate",
              "cvv",
              "totalprice",
            ];
            var paramsValues = [
              stringData,
              mail,
              user_real_name.value,
              this.props.profile.user_id,
              user_real_surname.value,
              address,
              user_phone.value,
              cardNumber,
              creditCardFullName.value,
              expiryDate,
              this.state.cvc,
              totalprice,
            ];
            var obj = getConnectionLink(
              "cart",
              paramsNames,
              paramsValues,
              "POST"
            );
            this.props.shoppingPage(obj);
          } else {
            notification["error"]({
              message: " İlk önce ürün yükleyiniz.",
              placement: "bottomRight",
            });
          }
        }
      });
    };

    removeFromCart(product) {
      this.props.removeFromCart(product);
      notification["error"]({
        message: product.product_name + " Başarıyla Silindi",
        placement: "bottomRight",
      });
    }
    handleCardNumberChange(e){
      this.setState({cardNumber:e.target.value},function(){
      });
    }
    handleExpiryDateChange(e){
      this.setState({expiryDate:e.target.value},function(){
      });
    }
    handleCVCChange(e){
      this.setState({cvc:e.target.value},function(){
      });
    }

    MakeItem = function(X) {
      return <Option key={X} value={X}>{X}</Option>;
    };
    
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
      const cities  = this.state.cities;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const formItemSelectLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator("prefix", {
        initialValue: "86",
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      );
      return (
        <div>
          <Header></Header>

          <h1 style={{ textAlign: "center", margin: "30px" }}>
            SEPETİ ONAYLA
          </h1>
          <Card
            bodyStyle={{ padding: "20px" }}
            style={{  margin: "30px" }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Row gutter={16} id="components-button-demo">
                <Col lg={8} md={16}>
                  <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
                    Fatura Bilgileri
                  </h3>

                  <FormItem label="İsim:" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("user_real_name", {
                      rules: [
                        {
                          required: true,
                          message: "İsim boş bırakılamaz",
                        },
                        {
                          pattern: "[A-Za-z]{2}",
                          message:
                            "Lütfen İsim değeri En Az 2 Karakterden Oluşsun!",
                        },
                      ],
                    })(
                      <Input
                        style={{ marginBottom: "20px" }}
                        placeholder="İsim "
                      />
                    )}
                  </FormItem>
                  <FormItem label="Soyisim:" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("user_real_surname", {
                      rules: [
                        {
                          required: true,
                          message: "Soyisim boş bırakılamaz",
                        },
                        {
                          pattern: "[A-Za-z]{2}",
                          message:
                            "Lütfen Soyisim değeri En Az 2 Karakterden Oluşsun!",
                        },
                      ],
                    })(
                      <Input
                        style={{ marginBottom: "20px" }}
                        placeholder="Soyisim "
                      />
                    )}
                  </FormItem>
                  <FormItem label="Ülke:" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("user_nation", {
                      rules: [
                        {
                          required: true,
                          message: "Ülke boş bırakılamaz",
                        },
                      ],
                    })(
                      <Select
                      onChange={this.handleProvinceChange}
                    >
                      {provinceData.map(province => (
                        <Option key={province}>{province}</Option>
                      ))}
                    </Select>
                    )}
                  </FormItem>

                  <FormItem label="Şehir:" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("user_city", {
                      rules: [
                        {
                          required: true,
                          message: "Şehir boş bırakılamaz",
                        },
                      ],
                    })(
                      <Select
                          value={this.state.secondCity}
                          onChange={this.onSecondCityChange}
                        >
                      {cities.map(this.MakeItem)}

                        </Select>
                    )}
                     
                  </FormItem>
                  <FormItem label="Adres:" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("user_address", {
                      rules: [
                        {
                          required: true,
                          message: "Adres boş bırakılamaz",
                        },
                      ],
                    })(
                      <Input
                        style={{ marginBottom: "20px" }}
                        placeholder="Adres"
                      />
                    )}
                  </FormItem>
                  <FormItem
                    label="Telefon Numarası:"
                    {...formItemLayout}
                    hasFeedback
                  >
                    {getFieldDecorator("user_phone", {
                      rules: [
                        {
                          required: true,
                          message: "Telefon Numarası boş bırakılamaz",
                        },
                        {
                          pattern: "^[+]([0-9]{2})[0-9]{10}$",
                          message:
                            "Lütfen Telefon değerinin başında (+90) değerini unutmayınız!",
                        },
                      ],
                    })(
                      <Input
                        style={{ marginBottom: "20px" }}
                        placeholder="Telefon Numarası"
                      />
                    )}
                  </FormItem>
                </Col>
                <Col lg={8} md={16}>
                  <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
                    Kart Bilgileri
                  </h3>
                  <FormItem label="Kart Bilgileri:" {...formItemLayout} hasFeedback>
                     <CreditCardInput
                     cardNumberInputProps={{ value: this.state.cardNum, onChange: (e) => this.handleCardNumberChange(e) }}
                     cardExpiryInputProps={{ value: this.state.exp, onChange: (e) => this.handleExpiryDateChange(e) }}
                     cardCVCInputProps={{ value: this.state.cvcc, onChange: (e) => this.handleCVCChange(e) }}
                     fieldClassName="input"
                     
                     customTextLabels={{
                      invalidCardNumber: 'Kart Numarası Değeri Geçersiz!',
                      expiryError: {
                        invalidExpiryDate: 'Son Kullanım Tarihi Geçersiz!',
                        monthOutOfRange: 'Ay Değeri 01-12 Arasında Olmalıdır!',
                        yearOutOfRange: 'Yıl Aralığınız Geçersiz',
                        dateOutOfRange: 'Gün Değeri Geçersiz!'
                      },
                      invalidCvc: 'CVC Değeri Geçersiz!',
                      invalidZipCode: 'ZIP Kodu Geçersiz!',
                      cardNumberPlaceholder: 'Kart Numarası',
                      expiryPlaceholder: 'AA/YY',
                      cvcPlaceholder: 'CVC',
                      zipPlaceholder: 'ZIP'
                    }}
                   />
                  </FormItem>

                  <FormItem
                    label="Karttaki İsim:"
                    {...formItemLayout}
                    hasFeedback
                  >
                    {getFieldDecorator("creditCardFullName", {
                      rules: [
                        {
                          required: true,
                          message: "Kart Üzerindeki İsim boş bırakılamaz",
                        },
                        {
                          pattern: "[A-Za-z]{2}",
                          message:
                            "Lütfen Kart Üzerindeki İsim değeri En Az 2 Karakterden Oluşsun!",
                        },
                      ],
                    })(
                      <Input
                        style={{ marginBottom: "20px" }}
                        placeholder="Kart Üzerindeki İsim "
                      />
                    )}
                  </FormItem>
                  
                </Col>
                <Col style={{ textAlign: "center" }} lg={8} md={16}>
                  <h3 style={{ marginBottom: "20px" }}>Sepet</h3>

                  {this.props.cart.map((cartItem) => (
                    <Card
                      key={cartItem.product.product_id}
                      bodyStyle={{ padding: "20px" }}
                      style={{ marginBottom: "20px" }}
                    >
                      <Button
                        type="danger"
                        onClick={() => this.removeFromCart(cartItem.product)}
                      >
                        X
                      </Button>{" "}
                      {cartItem.product.product_name} - $
                      {cartItem.product.product_price} ({cartItem.quantity}{" "}
                      Adet)
                    </Card>
                  ))}
                </Col>
              </Row>
              <Row style={{ marginTop: "200px" }}>
                <Col lg={3} md={16}>
                  <h3>Ödeme Tutarı: </h3>
                </Col>
                <Col lg={2} md={16}>
                  <h1>{this.totalPrice()}</h1>
                </Col>
                <Col lg={3} md={16}>
                  <h5>TL </h5>
                </Col>
                <Col lg={3} md={16}></Col>
              </Row>
              <div style={{ textAlign: "right" }}>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    {" "}
                    SEPETi ONAYLA{" "}
                  </Button>
                </FormItem>
              </div>
            </Form>
          </Card>
        </div>
      );
    }
  }
);

class CartsAdd extends React.Component {
  render() {
    return (
      <ProductForm
        removeFromCart={this.props.actions.removeFromCart}
        currentToken={this.props.currentToken}
        profile={this.props.profile}
        cart={this.props.cart}
        shoppingPage={this.props.actions.shoppingPage}
      ></ProductForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    currentToken: state.authReducer,
    profile: state.profileViewReducer,
    shopping_data: state.shoppingReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      shoppingPage: bindActionCreators(shoppingActions.shoppingPage, dispatch),
      profilePage: bindActionCreators(
        profileViewActions.ProfileInformation,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartsAdd);
