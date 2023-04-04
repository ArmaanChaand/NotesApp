import { NavLink } from "react-router-dom";
function Button({to, name, icon }){
    return(
        <NavLink to={to} className={({isActive})=> isActive ? "BUTTON ACTIVE": "BUTTON"}>
            {icon}
           <span>{name}</span>
        </NavLink>  
    )
}
export {Button}