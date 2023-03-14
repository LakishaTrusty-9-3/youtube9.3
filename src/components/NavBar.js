import { Link } from "react-router-dom";



export default function NavBar(){
    return (
    <>
        <nav>
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/about">
                <h2>About</h2>
            </Link>

        </nav>
    </>
);
}