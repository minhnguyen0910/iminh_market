import axios from "axios";
const token=localStorage.getItem("token")

export const historyOrder = async (username) => {
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        const result = await axios.get(`http://localhost:8080/api/user/order/history?username=${username}`,{headers})
        return result.data
    } catch (e) {
        console.log(e)
    }

}
export const searchOrder = async (username, startDate, endDate) => {
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        const result = await axios.get(`http://localhost:8080/api/user/order/searchOrder?username=${username}&&start=${startDate}&&end=${endDate}`,{headers})
        return result.data
    } catch (e) {
        console.log(e)
    }

}