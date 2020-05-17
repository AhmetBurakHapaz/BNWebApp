import axios from "axios";
var myOrders = [];
export default async function postMyOrders(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                myOrders = res.data.orders;
            } else {
            }
        })
        .catch(err => console.log(err));
    return myOrders;
}