import axios from "axios";
const token=localStorage.getItem("token")
export const findByUserName = async (userName) => {
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        const result = await axios.get(`http://localhost:8080/api/user/customer/find?username=${userName}`,{headers})
        return result.data
    } catch (e) {
        console.log(e)
    }
}