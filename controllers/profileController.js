const  getUserProfile = (req, res) => {
    const userProfile = {
        name :'Alice',
        role:'student'
    };
    res.json(userProfile)
}
export default getUserProfile; 

