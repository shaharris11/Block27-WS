import { useState } from "react";

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
       event.preventDefault();
       setError(null)
       try {
        if (username.length < 8) {
            throw new error ("You need more then 8 characters")
        } else if (password.length < 8) {
            throw new error ("You need more then 8 characters")
        }
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: {username},
                password: {password}
            })
        })
        const signupResults = await response.json();
        setToken(signupResults.token);

       } catch(error) {
        setError(error.message)
       }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up!</h2> {error &&
                <p>
                    {error}
                </p>
            }
            <label>Username: 
                <input 
                vaule={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>Password: 
                <input 
                vaule={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button>Submit</button>
        </form>

    );


}