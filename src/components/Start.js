import { useEffect, useState } from "react"
import { Start2 } from "./StartUnauth"

function Start({user}){
    const [is_Authenticated, setIsAuthenticated ] = useState(false)
    useEffect(()=>{
        user.is_Authenticated && setIsAuthenticated(true)
    }, [user])
    return(
        <>
        {is_Authenticated ? 
            <div className="START">
                {user ? 
                <>
                <h2 className="page-heading">Hi, {user.name}</h2>
                <div className="stats-boxes">
                    <div className="stats-box">
                        <p className="num">{user.notes}</p>
                        <p className="text">Notes</p>
                    </div>
                    <div className="stats-box">
                    <p className="num">{user.complete}</p>
                    <p className="text">Completed</p>
                    </div>
                    <div className="stats-box">
                    <p className="num">{user.incomplete}</p>
                    <p className="text">Incomplete</p>
                    </div>
                    </div>
                    <div className="featured">
                    <h3>Featured One</h3>
                    <h2>
                    This One is Great!!!
                    </h2>
                    <p>
                    Search for the keywords to learn more about each warning.
                    To ignore, add // eslint-disable-next-line to the line before.
                        WARNING in  src\App.js Line 9:16:  'setUser' is assigned a value 
                        but never used  no-unused-vars src\components\Button.js is defined but 
                        never used  no-unused-vars webpack compiled with 1 warning
                    </p>
                </div>
                </>
                : <p>Unauthenticated</p>}
            </div>
        : <Start2 />}
    </>
    )
}
export {Start}