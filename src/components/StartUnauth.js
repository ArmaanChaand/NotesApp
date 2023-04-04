import { Link } from "react-router-dom"
function Start2(){
    return(
        <div className="START Unauth">
            <h2>
                You're Not Authenticated!!!
            </h2>
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Signup</Link>
        </div>
    )
}
export {Start2}