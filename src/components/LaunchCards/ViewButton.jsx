const ViewButton = ({setView, isViewed}) =>{
    
    const handleOnClick = ()=>{
        setView(!isViewed)
    }

    return(
        <button onClick={handleOnClick} className="view-button">{isViewed? 'Hide' :'View'}</button>
    )
}

export default ViewButton;