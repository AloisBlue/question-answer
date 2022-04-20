import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Paths from "../../routes/Paths";

const RightSection: FC = () => {
    const navigate = useNavigate();

    return(
        <div className="right-section">
            <div className="wrap-background">
                <div className="header">
                    <button
                        onClick={() => navigate(Paths.questions.askQuestion)}
                    >
                        Ask a Question
                    </button>
                </div>
                <div className="body-details">
                    {/* some Content */}
                </div>
            </div>
        </div>
    )
}

export default RightSection;