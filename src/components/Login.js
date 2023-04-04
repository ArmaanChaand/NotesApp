import { Link } from "react-router-dom"
function Login(){
    return(
        <div className="LOGIN">
            <h2 className="page-heading">Login</h2>
            <form className="login" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="username">Username:</label>
                <input 
                    className="username"
                    id="username"
                    name="username"
                    type="text"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    className="password"
                    id="password"
                    name="password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p className="msg">New on the Website? <Link to="/register">Sign up</Link></p>
        </div>
    )
}
export {Login}