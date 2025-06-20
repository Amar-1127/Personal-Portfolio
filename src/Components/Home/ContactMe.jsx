export default function ContactMe() {
    return(
        <section className="contact--section">
            <div>
                <h1 className="porfolio-title"> Contact Me 📨</h1>
                <p className="contact-sub-title"> Fill out the form below</p>
            </div>
            <form className="contact-form-box">
                <div className="form-content">
                    <label htmlFor="First_Name" className="contact-label">
                        <span className="contact-text">First Name</span>
                        <input 
                        type="text" 
                        name="First_Name"
                        className="contact-input" 
                        id="first_name" 
                        required/>
                    </label>

                    <label htmlFor="Last_Name" className="contact-label">
                        <span className="contact-text">Last Name</span>
                        <input 
                        type="text" 
                        name="Last_Name"
                        className="contact-input" 
                        id="last_name" 
                        required/>
                    </label>
                    <label htmlFor="Email" className="contact-label">
                        <span className="contact-text">Email</span>
                        <input 
                        type="email" 
                        name="Email"
                        className="contact-input" 
                        id="email" 
                        required/>
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="contact-text">Phone Number</span>
                        <input 
                        type="number" 
                        name="phone-number"
                        className="contact-input" 
                        id="phone-number" 
                        required/>
                    </label>
                </div>
                <label htmlFor="reason" className="contact-label">
                        <span className="contact-text">Reason/Message</span>
                        <textarea 
                        className="contact-input" 
                        id="reason" 
                        required/>
                 </label>
                 <div>
                    <button className="button-primary">
                        Submit
                    </button>
                 </div>
            </form>
        </section>
    );
}