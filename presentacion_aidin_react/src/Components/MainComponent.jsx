import { AidinDescription } from "./Components_container/AidinDescription";
import { AidinHobbies } from "./Components_container/AidinHobbies"
import { AidinImage } from "./Components_container/AidinImage"
import "./MainComponentStyle.css"


export const MainComponent = () => {

    return (
        <>
            <div className="main_container">
                <AidinDescription></AidinDescription>
                <AidinHobbies></AidinHobbies>
                <AidinImage></AidinImage>
            </div>
        </>
    )
}

export default MainComponent



