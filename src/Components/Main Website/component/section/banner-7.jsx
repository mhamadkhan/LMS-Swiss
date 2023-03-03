
import { Link } from "react-router-dom";


const title = "Language is The Dress of Thought";
const desc = "Learn Unlimited Language & Explore Yourself";
const btnText = "Get Started Now";


const BannerSeven = () => {
    return (
        <section className="banner-section style-7">
            <div className="container">
                <div className="section-wrapper">
                    <div className="banner-top">
                        <div className="row justify-content-center">
                            <div className="offset-xl-6 col-xl-6">
                                <div className="banner-content">
                                    <h2 className="title">{title}</h2>
                                    <p className="desc">{desc}</p>
                                    <Link to="/signup" className="lab-btn"><span>{btnText}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
 
export default BannerSeven;