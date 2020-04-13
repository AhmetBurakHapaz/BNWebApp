import axios from "axios";
var token = "";
export default async function postLogin(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                token = res.data.user_token;
                console.log(token);
            } else {
                token = "";
                console.log(res.data.message);
            }
        })
        .catch(err => console.log(err));
    return token;
}