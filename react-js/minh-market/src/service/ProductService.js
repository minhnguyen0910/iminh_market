import axios from "axios";

export const findAll = async ()=>{
    try{
        const result = await axios.get(`http://localhost:8080/api/public/product/list`)
        return result.data;
    }catch (e) {
        console.log(e)
    }

}
export const findById=async (id)=>{
    try{
        const result=await axios.get(`http://localhost:8080/api/public/product/`+id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}