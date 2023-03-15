function VideoList() {
    let {thumbnails, title}= this.props.video.snippet;    
    return(
        <div className="thumbnail-container">
            <div className="video-container">
                <div className="media">
                    <img src={thumbnails.default.url} alt='youtube thumbnail'/>
                </div>
                <div className="content">
                    <span> {title} </span> 
                    <br/>
                </div>
            </div>
        </div> 
)}

export default VideoList