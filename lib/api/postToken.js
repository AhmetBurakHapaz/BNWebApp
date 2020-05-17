import axios from "axios";
var profile = "";
export default async function postToken(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                profile = res.data;
            } else {
            }
        })
        .catch(err => console.log(err));
    return profile;
}