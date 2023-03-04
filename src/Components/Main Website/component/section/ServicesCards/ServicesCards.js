// import './ServicesCards.css'

export default ()=>{

    //  IT Trainings
    //  Marketing Services
    //  Business Consulting

    return(
      <>
<div className="container mt-5 mb-3">
    <div className="row">
        <div style={{backgroundColor:'B8F0A8'}} className="col-md-4">
            {/* Card 1  */}
            <div  className="card p-3 mb-2">
                <div style={{backgroundColor:'B8F0A8'}} className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                        <div className="ms-2 c-details">
                            <h3  className="mb-0">Project Planning  </h3> 
                        </div>
                    </div>
      
                </div>
                <div className="mt-5">
              
          
                    <p style={{textAlign:'justify'}} >Planning a project first involves determining its needs and the functionality that our customer desires.</p>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div className="mt-3"> <span className="text1">32 Applied <span className="text2">of 50 capacity</span></span> </div> */}
                    </div>
                </div>
            </div>
        </div>
         {/* Card 2 */}
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-dribbble"></i> </div>
                        <div className="ms-2 c-details">
                            <h3 className="mb-0">Calls for a Meeting</h3> 
                        </div>
                    </div>
                    <div className="badge"> <span>Product</span> </div>
                </div>
                <div className="mt-5">
                    {/* <h3 className="heading">Junior Product<br/>Designer-Singapore</h3> */}
                    <p> Following thorough preparation, we seek meetings with both our clients and the developer team.  </p>
                    <div className="mt-5">
                        <div className="progress">
                            <div   className="progress-bar" role="progressbar" style={{width: "100%",color:'#FF0911'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div className="mt-3"> <span className="text1">42 Applied <span className="text2">of 70 capacity</span></span> </div> */}
                    </div>
                </div>
            </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                        <div className="ms-2 c-details">
                            <h3 className="mb-0">Start Working</h3> 
                        </div>
                    </div>
                    <div className="badge"> <span>Design</span> </div>
                </div>
                <div  className="mt-5">
                    {/* <h3 className="heading">Software Architect <br/>Java - USA</h3> */}
                    <p>The last stage is to begin working on the project and allocate various duties to various stakeholders.  </p>
                    <div className="mt-5">
                        <div className="progress">
                            <div  className="progress-bar" role="progressbar" style={{width: "100%",color:'#FF0911'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </>

    )
}