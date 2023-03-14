import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";
export default function Header() {
      return (
      <header>
        <Link to="/">
          <h1>Youtube</h1>
        </Link>
        <NavBar/>
      </header>
      );
    };