import axios from "axios";
var product = "";
export default async function postProductList(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                product = res.data.products;
            } else {

            }
        })
        .catch(err => console.log(err));
    return product;
}