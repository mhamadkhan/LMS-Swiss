import {Link} from 'react-router-dom'


const title = "Our Services";


const categoryList = [
    {
        text: 'Web Development',
      
        link: '/Services/WebDevelopment',
    },
    {
        text: 'Mobile App Development',
        
        link: '/Services/MobileAppDevelopment',
    },
    {
        text: 'Graphic Designing',
      
        link: '/Services/GraphicDesign',
    },
    {
        text: 'Search Engine Optimization',
     
        link: '/Services/SearchEngineOptimization',
    },
    {
        text: 'Web Designing',
      
        link: '/Services/WebDesigning',
    },
    {
        text: 'Blockchain',
    
        link: '/Services/Blockchain',
    },
    {
        text: 'Digital Marketing',

        link: '/Services/DigitalMarketing',
    },
]

const PostCategory = () => {
    return (
        <div style={{backgroundColor:'#FF0911' }} className="widget widget-category">
            <div className="widget-header">
                <h5 style={{color:'white'}} className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {categoryList.map((val, i) => (
                    <li style={{color:'white'}} key={i}>
                        <Link to={val.link} className="d-flex flex-wrap justify-content-between"><i style={{color:'white'}} span><spa className={"icofont-double-right"}></spa>{val.text}</i></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PostCategory;