import React from "react";
import Styles from "./Vision-and-Mission.module.css";
const Title1 = "Our Vision";
const desc1 =
  "To be regarded as Pakistan's top software house and a proficient provider of IT services by our customers, clients, employees, partners, vendors, and rivals. Widely regarded as one of the top software solution and IT services providers in the clothing and financial industries, with a significant global presence";
const Title2 = "Our Mission";
const desc2 =
  "To be regarded as Pakistan's top software house and a proficient provider of IT services by our customers, clients, employees, partners, vendors, and rivals. Widely regarded as one of the top software solution and IT services providers in the clothing and financial industries, with a significant global presence";
const img1 = "assets/images/about/one.jpg";
const img2 = "assets/images/about/two.jpg";

const Vision = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className={`${Styles.main} row`}>
          <div className="col-lg-6 col-sm-12 mt-5 justify-content-sm-center">
            <div class={`${Styles.data1} `}>
              <h5 class={`${Styles.content} text-center`}>{Title1}</h5>
              <p class=" text-center">{desc1}</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5">
            <div >
              <img
                style={{ height: "270px", width: "100%" }}
                src={img1}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-4">
            <div>
              <img
                style={{ height: "270px", width: "100%" }}
                src={img2}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-4 justify-content-sm-center">
            <div class={`${Styles.data1} `}>
              <h5 class={`${Styles.content} text-center`}>{Title2}</h5>
              <p class="text-center">{desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
