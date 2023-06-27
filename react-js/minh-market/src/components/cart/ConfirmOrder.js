import {useEffect} from "react";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import {save} from "../../service/CartService";

export function Order() {
    const [queryParameters] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            queryParameters.get("userName")
            await save(queryParameters.get("userName"))
            navigate("")
        }
    }, [])
}