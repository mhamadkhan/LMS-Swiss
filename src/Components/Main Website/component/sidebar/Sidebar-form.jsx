import { useForm } from "react-hook-form";
const Title = "Quick Contact";
const Title2 = "Need Help?";
const desc="Please Feel Free To Contact Us. We Will Get Back To You With 1-2 Business Days."
const mail="business@swissbraintec.ch";
const num="+41 71 222 41 02"

const SidebarForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" widget widget-category">
        <div className="card">
          <div>
            <h4
              style={{
                color: "rgb(255, 9, 17)",
                textAlign: "center",
                padding: "4px",
              }}
            >
              {Title}
            </h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group ">
              <input
                style={{ width: "90%", margin: "auto" }}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name:"
                {...register("Name", { required: true })}
              />
              {errors.Name && (
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
              <input
                type="email"
                style={{ width: "90%", margin: "auto" }}
                class="form-control mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email:"
                {...register("Email", { required: true })}
              />
              {errors.Email && (
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
              <input
                style={{ width: "90%", margin: "auto" }}
                class="form-control mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone:"
                {...register("Phone", { required: true })}
              />
              {errors.Phone && (
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
              <input
                style={{ width: "90%", margin: "auto" }}
                class="form-control mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Subject:"
                {...register("Subject", { required: true })}
              />
              {errors.Subject && (
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
              <select
                required
                style={{ width: "90%", margin: "auto" }}
                class="form-select mt-2"
                aria-label="Default select example"
                {...register("select option")}
              >
                <option value="Financial Planning" selected>
                  Financial Planning
                </option>
                <option value="Software & Research">Software & Research</option>
                <option value="Bussiness Services">Bussiness Services</option>
                <option value="Quality Resourcing">Quality Resourcing</option>
                <option value="Travel and Aviation">Travel and Aviation</option>
                <option value="Healthcare Services">Healthcare Services</option>
              </select>

              <textarea
                style={{ width: "90%", margin: "auto" }}
                class="form-control mt-2 mb-3"
                id="textAreaExample1"
                rows="4"
                placeholder="Messege:"
                {...register("Messege", { required: true })}
              ></textarea>
              {errors.Messege && (
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

              <div style={{ textAlign: "center" }}>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "rgb(255, 9, 17)",
                  }}
                  type="submit"
                  class="btn btn btn-lg mb-3"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mt-5 mb-4">
        <div style={{padding:"5px 39px"}}>
          <h3
            style={{
              color: "rgb(255, 9, 17)",
              fontWeight:"bolder",
              padding: "4px",
            }}
          >
            {Title2}
          </h3>
          <p style={{fontSize:"20px"}}>{desc}</p>
          <p style={{fontSize:"20px"}}>{mail}</p>
          <p style={{fontSize:"20px"}}>{num}</p>
          

        </div>
      </div>
    </>
  );
};

export default SidebarForm;
