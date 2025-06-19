import MainSection from "../MainSection";
import AboutMe from "../AboutMe";
export default function Home() {
    return(
    // <> </>React fragments // We can use <Div> But it will take space
        <> 
        <MainSection /> 
        <AboutMe />
        </>
    )
}