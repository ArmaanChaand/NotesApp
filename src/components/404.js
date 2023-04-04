import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div className="Page404">
        <h1>Page Not Found</h1>
        <Link to="/"><p>Visit Our Homepage</p></Link>
        </div>
    )
}
export {NotFound}