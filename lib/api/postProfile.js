import axios from "axios";
var profileData = "";

export default async function postProfile(obj) {
    await axios
        .post(obj.url, obj.data)
        .then((res) => {
            if (!res.data.error) {
                profileData = res.data;
            } else {
            }
        })
        .catch((err) => console.log(err));
    return profileData;
}
