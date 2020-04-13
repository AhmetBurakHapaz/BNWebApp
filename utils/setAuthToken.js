import axios from 'axios'
const setAuthToken = token => {
   if(token){
      // Her Axios isteği için tokeni uygula
      axios.defaults.headers.common['Authorization']
   }else{
      // Sil
      delete axios.defaults.headers.common['Authorization']
   }
}
export default setAuthToken;