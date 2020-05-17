import axios from "axios";
var profileData = "";
var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
};
export default async function putProfile(obj) {
    await axios
        .put(obj.url, obj.data)
        .then((res) => {
            if (!res.data.error) {
                profileData = res.data;
                console.log(profileData);
            } else {
                console.log(res.data.message);
            }
        })
        .catch((err) => console.log(err));
    return profileData;
}
