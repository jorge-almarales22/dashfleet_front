import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

export const useOrders = () => {

    const [order, setOrders] = useState([]);
    const IDRef = useRef();
    const IDTypeRef = useRef();
    const orderCodeRef = useRef();
    const errorRef = useRef();
    let navigate = useNavigate();

    const getOrders = async(e) => {

        e.preventDefault();

        const orderData = {
            "order_code": orderCodeRef.current.value,
            "ID_type": IDTypeRef.current.value,
            "ID": IDRef.current.value
        }

        const response = await fetch('http://127.0.0.1:8000/api/order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();

        if(data.status != undefined){
            errorRef.current.classList.remove("d-none");
            errorRef.current.innerText = data.message;
            return;
        }

        setOrders(data[0]);

        navigate("/detail");
    }

    return {
        order,
        getOrders,
        IDRef,
        IDTypeRef,
        orderCodeRef,
        errorRef
    }
}