import React from "react";

export default function Question(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-5 m-auto ">
          <div className="m-3">
            <div className="card text-left">
              <div className="card-body">
                <form onSubmit={props.submit}>
                  <div className="form-group">
                    <label htmlFor="">
                      <b>3:</b> What are currently Doing?
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="teacher"
                      name="q1"
                      autoComplete="off"
                      value="Teaching"
                    />{" "}
                    <label htmlFor="teacher"> Teaching</label>{" "}
                    <input
                      type="radio"
                      name="q1"
                      id="student"
                      autoComplete="off"
                      value="Student"
                    />{" "}
                    <label htmlFor="student"> Student</label>{" "}
                    <input
                      type="radio"
                      name="q1"
                      id="progrmmer"
                      autoComplete="off"
                      value="Programmer"
                    />{" "}
                    <label htmlFor="progrmmer"> Programmer</label>{" "}
                    <input
                      type="radio"
                      name="q1"
                      id="other"
                      autoComplete="off"
                      value="Other"
                    />{" "}
                    <label htmlFor="other"> Other</label> <br />
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      name="other"
                      autoComplete="off"
                      placeholder="Type here if not listed. "
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="">
                      <b>4:</b> Please rate of my work.
                    </label>
                    <br />
                    <input
                      type="radio"
                      name="q2"
                      id="poor"
                      autoComplete="off"
                      value="Poor"
                    />{" "}
                    <label htmlFor="poor">Poor</label>{" "}
                    <input
                      type="radio"
                      name="q2"
                      id="good"
                      autoComplete="off"
                      value="Good"
                    />{" "}
                    <label htmlFor="good">Good</label>{" "}
                    <input
                      type="radio"
                      name="q2"
                      id="excellent"
                      value="Excellent"
                      autoComplete="off"
                    />{" "}
                    <label htmlFor="excellent">Excellent</label>{" "}
                  </div>
                  <div className="form-control">
                    <label htmlFor="">
                      <b>5:</b> Write your review here.
                    </label>
                    <textarea
                      name="q3"
                      cols="10"
                      rows="3"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary  mt-3 m-3  ">
                    Save
                  </button>
                </form>
                <center>
                  <span className="badge rounded-pill disabled text-black">
                    1
                  </span>
                  <span className="badge rounded-pill bg-primary">2</span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
