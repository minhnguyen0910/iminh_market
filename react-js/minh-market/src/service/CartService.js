import axios from "axios";
const token=localStorage.getItem("token")
const username=localStorage.getItem("username")
export const findAllCart = async (username, token) => {
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        const result = await axios.get(`http://localhost:8080/api/user/list?nameAcc=${username}`, {headers})
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const setQtt = async (idCus, idPro, qtt, token) => {
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        await axios.get(`http://localhost:8080/api/user/setQtt?idCus=${idCus}&&idProduct=${idPro}&&qtt=${qtt}`, {headers})
    } catch (e) {
        console.log(e)
    }
}
export const pay=async ()=>{
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        const result=await axios.get(`http://localhost:8080/api/user/order/save?userName=${username}`,{headers})
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save=async (userName)=>{
    const headers = {
        Authorization: "Bearer " + token,
    };
    try {
        await axios.get(`http://localhost:8080/api/user/order/save?userName=${userName}`,{headers})
    }catch (e) {
        console.log(e)
    }

}
export const saveCart=async (cartDTO)=>{
    console.log(cartDTO)
    const headers = {
        Authorization: "Bearer " + token,
    }
    try {
        await axios.post(`http://localhost:8080/api/user/saveCart`,cartDTO,{headers})
    }catch (e) {
        console.log(e)
    }
}
export const deleteCart=async (idCart)=>{
    const headers = {
        Authorization: "Bearer " + token,
    }
    try {
        await axios.post(`http://localhost:8080/api/user/deleteCart`,idCart,{headers})
    }catch (e) {
        console.log(e)
    }
}