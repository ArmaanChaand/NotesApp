import { Link } from "react-router-dom"
function Register(){
    return(
        <div className="LOGIN REGISTER">
            <h2 className="page-heading">Register</h2>
            <form className="login register" onSubmit={(e)=>e.preventDefault()}>
                <div className="login register">
                    <div className="register">
                        <div>
                            <label htmlFor="fullname">Full Name:</label>
                            <input 
                                className="fullname"
                                id="fullname"
                                name="fullname"
                                type="text"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input 
                                className="username"
                                id="username"
                                name="username"
                                type="text"
                                required
                                />
                        </div>
                    </div>
                    <div className="register">
                        <div>
                            <label htmlFor="password1">Password:</label>
                            <input 
                                type="password"
                                className="password"
                                id="password1"
                                name="password1"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password2">Confirm Password:</label>
                            <input 
                                type="password"
                                className="password"
                                id="password2"
                                name="password2"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
            <p className="msg">Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}
export {Register}