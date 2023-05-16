import { useState } from "react";
import Cobject from "./Cobject";
import Card from "./Card";
const App = () => {
  const [initial, update] = useState(Cobject);

  const Mains = (names) => {
    const vals = Cobject.filter((elm) => {
      return elm.category === names;
    });
    update(vals);
  };

  return (
    <>
      <div className="container">
        <button
          className="btn btn-warning"
          onClick={() => {
            Mains("Chicken Briyani");
          }}
        >
          Chicken Briyani
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            Mains("Chicken Fry");
          }}
        >
          Chicken Fry
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            Mains("Fish Fry");
          }}
        >
          Fish Fry
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            Mains("Ice Cream");
          }}
        >
          Ice Cream
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            Mains("South Indian");
          }}
        >
          South Indian
        </button>
      </div>
      <br /><br />

<Card item={initial}/>

    </>
  );
};

export default App;
