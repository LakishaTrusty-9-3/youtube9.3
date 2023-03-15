import Youtube from "react-youtube";
import NavBar from "./NavBar";

export default function ShowVideo(){
    return (
    <>
        <NavBar/>
        <h2>Show Video Page</h2>
        <Youtube videoId="dpw9EHDh2bM" />

    </>
);
}