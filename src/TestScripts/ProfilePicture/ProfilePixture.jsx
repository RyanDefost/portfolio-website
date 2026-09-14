

function ProfilePicture() {

    const imageURL = '../src/assets/Profile.png'
    const handleClick = (e) => {
        e.target.style.display = "None";
        console.log(e)
    }

    return (
        <>
            <img onClick={(e) => handleClick(e)} src={imageURL} alt="profileItem" />
        </>
    );
}

export default ProfilePicture