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
			    		<li><a href="https://twitter.com/huzic">Twitter</a></li>
			    		<li><a href="http://dribbble.com/huzic">Dribbble</a></li>
			    		<li><a href="http://www.behance.net/huzic">Behance</a></li>
			    		<li><a href="https://www.facebook.com/pages/Pavel-Huza-UI-UX-designer/132395680117266">Facebook</a></li>
			    		<li><a href="http://www.instagram.com/huzic">Instagram</a></li>
					</ul> 
                    
				</div>
        </div>

    )
}
export default contact;