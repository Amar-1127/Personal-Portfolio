import MainSection from "../MainSection";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";

export default function Home() {
    return(
    // <> </>React fragments // We can use <Div> But it will take space
        <> 
        <MainSection /> 
        <AboutMe />
        <MyPortfolio />
        </>
    )
}