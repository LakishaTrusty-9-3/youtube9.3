import NavBar from "./NavBar";
import YouTube from "react-youtube";



function View() {
    const { id } = this.props.match.params;
    const opts = {
        height: '405',
        width: '720',
        playerVars: {
            autoplay: 0,
        },
        };
    return (
        <div id="video-page">
            <NavBar />
            <div id="video-container">
                <YouTube videoId={id} opts={opts} />
            </div>
        </div>
    )
}

export default View;
