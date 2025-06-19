export default function AboutMe() {
    return  (
        <section className = "about--section">
            <div className="about--section--img">
                <img src="/img/Amar's.jpg" alt="Amar's Photo" /> 
            </div>
            <div className="aboutme-content-box">
                <div className="aboutme-content">
                    <h1 className="section-title">✨ About Me</h1>
                    <p className="aboutme-description">
                        I'm Amar Sinha, Computer Science student at Simon Fraser University, with a focus on software and web development. <br />
                        Beyond academics, I work part-time as delivery driver to support my education, which helps me to build soft skill - communication and time management. <br />
                        I'm actively looking for intership where I can learn and grow alongside industry professionals.
                    </p>
                    <h3 className="myskills-language">Languages: </h3>
                    <p className="language"> C++, HTML, CSS, React</p>
                    <h4 className="myskills-tools">Tools: </h4>
                    <p className="tool"> VS Code, XCode, Github </p>
                </div>
            </div>

        </section>
    )
}