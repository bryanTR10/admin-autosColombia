import React, {  useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("/api/auth/login", { email, password });
        } catch (error) {
            console.error(error);
        }
    };
}

export default Login;