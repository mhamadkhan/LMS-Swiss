import React from "react";
import { useForm } from "react-hook-form";
import { Fragment } from "react";
import PageHeader from "../component/layout/pageheader";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Fragment >
     <PageHeader title={'Course Apply Form'} curPage={'Apply'} />
    <div style={{marginBottom:'4%'}} >
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
                  required
                  class="form-control"
                  {...register("firstName")}
                  placeholder="firstName"
                />
              </div>
              <div className="col-lg-3">
                <th>Last Name*</th>
                <input
                  required
                  class="form-control"
                  {...register("LastName")}
                  placeholder="Last Name"
                />
              </div>
              <div className="col-lg-3">
                <th>Date Of Birth*</th>
                <input
                  required
                  type="date"
                  class="form-control"
                  {...register("DateOfBirth")}
                  placeholder="Date of Birth"
                />
              </div>
              <div className="col-lg-3">
                <th>Gender*</th>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="male"
                    value="male"
                    {...register("male")}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="femal"
                    value="female"
                    {...register("female")}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Female
                  </label>
                </div>
                <br />
                <br />
                <br />
              </div>
              <div className="col-lg-4">
                <th>Email Address*</th>
                <input
                  required
                  type="Email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                  {...register("email")}
                />
              </div>
              <div className="col-lg-4">
                <th>Contact No( Wattsapp )*</th>
                <input
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter phone number"
                  {...register("wattsapp No")}
                />
              </div>
              <div className="col-lg-4">
                <th>Alternate Contact No</th>
                <input
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter alternate phone number"
                  {...register("Contact No")}
                />
              </div>
              <br />
              <br />
              <br />
              <div className="col-lg-4 mt-3">
                <th>Home Address *</th>
                <input
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Home Address"
                  {...register("homeAddress")}
                />
              </div>
              <div className="col-lg-4 mt-3">
                <th>City *</th>
                <input
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="City"
                  {...register("city")}
                />
              </div>
              <div className="col-lg-4 mt-3">
                <th>Nationality *</th>
                <select
                  required
                  {...register("country")}
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                </select>
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
                required
                placeholder="Start Writing..."
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                {...register("messege")}
              ></textarea>
            </div>
            <div className="mt-2">
              <th>How did you hear about us ? *</th>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  {...register("banner")}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Banner
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  {...register("Social Media")}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Social Media
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  {...register("Call / SMS")}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Call / SMS
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  {...register("Through a Friend")}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Through a Friend
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  {...register("YouTube")}
                />
                <label class="form-check-label" for="inlineRadio1">
                  YouTube
                </label>
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div style={{textAlign:"end"}}>
          <button
            style={{
              color: "white",
              backgroundColor: "rgb(255, 9, 17)",
              width: "20%",
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
