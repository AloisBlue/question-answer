import { FC } from "react";
import MainSection from "./MainSection";
import RightSection from "./RightSection";

const Content: FC = ({children}) => {
    return(
        <div className="main-wrapper">
            <MainSection>
                {children}
            </MainSection>
            <RightSection />
        </div>
    )
}

export default Content;