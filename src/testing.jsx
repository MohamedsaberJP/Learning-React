import { useState } from "react";
import "./testing.css";

let Parent = () => {
  const [user, setuser] = useState(0);

  return (
    <>
      <h3>count is : {user}</h3>
      <Son text="1" change={setuser} />
      <Son text="2" change={setuser} />
      <Son text="3" change={setuser} />
      <hr />
      <Solo text="0" change={setuser} />
    </>
  );
};

let Son = (prop) => {
  return (
    <>
      <h2>hello from son {prop.text}</h2>
      <button onClick={() => prop.change((prev) => prev + 1)}>click me</button>
    </>
  );
};

let Solo = (prop) => {
  return (
    <>
      <h5>hello from son {prop.text}</h5>
      <Solo1 text={prop.text} change={prop.change} />
    </>
  );
};

let Solo1 = (prop) => {
  return (
    <>
      <button onClick={() => prop.change((prev) => prev + 1)}>increment</button>
      <button onClick={() => prop.change((prev) => prev - 1)}>decrement</button>
    </>
  );
};
export default function Allcounter() {
  return (
    <>
      <Parent />
    </>
  );
}
