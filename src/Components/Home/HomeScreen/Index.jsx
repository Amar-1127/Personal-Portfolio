import MainSection from "../MainSection";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";


export default function Home() {
    return(
    // <> </>React fragments // We can use <Div> But it will take space
        <> 
        <MainSection /> 
        {/* <AboutMe />
        <MyPortfolio />
        <ContactMe /> */}
        </>
    )
}