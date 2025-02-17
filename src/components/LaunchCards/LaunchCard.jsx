import React, { useState } from 'react'
import ViewButton from './ViewButton';
import LaunchDetails from './LaunchDetails';

const LaunchCard = (launchProps) => {
    const [isViewed, setIsView] = useState(false);
    const flightStatus = launchProps.upcoming ? 'upcoming' : launchProps.launch_success?'success':'fail'

    return (
        <div className='card'>
            <div className='card-header'>
                <h1>{launchProps.mission_name}</h1>
                <div className={`badge ${flightStatus}`}>{flightStatus.toLocaleUpperCase()}</div>
            </div>
            <ViewButton setView={setIsView} isViewed={isViewed}/>
            {isViewed && <LaunchDetails details={launchProps.details}/>}
        </div>
    )    
}

export default LaunchCard