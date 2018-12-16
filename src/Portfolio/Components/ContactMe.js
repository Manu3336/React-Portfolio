import React from 'react';

const contact = () => {
    return (

        <div  id="contact" className="contact-me">
            <h1>OK, LET’S CREATE <br/>SOMETHING GREAT</h1>
            <p>If you like my work and have some cool project to work on, just send me direct message or <br/>contact me through social sites listed below.</p>
            <a id="send-mail" className="button" href="mailto:manu.kapoor@outlook.com">
            <span className="icon-mail"></span>Get in touch</a>
            <div className="social-links-container">
					<ul className="social-links">
			    		<li><a href="https://www.linkedin.com/in/manukapoor3/">linkedin</a></li>
			    		<li><a href="https://www.facebook.com/manu.kapoor3">Facebook</a></li>
			    		<li><a href="https://www.facebook.com/manu.kapoor3">Instagram</a></li>
					</ul> 
                    
				</div>
        </div>

    )
}
export default contact;