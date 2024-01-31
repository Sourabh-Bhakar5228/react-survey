import React from "react";

export default function Detail(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-5 m-auto ">
          <div className="m-3">
            <div className="card text-left">
              <div className="card-body">
                <form onSubmit={props.submit}>
                  <div className="form-group m-2">
                    <label htmlFor="">
                      <b>1:</b> Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Please Enter Your Name"
                      required
                    />
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="">
                      <b>2:</b> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Please Enter Your Email"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary  mt-3 m-3">
                    Next
                  </button>
                </form>
                <center>
                  <span className="badge rounded-pill bg-primary">1</span>
                  <span className="badge rounded-pill disabled text-black">
                    2
                  </span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
