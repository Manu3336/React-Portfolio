import React from 'react';


const footer = () => {
    return (
        <div>
             {/* <footer className="py-5 bg-black">
                <div className="container">
                    <p className="m-0 text-center text-white small">Copyright &copy; Manu Kapoor 2018</p>
                </div>
            </footer> */}
            <footer> 

                <div class="page-wrap">

                    <p id="copy"><span>© 2018 <a href="mailto:manu.kapoor@outlook.com">Manu Kapoor</a></span> . </p>

                    <div class="follow-links-container">

                        <ul id="follow-links">
                            {/* <li id="follow-twitter"><a href="https://twitter.com/huzic"><span aria-hidden="true" class="icon-twitter"></span>Follow me on twitter</a></li> */}
                            {/* <li id="follow-dribbble"><a href="http://dribbble.com/huzic"><span aria-hidden="true" class="icon-dribbble"></span>Follow me on dribbble</a></li> */}
                        </ul>

                    </div>

                    <p id="footer-about">This site was built with great tools like <a href="http://www.adobe.com/cz/products/photoshop.html">Photoshop</a>, <a href="http://www.sublimetext.com/2">Sublime Text 2</a> &amp; <a href="http://incident57.com/codekit/">Codekit</a>. Font used in headlines is <a href="http://www.hvdfonts.com/User-agent: *&#10;Disallow:">Brandon&nbsp;Grotesque</a>, font in body copy is <a href="https://www.fontfont.com/fonts/meta-serif">FF&nbsp;Meta&nbsp;Serif&nbsp;Web&nbsp;Pro</a>. Both fonts are served up via <a href="https://typekit.com/">Typekit</a>.</p>

                </div>
            </footer>
        </div>

    )
}
export default footer;