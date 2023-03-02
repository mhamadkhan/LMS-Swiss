import PostCategory from "../../component/sidebar/post-category";
import PageHeader from "../../component/layout/pageheader";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Pic from "../../assets/images/services/Web Development.jpg";
export default () => {
  let data = [
    {
      Service: "WebDevelopment",
      Title: "WEB APP DEVELOPMENT",
      Description:
        "With the help of the latest technologies, we are able to create optimized web solutions. In order to achieve this we need to ensure that development runs efficiently and properly while maintaining perfect design and well-written code at the heart of our applications. You will get the equalized attention from both Front-End sides and Back-End sides of your application. Our goal is to create products that look great and attractive, but that will not matter without a rigid and proper strong structure that will help your app scale.",
      img:  Pic ,
      SubDes:
        "You will get the equalized attention from both Front-End sides and Back-End sides of your application. Our goal is to create products that look great and attractive, but that will not matter without a rigid and proper strong structure that will help your app scale.",
      Detail: [
        {
          Title: "CI/CD",
          Des: "Keeping in note that HTML and CSS both are the core of the hybrid technologies. Therefore, mastering the basic knowledge with the ability to generate responsive content in a short time is essential.",
          img: Pic ,
        },
        {
          Title: "MERN Stack Development",
          Des: "This is short for MongoDB, Express, React, Node. Browse the variety of MERN stack to create related and imaginative and interesting solutions you have your business, starting with the little startups and corporations. This opens many more doors for the exponential growth of the company.",
          img:  Pic ,
        },
        {
          Title: "Laravel Development",
          Des: "Laravel's Model View Controller architecture improves the overall performances, provides the extensive documentation, and facilitates a wide range of web application functions. It is the perfect choice for web development. It is a web application framework with an eloquent syntax. We let you create frames without the small things using default Laravel service providers. Laravel is an elegant and pretty web framework that comes with a nicely organized index structure by default.",
          img: Pic ,
        },
      ],
    },

    {
        Service: "DigitalMarketing",
        Title: "DIGITAL MARKETING ",
        Description:
          "Our Marketing Agency is a all-round and full-service digital marketing agency that does not stand on smoke to attract new clients. Rather than we have our work done basis ideas and techniques especially Search Engine Optimization and marketing team to satisfy and fulfill the needs of the customers. We do not limit our searches and tools techniques to specific market and industry, we are not static we are dynamic in all the fields of online digital marketing, we use and provide multiple marketing services.",
        img:  Pic ,
        SubDes:
          "The Digital marketing services provide various businesses of all the sizes, masses with an opportunity to market their business and products 24/7 at a suitable cost. From startups and beginning to the medium-sized enterprises and from there to the multiple-location companies and more expands of the business roots, a digital marketing company helps you expand your micro and macro niche markets.Therefore many other marketing agencies rely on previous researches, many times offering you the same strategy as your competitor down the street, but we are the real one marketing agency which will provide the reliable and real strategies to the customers. ",
        
        Detail: [
          {
            Title: "SOCIAL MEDIA MARKETING",
            Des: "As social media usage continues to grow ascending and expanding day by day, every other person is advertising through the social media about their brand and newly launched products. Knowing how to market on social media is becoming more important in reaching your target demographics and creating brand awareness. Many marketers, however, enter the digital and social media marketing kingdom, sovereign state without fully understanding what is social media marketing and its demands. Don’t make the same mistake. We have the best team for the social media marketing and to expand your business! ",
            img: Pic ,
          },
          
        ],
      },
      {
        Service: "BlockChain",
        Title: "BLOCKCHAIN",
        Description:
          "Blockhain development services help to make and create disperse and scattered software with fully detectable and security of the data and dealings and proceedings.",
        img:  Pic ,
        SubDes:
          "The Digital marketing services provide various businesses of all the sizes, masses with an opportunity to market their business and products 24/7 at a suitable cost. From startups and beginning to the medium-sized enterprises and from there to the multiple-location companies and more expands of the business roots, a digital marketing company helps you expand your micro and macro niche markets.Therefore many other marketing agencies rely on previous researches, many times offering you the same strategy as your competitor down the street, but we are the real one marketing agency which will provide the reliable and real strategies to the customers. ",
        
        Detail: [
          {
            Title: "DEVELOPMENT SERVICE",
            Des: "The blockchain development services help to create the dispersed and distributed blockchain networks that will contribute to increased accessibility, detectable and privacy of the data and proceedings. End to end blockchain application development are offered by our solutions to help the product companies and also reliable blockchain solutions are provided by the non IT enterprises. ",
            img: Pic ,
          },
          {
            Title: "PARTICULAR BLOCKCHAIN NETWORK",
            Des: " Erect and boost your private and controlled contributor network, implement the agreement and common consent protocol to decide the mining ways and rights and rewards. Also maintain the shared archives.  ",
            img: Pic ,
          },
          {
            Title: "DECENTRALIZED APPS (DApps)",
            Des: "Get the associated and co-mate apps with no chance and single point of bankruptcy and zero spare time and get rid of the data breaching and stealing bid and hacking attack.  ",
            img: Pic ,
          },
          {
            Title: "SMART CONTRACTS",
            Des: "By the help of the smart contracts make sure the protocols that will assures the prosperity of multi-party dealings and automatically enforce the fixed accountability.  ",
            img: Pic ,
          },
          {
            Title: "ASSETS TOKENIZATION PLATFORMS",
            Des: "Transfigure your real existing world assets like real estates, stocks, metal, corporate debt etc. into the digital tokens on a blockchain.  ",
            img: Pic ,
          },
          {
            Title: "CRYPTO WALLETS ",
            Des: "By using the crypto wallets you can get a real medium or a gadget to store and save public as well as private keys for the crypto-currency transaction.  ",
            img: Pic ,
          },{
            Title: "BLOCKCHAIN BASED MARKETPLACES",
            Des: "Apply the P2P platforms (for example the lending and borrowing platforms, blockchain-based marketplaces and platforms etc.) for the clear and transparent theft or fraud-free transaction between the concerned parties.  ",
            img: Pic ,
          },
          ,{
            Title: "CONSULTING SERVICE",
            Des: "Our blockchain development negotiation helps the companied to overcome all the resistances to find the best blockchain solutions. We are regularly and constantly expanding our expertise in the developing products and niches that give benefits to our customers while increasing their sales. We also plan our workflow so that the clients can easily track and understand the statuses of their projects. In terms of the cost time and work efficiency there is a security for the customers too.  ",
            img: Pic ,
          },{
            Title: "FINANCE MANAGEMENT",
            Des: "We offer immediate, fully safe and secured and less-cost instantaneous foreign currency payments and credit exchanges for the both domestically and internationally. We also secure all the manual errors and mistakes in the processing of financial transactions through various testing and checking.",
            img: Pic ,
          },{
            Title: "SUPPLY CHAIN AND LOGISTICS",
            Des: "In order to track down the product from origin to consumption, we make sure traceability in the supply chain and in logistics.We customers to easily verify the legitimacy of goods and automatically implements permanent multilateral deals.",
            img: Pic ,
          },
          {
            Title: "ASSETS MANAGEMENT",
            Des: "We help with memento and guarantee asset record invariability for various industries, from media to real estate.We also prove possession of goods and prevent bogus fraud with blockchain solutions.",
            img: Pic ,
          }

          
        ],
      },
  ];

  let { Service } = useParams();
  console.log(Service);

  return (
    <>
      {
        <Fragment>
          <PageHeader
            title={"Our Services "}
            curPage={"Services"}
            subCurPage={Service}
          />

          <div
            style={{ backgroundColor: "#D3D3D3" }}
            className="blog-section flex padding-tb section-bg"
          >
            <div className="container">
              <div className="row ">
                <div className="col-lg-3 col-6">
                  {/* <article> */}
                  <PostCategory />
                  {/* </article> */}
                </div>
                <div style={{ width: "75%" }}>
                  <div className="row">
                    {/* <aside>  */}
                    {data.map((val, i) => val.Service == Service ?  (
                      <div>
                        <h5 style={{ color: "blue" }}> Customize Solution </h5>
                        <div>
                          <h2 style={{ color: "#FF0911" }}> {val.Title} </h2>

                          <span style={{ color: "black" ,textAlign:'justify' }}>
                            {" "}
                           {val.Description}
                          </span>
                          <br />
                          <br />
                          <img
                            
                            src= {val.img}
                          />
                          <br />
                          <br />
                          <span style={{ color: "black" }}>
                          {val.SubDes}
                          </span>
                        </div>
                        <div>
                {  val.Detail.map((val, i) =>  (  <>
                    
                          <h2 style={{ color: "#FF0911" }}> {val.Title} </h2>

                          <span style={{ color: "black" ,textAlign:'justify' }}>
                            {" "}
                           {val.Des}
                          </span>
                          <br/>
                          <br/>
                          <img src={val.img} />
                          <br/>
                          <br/>
                     </>
               ))
                }   
                          <br />
                          <br />
                        </div>
                   
                      </div>
                     ) : null )}

                    {/* </aside> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      }
    </>
  );
};
