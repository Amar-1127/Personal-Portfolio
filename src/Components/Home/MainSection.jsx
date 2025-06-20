export default function MainSection() {
    return  (
        <section id="mainSection" className="MainSection">
            <div className="mainSection-contentbox">
                <div className="mainsection-content">
                    <p className="section-intro">Hi, I am
                    </p>
                    <h1 className="mainSection-title">
                        <span className="mainSection-title-color">Amar Sinha</span> 
                    </h1>
                    <p className="mainSection-description"> Second-Year Computer Science Student <br /> I'm currently building my skills in programming and development. </p>
                </div>
                
            </div>
            <div className="mainSection-img">
                <img src={`${process.env.PUBLIC_URL}/amar.jpg`} alt="Amar's Photo"/>
            </div>
        </section>
    );
}