import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
import MyComponentClass from "./MyComponentClass";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunctional from "./EventPracticeFunctional";

function App() {
  const testStr = "TESTING";
  const testStr2 = "TESTING AGAIN";

  const conditionalTest = "react";
  const undefinedTest = undefined;

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <Fragment>
      <h1>{testStr}</h1>
      <h2>{testStr2}</h2>

      <div>
        {conditionalTest === "react" ? (
          <h1>it is react</h1>
        ) : (
          <h2>it is NOT REACT</h2>
        )}
      </div>

      <div>{conditionalTest === "react" && <h1>it is react</h1>}</div>

      <div style={style}>{undefinedTest || "undefined test"}</div>

      <div className="react">testing</div>
      {/*THIS IS HOW YOU WRITE COMMENTS IN REACT*/}

      <input></input>
      <br></br>
      <input />
      {/*using component properties*/}
      <br />
      <MyComponent />
      <br />
      <MyComponent2 name="kcarollee">CHILD OF SECOND COMPONENT</MyComponent2>
      <br />
      <MyComponent3 name="thirdcomp" favoriteNumber={42}></MyComponent3>
      <br />
      <MyComponentClass name="4thcomp" favoriteNumber={12}>
        CHILDREN
      </MyComponentClass>
      <br />
      <Counter></Counter>
      <Say />

      <EventPractice />
      <EventPracticeFunctional />
    </Fragment>
  );
}

export default App;
