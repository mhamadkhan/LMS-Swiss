import PostCategory from "../../component/sidebar/post-category";
import PageHeader from "../../component/layout/pageheader";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Pic from "../../assets/images/services/Web Development.jpg";
import SidebarForm from "../../component/sidebar/Sidebar-form";
export default () => {
  
    let data = [
    {
      Service: "WebDevelopment",
      Title: "WEB APP DEVELOPMENT",
      Description:
        "With the help of the latest technologies, we are able to create optimized web solutions. In order to achieve this we need to ensure that development runs efficiently and properly while maintaining perfect design and well-written code at the heart of our applications. You will get the equalized attention from both Front-End sides and Back-End sides of your application. Our goal is to create products that look great and attractive, but that will not matter without a rigid and proper strong structure that will help your app scale.",
      img: Pic,
      SubDes:
        "You will get the equalized attention from both Front-End sides and Back-End sides of your application. Our goal is to create products that look great and attractive, but that will not matter without a rigid and proper strong structure that will help your app scale.",
      Detail: [
        {
          Title: "CI/CD",
          Des: "Keeping in note that HTML and CSS both are the core of the hybrid technologies. Therefore, mastering the basic knowledge with the ability to generate responsive content in a short time is essential.",
          img: Pic,
        },
        {
          Title: "MERN Stack Development",
          Des: "This is short for MongoDB, Express, React, Node. Browse the variety of MERN stack to create related and imaginative and interesting solutions you have your business, starting with the little startups and corporations. This opens many more doors for the exponential growth of the company.Have a look into the deep implementation of the techniques that MERN Stack applies for the creation and building of the interactive, innovative and good web solutions for your business, sites, startup also for the enterprise. It opens the new holes for the exponential and aggressive growth of your business and much more.If you want all these interesting and speedy implementations for the growth of your business then hire our experienced and expert team of the MERN Stack developers who will give you the way to fly above the mist and give wings to your ideas by turning them into the reality. Our developers and MERN Stack expert programmers fetch the best solutions for your business that are needed and required at the best time and place in effective manners.",
          img: Pic,
        },
        {
          Title: "Laravel Development",
          Des: "Laravel's Model View Controller architecture improves the overall performances, provides the extensive documentation, and facilitates a wide range of web application functions. It is the perfect choice for web development. It is a web application framework with an eloquent syntax. We let you create frames without the small things using default Laravel service providers. Laravel is an elegant and pretty web framework that comes with a nicely organized index structure by default.",
          img: Pic,
        },
      ],
    },

    {
      Service: "DigitalMarketing",
      Title: "DIGITAL MARKETING ",
      Description:
        "Our Marketing Agency is a all-round and full-service digital marketing agency that does not stand on smoke to attract new clients. Rather than we have our work done basis ideas and techniques especially Search Engine Optimization and marketing team to satisfy and fulfill the needs of the customers. We do not limit our searches and tools techniques to specific market and industry, we are not static we are dynamic in all the fields of online digital marketing, we use and provide multiple marketing services.",
      img: Pic,
      SubDes:
        "The Digital marketing services provide various businesses of all the sizes, masses with an opportunity to market their business and products 24/7 at a suitable cost. From startups and beginning to the medium-sized enterprises and from there to the multiple-location companies and more expands of the business roots, a digital marketing company helps you expand your micro and macro niche markets.Therefore many other marketing agencies rely on previous researches, many times offering you the same strategy as your competitor down the street, but we are the real one marketing agency which will provide the reliable and real strategies to the customers. ",

      Detail: [
        {
          Title: "SOCIAL MEDIA MARKETING",
          Des: "As social media usage continues to grow ascending and expanding day by day, every other person is advertising through the social media about their brand and newly launched products. Knowing how to market on social media is becoming more important in reaching your target demographics and creating brand awareness. Many marketers, however, enter the digital and social media marketing kingdom, sovereign state without fully understanding what is social media marketing and its demands. Don’t make the same mistake. We have the best team for the social media marketing and to expand your business! ",
          img: Pic,
        },
      ],
    },
    {
      Service: "BlockChain",
      Title: "BLOCKCHAIN",
      Description:
        "Blockhain development services help to make and create disperse and scattered software with fully detectable and security of the data and dealings and proceedings.",
      img: Pic,
      SubDes:
        "The Digital marketing services provide various businesses of all the sizes, masses with an opportunity to market their business and products 24/7 at a suitable cost. From startups and beginning to the medium-sized enterprises and from there to the multiple-location companies and more expands of the business roots, a digital marketing company helps you expand your micro and macro niche markets.Therefore many other marketing agencies rely on previous researches, many times offering you the same strategy as your competitor down the street, but we are the real one marketing agency which will provide the reliable and real strategies to the customers. ",

      Detail: [
        {
          Title: "DEVELOPMENT SERVICE",
          Des: "The blockchain development services help to create the dispersed and distributed blockchain networks that will contribute to increased accessibility, detectable and privacy of the data and proceedings. End to end blockchain application development are offered by our solutions to help the product companies and also reliable blockchain solutions are provided by the non IT enterprises. ",
          img: Pic,
        },
        {
          Title: "PARTICULAR BLOCKCHAIN NETWORK",
          Des: " Erect and boost your private and controlled contributor network, implement the agreement and common consent protocol to decide the mining ways and rights and rewards. Also maintain the shared archives.  ",
          img: Pic,
        },
        {
          Title: "DECENTRALIZED APPS (DApps)",
          Des: "Get the associated and co-mate apps with no chance and single point of bankruptcy and zero spare time and get rid of the data breaching and stealing bid and hacking attack.  ",
          img: Pic,
        },
        {
          Title: "SMART CONTRACTS",
          Des: "By the help of the smart contracts make sure the protocols that will assures the prosperity of multi-party dealings and automatically enforce the fixed accountability.  ",
          img: Pic,
        },
        {
          Title: "ASSETS TOKENIZATION PLATFORMS",
          Des: "Transfigure your real existing world assets like real estates, stocks, metal, corporate debt etc. into the digital tokens on a blockchain.  ",
          img: Pic,
        },
        {
          Title: "CRYPTO WALLETS ",
          Des: "By using the crypto wallets you can get a real medium or a gadget to store and save public as well as private keys for the crypto-currency transaction.  ",
          img: Pic,
        },
        {
          Title: "BLOCKCHAIN BASED MARKETPLACES",
          Des: "Apply the P2P platforms (for example the lending and borrowing platforms, blockchain-based marketplaces and platforms etc.) for the clear and transparent theft or fraud-free transaction between the concerned parties.  ",
          img: Pic,
        },
        ,
        {
          Title: "CONSULTING SERVICE",
          Des: "Our blockchain development negotiation helps the companied to overcome all the resistances to find the best blockchain solutions. We are regularly and constantly expanding our expertise in the developing products and niches that give benefits to our customers while increasing their sales. We also plan our workflow so that the clients can easily track and understand the statuses of their projects. In terms of the cost time and work efficiency there is a security for the customers too.  ",
          img: Pic,
        },
        {
          Title: "FINANCE MANAGEMENT",
          Des: "We offer immediate, fully safe and secured and less-cost instantaneous foreign currency payments and credit exchanges for the both domestically and internationally. We also secure all the manual errors and mistakes in the processing of financial transactions through various testing and checking.",
          img: Pic,
        },
        {
          Title: "SUPPLY CHAIN AND LOGISTICS",
          Des: "In order to track down the product from origin to consumption, we make sure traceability in the supply chain and in logistics.We customers to easily verify the legitimacy of goods and automatically implements permanent multilateral deals.",
          img: Pic,
        },
        {
          Title: "ASSETS MANAGEMENT",
          Des: "We help with memento and guarantee asset record invariability for various industries, from media to real estate.We also prove possession of goods and prevent bogus fraud with blockchain solutions.",
          img: Pic,
        },
      ],
    },
    {
      Service: "GraphicDesigning",
      Title: "GRAPHIC DESIGNING",
      Description:
        "Nowadays the digital graphics are playing a vital role in how you should market your company on the social media platforms through email, multimedia setup displays and many more.These are the more than just Facebook or Instagram profile or cover photos. This is actually a representative of your business your company your mission your work etc. you should be clear in. Mostly consumers nowadays do their deep online research before committing to a product or jumping into service.",
      img: Pic,
      SubDes:
        "In this modern era the effective and eye catching graphics are not just for the photos or nice-to-have, it is now the effective way to catch the audience to rank higher and attract consumers better than the competitors. This makes your account more memorable and adorable to search and effective way to capture the traffic. Side by to add a professional look to your digital marketing, it builds trust with consumers. Also to create effective digital assets, it’s important that you know what the end use of the graphic will be to make side reachable. So it is important that you know about what the end use of the graphic will be? Will it going to be a social media ad? A Google Display Ad like Google Adsense? Will it be used in email or communication? ",
      Detail: [
        {
          Title: "RESPONSIVE WEB DESIGN",
          Des: "This is the method of website development in which the sites are built, designed and verified on a variety of devices to determine their ease availability and usability and moderate experience for the user and customer. We can design your website to look effective and great on any device like mobile laptop tabs etc. through the use of web designing.It is not new technique it’s been around for a while that if your site is not responsive then you will be missing the potential sales and customers and audience. If you are lacking in the responsive web designing then this will effect in your ranking and your site will not get the required position in the market. ",
          img: Pic,
        },
        {
          Title: "LANDING PAGES AND IMPORTANCE",
          Des: "It is useless to have the best and effective market plans without the focused targeted and aimed way to generate the leads. When people will visit your site and if they don’t get their content properly and particularly related to them they will leave. That is why you should have a focused landing page or several landing pages, which are focused to convert visitors into their related content pages. This is the power of landing pages for your website",
          img: Pic,
        },
        {
          Title: "WEB DESIGN SERVICES (UI/UX)",
          Des: "Our team will give the visual look to your business to look attractive and good with our ultimate UI & UX design and services. Our main task and mission is to bring the finest and clean user experience to your website visitors in order to ensure a fixed and consistent website presentation and to develop a strong visitor base to come and get the data according their needs and to rank your business in the market.",
          img: Pic,
        },
        {
          Title: "MOBILE DESIGN SERVICES",
          Des: "Mobile applications need an effective and creative interface in order to be impressive. Our UI & UX design services will help and covers all the design and all sort of mobile applications with an effective look and easy to scan interface.Let it be iOS android or even the hybrid, apple application our expert designers chase it with excellence. Our team will give the visual look to your business to look attractive and good with our ultimate UI & UX design and services. Our main task and mission is to bring the finest and clean user experience to your website visitors in order to ensure a fixed and consistent website presentation and to develop a strong visitor base to come and get the data according their needs and to rank your business in the market.",
          img: Pic,
        },
      ],
    },
    {
      Service: "SearchEngineOptimization",
      Title: "SEARCH ENGINE OPTIMIZATION",
      Description:
        "Turn your traffic into the revenue by using the best SEO Techniques.We are the number 1 SEO service in the market, proved by our track records, custom strategy world class technology are provided by our best SEO team and search engine optimization services. Our main focus is to generate the revenue for the clients and our track records are the proofs of this.",
      img: Pic,
      SubDes:
        "Enhance your revenue, sale and leads with the most results driven online marketing agency. We will help you connect, get attached, and provide you the best SEO services in the market.",
      Detail: [
        {
          Title: "ENTERPRISE SEO SERVICES",
          Des: "Just simplify your collective SEO. A newly existing or larger site has to face many challenges like the competitors and modern services, to prove your existence and keep on verifying your revenue, ranking to building strategies that helps your brand reach its long-term and long-lasting goals. For this purpose we offer enterprise SEO services that will make it easy for you the complexity of the search engine optimization. ",
          img: Pic,
        },
        {
          Title: "BEST LOCAL SEO SERVICE",
          Des: "Spread your roots more of the market with the help of local SEO services, this will helps more people to find out your business. Our SEO experts will plan and you will receive a custom do-it-for-me solution. Our SEO expertise have ranked millions of the local businesses in the top 10 of the Google for several years and going on. Large variety of people will find your business and your business will grow getting the quick ranking in Google.",
          img: Pic,
        },
        {
          Title: "SEO AUDIT SERVICES",
          Des: "Take a complete and deep Audit and Action plans for future!Get the answers of the hindrances and resistances that is breaking your speed to get ranked and getting more revenue. The lacking factors will be point out to be covered for future progress",
          img: Pic,
        },
        {
          Title: "ECOMMERCE SEO PACKAGES",
          Des: "Do you have a store? Want to sell? Want more sales utilizing your store?Don’t miss the opportunity to get benefits from our SEO experts. You will find your site in the top 10 ranked sites in Google.",
          img: Pic,
        },
        {
          Title: "WHITE HAT LINK BUILDING SEO SERVICE",
          Des: "We will provide you the best link building and backlinks for your sites to get more traffic from many ways and hole. Brighten your business by using our SEO services A white hat link building strategy involves of directly relevant and high quality backlinks from other websites to yours to get the traffic.",
          img: Pic,
        },
        {
          Title: "KEYWORD RESEARCH SERVICE",
          Des: "While doing the SEO, keywords are the crucial part of your success. It plays an important role in becoming more prominent in front of your competitor.",
          img: Pic,
        },
        {
          Title: "SEO CONTENT WRITING SERVICE",
          Des: "It provides a vital role in the ranking factor and these are provided by the SEO professionals and experts. The valuable content will be provided that is needed for capturing and keeping the audience to fulfill their needs.",
          img: Pic,
        },
        {
          Title: "TECHNICAL SEO",
          Des: "It is the process of making you assure about the compatibility of search engine optimization so that your website can be crawled and indexed without any issue into 10 top websites.Site speed, robots exclusion standard (robots.txt), Accelerated Mobile Pages (AMP), XML sitemap status and content quality are all the part of the On-Page technical SEO. These factors are very critical to your website’s online performance for taking the traffic.",
          img: Pic,
        },
      ],
    },
    {
        Service: "WebDesigning",
        Title: "WEB DESIGNING",
        Description:
          "Web designing of any site provide a vital rule in ranking because to capture the audience it is needed to make your website attractive and fully designed.",
        img: Pic,
        SubDes:
          "",
        Detail: [
          {
            Title: "Custom WEB Designing",
            Des: "As your website is your business and you don’t want to see it declining. It supports all of your company’s digital marketing efforts in every case like money time place etc. The effective design results in an increase reputation and communication rate. Our company and experts and giving the best designs and layouts a website should have to be for profitability and success.",
            img: Pic,
          },
          {
            Title: "Ecommerce web design",
            Des: "An effective custom Ecommerce website design and layouts gives all the basic requirements and satisfies the buyer about the clear idea of your respective brand offerings and core values.",
            img: Pic,
          },
          {
            Title: "Why to choose us?",
            Des: "We have a team of expert digital marketing experts, from creative writers to web designers and SEO specialists and video producers, whose main mission is to grow your business.We do business with Clearance, honesty and a sincere heart for others to help them ad to grow them.We take the time to understand your business goals and then implements our strategies.We set realistic deadlines and stick to them and follow the tic of clock.We create original, quality web designs, we do not copy others we have professionals to work",
            img: Pic,
          },
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
            style={{backgroundColor:'#E5F6DF'}}
            className="blog-section flex padding-tb section-bg"
          >
            <div className="container">
              <div className="row ">
                <div className="col-lg-3 col-sm-12">
                 
                  <PostCategory />
                  <SidebarForm/>
                </div>
                <div className="col-lg-9 col-sm-12">
                  <div className="row">
                  
                    {data.map((val, i) =>
                      val.Service == Service ? (
                        <div>
                          <h5 style={{ color: "blue" }}>
                            {" "}
                            Customize Solution{" "}
                          </h5>
                          <div>
                            <h2 style={{ color: "#FF0911" }}> {val.Title} </h2>

                            <span
                              style={{ color: "black", textAlign: "justify" }}
                            >
                              {" "}
                              {val.Description}
                            </span>
                            <span style={{ color: "black" }}>{val.SubDes}</span>
                            <br />
                            <br />
                         <div style={{ margin: "auto", width: "80%" }}>
                                  <img src={val.img} />
                                </div>
                            <br />
                            <br />
                          </div>
                          <div>
                            {val.Detail.map((val, i) => (
                              <>
                                <h2 style={{ color: "#FF0911" }}>
                                  {" "}
                                  {val.Title}{" "}
                                </h2>

                                <span
                                  style={{
                                    color: "black",
                                    textAlign: "justify",
                                  }}
                                >
                                  {" "}
                                  {val.Des}
                                </span>
                                <br />
                                <br />
                                <div style={{ margin: "auto", width: "80%" }}>
                                  <img src={val.img} />
                                </div>
                                <br />
                                <br />
                              </>
                            ))}
                            <br />
                            <br />
                          </div>
                        </div>
                      ) : null
                    )}

       
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
