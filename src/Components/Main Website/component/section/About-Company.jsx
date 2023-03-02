const Title = "About Our Company";
const desc1 =
  "Soft Tech Hub is giving simplest solutions of complicated technologies for the greatest technical difficulties.Soft Tech Hub , has been functioning in Faisalabad from 2018, Technology and Solutions in the field of IT have expanded significantly in both domestically and globally to assist in-house product creation and growth in other businesses. We have successfully developed the IT Outsourcing Services Model which are known as ‘Right Sourcing‘. It is distinctive and creates solutions specifically tailored to the expanding demands of enterprises for custom software development.Our company is always growing and taking on new challenges, and as a result, we are able to offer our esteemed clients the expertise of more than 30 highly experienced software engineers and professionals from the technology sector.";
const desc2 =
  "One of Pakistan's top IT companies, Soft Tech Hub's client list of satisfied customers attests to this.We do every work in accordance with the demands and specifications of the client and ensure that their needs are met.We are a software IT development company that belongs to Elegant Doers and Solvers. We provide a wide range of IT goods and services. In the current digital era, IT is expanding quickly in many aspects of life, posing a variety of issues that we must always be prepared to face. We create IT solutions that are clever, economical, and user-friendly, including web applications, desktop applications, digital marketing, SEO, social media marketing, and graphics. We have been in operation since 2016 and are well-known in the Technology sector.";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h3
          className="text-center"
          style={{ color: "rgb(255, 9, 17)" }}
        >
          {Title}
        </h3>
        <div className="col-sm-12 col-lg-6 mt-3 mb-3">
          <p style={{textAlign: "justify"}}>{desc1}</p>
        </div>
        <div className="col-sm-12 col-lg-6  mt-3 mb-3">
          <p style={{textAlign: "justify"}}>{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
