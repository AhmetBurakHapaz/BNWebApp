import axios from "axios";
var productEdit = "";
export default async function postProductEdit(obj) {
    await axios
        .post(obj.url, obj.data)
        .then(res => {
            if (!res.data.error) {
                productEdit = res.data;
                setTimeout(() => {
                    window.location.reload(false);
                  }, 500); 
            } else {
            }
        })
        .catch(err => console.log(err));
    return productEdit;
}