import React, { Component } from "react";
import Detail from "./Detail";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyATarxbd0Qd2159WLhdTNuLKTghiFA0oTg",
  authDomain: "react-survey-33a90.firebaseapp.com",
  projectId: "react-survey-33a90",
  storageBucket: "react-survey-33a90.appspot.com",
  messagingSenderId: "834370789571",
  appId: "1:834370789571:web:3fb1607b61cff96f734276",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  // const app = initializeApp(firebaseConfig);
}
class container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      question: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
      isSubmited: false,
    };
  }
  DetailSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email });
    event.preventDefault();
  };
  questionSubmitHandler = (event) => {
    const question = {};
    question.q1 = event.target.q1.value;
    question.q2 = event.target.q2.value;
    question.q3 = event.target.q3.value;
    question.other = event.target.other.value;
    // const isSubmited = true;
    this.setState({ question });
    event.preventDefault();
    const database = firebase.database();
    database.ref("survey/" + this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
    });
  };
  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className=" container card mt-2   ">
            <h1 className="text-center text-primary ">
              welcome sourabh as survey
            </h1>
          </div>
        </div>
        {
          // this.state.isSubmited ? (
          //   <div className="card">
          //     {" "}
          //     <h1>thank you</h1>
          //   </div>
          // ) :
          this.state.name === null && this.state.email === null ? (
            <Detail submit={this.DetailSubmitHandler} />
          ) : (
            <Question submit={this.questionSubmitHandler} />
          )
        }
      </>
    );
  }
}

export default container;
