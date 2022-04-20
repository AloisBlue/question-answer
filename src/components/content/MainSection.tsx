import { FC } from "react";


const MainSection: FC = ({children}) => {
    return(
        <div className="main-section">
            <div className="wrap-background">
                <div className="body-details">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainSection;