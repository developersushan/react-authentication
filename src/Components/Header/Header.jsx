import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut =()=>{
        logOut().then(()=>{

        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                
                
                {user ? <div><p>{user.email}</p><button className="btn btn-ghost normal-case text-xl" onClick={handleLogOut}>logOut</button></div> : <Link className="btn btn-ghost normal-case text-xl" to='/registrar'>Registrar</Link> }
            </div>
        </div>
    );
};

export default Header;