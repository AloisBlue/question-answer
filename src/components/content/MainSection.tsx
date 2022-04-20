import { FC, useState } from "react";
import { IFilter } from "../../models/Common";

const MainSection: FC = ({children}) => {
    const [activeFilter, setActiveFilter] = useState('recent-questions')

    const filters: IFilter[] = [
        {
            name: 'Recent Questions',
            variation: 'recent-questions'
        },
        {
            name: 'Most Answers',
            variation: 'most-answers'
        }
    ]
    return(
        <div className="main-section">
            <div className="wrap-background">
                <div className="header">
                    <ul>
                        {
                            filters.map(filter => (
                                <li className={`${activeFilter === `${filter.variation}` && 'active-li'}`} onClick={() => setActiveFilter(filter.variation)}>{filter.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="body-details">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainSection;