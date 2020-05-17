import axios from "axios";
var token = "";
export default async function postToken(obj) {
    await axios
        .get(obj)
        .then(res => {
            if (!res.data.error) {
                token = res.data;
            } else {
            }
        })
        .catch(err => console.log(err));
    return token;
}