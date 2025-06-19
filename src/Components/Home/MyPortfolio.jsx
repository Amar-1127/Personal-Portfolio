export default function MyPortfolio() {
    return(
        <section className="portfolio--section"> 
        <div className="porfolio--content-box">
            <div className="portfolio--content">
                <h2 className="porfolio-title">Portfolio 📝</h2>
            </div>
            <div>
                <a href="https://github.com/Amar-1127">
                <button className="button-github">
                    Visit my Github <img  src="/img/github-icon.png" alt="Github-Icon" />
                </button>
                </a>
            </div>
        </div>
        <div className="portfolio--section--content">
            <div className="portfolio--section--card">
                <div className="portfolio-section--img">
                <img src="/img/PP-Page.png" alt="Overview-portfolio" />
                </div>
                <div className="portfolio--card--content">
                    <div>
                        <h3 className="protfolio-section-title">Personal Portfolio</h3>
                        <p className="portfolio-text"> description </p>
                    </div>
                    <p className="portfolio-link"> link </p>
                </div>
            </div>
        </div>
        </section>
    );
}