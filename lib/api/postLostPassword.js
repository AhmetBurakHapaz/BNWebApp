import axios from "axios";
import Router from "next/router"
var lostpassword = "";

export default async function postLostPassword(obj) {
    await axios
        .get(obj)
        .then(res => {
            if (!res.data.error) {
                Router.push("/404");
            } else {
                Router.push("/lostpasswordchange") 
            }
        })
        .catch(err => console.log(err));
    return lostpassword;
}