import axios from "axios";
var productCount = "";
export default async function postProductCount(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                productCount = res.data;
            } else {

            }
        })
        .catch(err => console.log(err));
    return productCount;
}