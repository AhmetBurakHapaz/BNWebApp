import axios from "axios";
var stock = "";
export default async function postStock(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                stock = res.data.stocks;
            } else {
            }
        })
        .catch(err => console.log(err));
    return stock;
}