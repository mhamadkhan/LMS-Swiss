
export default ()=>{
    const subTitle = "About Our Soft Tech Hub";
const title = "Success in Excellence Together";
const desc = "For the most technologically difficult situations, Soft Tech Hub offers the most straightforward answers possible.Soft  Tech Hub IT-related technology and solutions have expanded quickly on a national and international scale to support internal product development and expansion in other organizations. The Right Sourcing model for IT outsourcing services was successfully created by us. It is distinctive and creates solutions specifically tailored to the expanding demands of enterprises for custom software development.Our company is always growing and taking on new challenges, and as a result, we are able to offer our esteemed clients the expertise of more than 30 highly experienced software engineers and professionals from the technology sector";

const year = "15+";
const expareance = "Years Of Experiences";



const aboutList = [
    // {
    //     imgUrl: 'assets/images/about/icon/01.jpg',
    //     imgAlt: 'about icon rajibraj91 rajibraj',
    //     title: 'Skilled Instructors',
    //     desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    // },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Get Certificate',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Online Classes',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]
    return(
        <>
          <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="assets/images/about/02.jpg" alt="about" />
                                </div>
                                <div style={{backgroundColor:"#FF0911"}} className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h3 className="title">{title}</h3>
                                    <p style={{textAlign:'justify'}}>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}