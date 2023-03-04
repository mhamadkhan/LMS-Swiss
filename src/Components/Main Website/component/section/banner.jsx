import { Link } from "react-router-dom";
import IntroVideo from "../../assets/images/Video/IntroVideo.mp4"
const subTitle = "An Overseas Education Consultant";
const title = <h2 style={{fontWeight:'800'}} > FROM GOAL TO GLORY </h2>;
const desc = "The Soft Tech Hub network of enterprises takes great satisfaction in promoting famous universities that not only have sizable and diverse student populations but also serve as the residence for millions of accomplished graduates who have found success all over the world.";


const Banner = () => {
    return (
        <section style={{backgroundSize:'auto'}} className="banner-section">
            <div  className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <p style={{color:'#FF0911'}} >{subTitle}</p>
                                {title}
                                <p style={{textAlign:'justify'}} className="desc">{desc}</p>
                                <form action="/" className="mb-2">
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input type="text" placeholder="Keywords of your course" />
                                    <button style={{backgroundColor:'#FF0911'}} type="submit">Search Course</button>
                                </form>
                                
                                  <Link to="/courseregistrationform" >
                                <button  className="mb-2 ms-3"  style={{backgroundColor:'#FF0911',color:"white" ,borderRadius:'10%' }}>Apply Now</button>
                               </Link>
                               </div> 
                          
                        </div>
                <div  className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                <video style={{width: "100%", height: "auto"}}  autoplay="autoplay"muted loop  >
                                    <source  src={IntroVideo} />    
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
}
 
export default Banner;