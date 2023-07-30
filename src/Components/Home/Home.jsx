import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        
                        {user ? <h1 className="text-5xl font-bold">welcome ,{user.email}</h1> :<h1 className="text-5xl font-bold">Hello there</h1>}
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;