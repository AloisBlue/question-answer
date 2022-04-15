import { FC } from "react";
import { Link } from "react-router-dom";


const Landing: FC = () => {
    return(
        <>
            <p>This is the Landing page</p>
            <Link to="/signup">Signup</Link>
        </>
    )
}

export default Landing;