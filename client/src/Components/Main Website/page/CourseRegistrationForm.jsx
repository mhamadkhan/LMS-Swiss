import React from "react";
import { useForm } from "react-hook-form";
import { Fragment } from "react";
import PageHeader from "../component/layout/pageheader";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];
const Form = () => {
  const { register, handleSubmit, formState:{errors} , reset } = useForm();
    let navigate=useNavigate();

        const courses = [
          "Web Development",
          "Mobile App development",
          "Artifical Intelligence",
          "Graphic Design",
          "Block Chain",
        ];
     
    const onSubmit = async(data) =>{
         
        console.log(data);
        try {
          const resp = await axios.post('/courseApply/apply', data);
          console.log(resp.data)
          if(resp.data.message=="Application with this whatsapp number already exist"){
            
           toast.error("Application with this whatsapp number already exist", {
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#f97316',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            })
           
          }else if(resp.data.message=="Applied Successfully"){
                 reset();
              toast.success('Apply Successfully our agent will contact you soon');
               navigate('/')
          }else{
            toast.error("Something went wrong", {
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#f97316',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            })
          }       
         }catch (error) {
          console.log(error.message)

      }

   }


  return (
    <Fragment>
      <PageHeader title={"Course Apply Form"} curPage={"Apply"} />
      <div style={{ marginBottom: "4%" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "90%", margin: "auto" }}
        >
          <div class="form-group mt-4">
            <h5
              style={{
                backgroundColor: "#f5f5f5",
                display: "block",
                padding: "5px 5px",
                color: "rgb(255, 9, 17)",
              }}
              for="exampleFormControlInput1"
            >
              Personal Information
            </h5>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <th>First Name*</th>
                  <input
                    type="string"
                    class="form-control"
                    {...register("firstName", { required: true })}
                    placeholder="firstName"
                  />
                  {errors.firstName && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-lg-3">
                  <th>Last Name*</th>
                  <input
                    class="form-control"
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>

                <div className="col-lg-3">
                  <th>Date Of Birth*</th>
                  <input
                    type="date"
                    class="form-control"
                    {...register("dateOfBirth", { required: true })}
                    placeholder="Date of Birth"
                  />
                  {errors.dateOfBirth && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-lg-3">
                  <th>Gender*</th>
                  <div class="form-check form-check-inline">
                    <label htmlFor="male">
                      <input
                        class="form-check-input"
                        {...register("Gender", { required: true })}
                        type="radio"
                        value="Male"
                        id="male"
                      />
                      Male
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label htmlFor="female">
                      <input
                        class="form-check-input"
                        {...register("Gender", { required: true })}
                        type="radio"
                        value="Female"
                        id="female"
                      />
                      Female
                    </label>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    {errors.Gender?.type === "required" && (
                      <span
                        style={{
                          color: "rgb(255, 9, 17)",
                          textAlign: "center",
                          marginLeft: "10px",
                          marginTop: "10px",
                        }}
                      >
                        Please Select one
                      </span>
                    )}
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-lg-4">
                  <th>Email Address*</th>
                  <input
                    type="Email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-lg-4">
                  <th>Contact No( Wattsapp )*</th>
                  <input
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter phone number"
                    {...register("whatsappNo", { required: true })}
                  />
                  {errors.whatsappNo && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-lg-4">
                  <th>Select Courses *</th>
                  <select
                    {...register("preferredCourse", { required: true })}
                    class="form-control"
                    id="exampleFormControlSelect1"
                    placeholder="Please select courses "
                  >
                    <option value="">Select Courses</option>
                    {courses.map((val) => {
                      return (
                        <>
                          <option value={val}>{val}</option>
                        </>
                      );
                    })}
                  </select>
                  {errors.preferredCourse && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <br />
                <br />
                <br />
                <div className="col-lg-4 mt-3">
                  <th>Home Address *</th>
                  <input
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Home Address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-lg-4 mt-3">
                  <th>City *</th>
                  <input
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="City"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-lg-4 mt-3">
                  <th>Nationality *</th>
                  <select
                    {...register("nationality", { required: true })}
                    class="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="">Select Nationality</option>
                    {countryList.map((val) => {
                      return (
                        <>
                          <option value={val}>{val}</option>
                        </>
                      );
                    })}
                  </select>
                  {errors.nationality && (
                    <span
                      style={{
                        color: "rgb(255, 9, 17)",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h5
                style={{
                  backgroundColor: "#f5f5f5",
                  display: "block",
                  padding: "5px 5px",
                  color: "rgb(255, 9, 17)",
                }}
                for="exampleFormControlInput1"
              >
                More Info
              </h5>
              <hr />
              <th htmlFor="exampleFormControlTextarea1">Any Other Query</th>
              <div class="form-group" style={{ width: "95%", margin: "auto" }}>
                <textarea
                  placeholder="Start Writing..."
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  {...register("otherQueries", { required: true })}
                ></textarea>
                {errors.otherQueries && (
                  <span
                    style={{
                      color: "rgb(255, 9, 17)",
                      textAlign: "center",
                      marginLeft: "10px",
                    }}
                  >
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-2">
                <th>How did you hear about us ? *</th>
                <div>
                  <div class="form-check form-check-inline">
                    <label htmlFor="banner">
                      <input
                        class="form-check-input"
                        {...register("sourceOfInfo", { required: true })}
                        type="radio"
                        value="Banner"
                        id="banner"
                      />
                      Banner
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <label htmlFor="social-media">
                      <input
                        class="form-check-input"
                        {...register("sourceOfInfo", { required: true })}
                        type="radio"
                        value="Social Media"
                        id="social-media"
                      />
                      Social Media
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <label htmlFor="call-sms">
                      <input
                        class="form-check-input"
                        {...register("sourceOfInfo", { required: true })}
                        type="radio"
                        value="Call/SMS"
                        id="call-sms"
                      />
                      Call/SMS
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <label htmlFor="through-a-friend">
                      <input
                        class="form-check-input"
                        {...register("sourceOfInfo", { required: true })}
                        type="radio"
                        value="Through a Friend"
                        id="through-a-friend"
                      />
                      Through a Friend
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <label htmlFor="youtube">
                      <input
                        class="form-check-input"
                        {...register("sourceOfInfo", { required: true })}
                        type="radio"
                        value="Youtube"
                        id="youtube"
                      />
                      Youtube
                    </label>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    {errors.sourceOfInfo?.type === "required" && (
                      <span
                        style={{
                          color: "rgb(255, 9, 17)",
                          textAlign: "center",
                          marginLeft: "10px",
                        }}
                      >
                        Please Select one
                      </span>
                    )}
                  </div>
                </div>

                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(255, 9, 17)",
              }}
              type="submit"
              class="btn btn btn-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
