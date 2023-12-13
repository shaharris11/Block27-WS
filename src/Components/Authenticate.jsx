import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            if(!token) {
                throw new error("You didnt sign in")
            }
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            }
            });
            const result = await response.json()
            setSuccessMessage(`${result.message} Welcome ${result.data.username.username}`);


        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button
                onClick={() => {handleClick()}}>Authenticate Token!
            </button>
        </div >
    );
}
