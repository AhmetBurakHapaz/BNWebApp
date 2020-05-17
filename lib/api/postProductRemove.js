import axios from "axios";
var remove = "";
export default async function postProductRemove(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                remove = res.data;
            } else {

            }
        })
        .catch(err => console.log(err));
    return remove;
}