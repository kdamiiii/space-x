const LaunchDetails = (launchProps) =>{
    return (
        <div>
            <img src={launchProps?.links?.mission_patch}/>
            {launchProps?.details ?? <span className="grayed-info">Details are not available</span>}
        </div>
    )
}

export default LaunchDetails