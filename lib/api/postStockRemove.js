import axios from "axios";
var stockRemove = "";
export default async function postStockRemove(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                stockRemove = res.data;
            } else {
            }
        })
        .catch(err => console.log(err));
    return stockRemove;
}