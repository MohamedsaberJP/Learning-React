import { useState } from "react";
import "./tic.css";

export let Game = () => {
  let [winner, setwinner] = useState("");
  let [role, setrole] = useState(true);
  let [items, setitems] = useState(Array(9).fill(""));
  let [history, sethistory] = useState([]);
  let [turns, setturns] = useState([]);
  // find winner
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let setval = (el, id) => {
    if (el !== "" || winner !== "") return;

    // add new move
    let value = role ? "X" : "O";
    let new_items = [...items];
    new_items[id] = value;
    setitems(new_items);

    let all = items.filter((e) => e !== "");
    // add move to other movies
    setturns((prev) => [...prev.slice(0, all.length), id + 1]);

    // set all moves in array of all movies
    sethistory((prev) => [...prev.slice(0, all.length), new_items]);

    // check states of winning and console it if there is a winner
    let founded = win.find(
      (e) =>
        new_items[e[0]] === new_items[e[1]] &&
        new_items[e[1]] === new_items[e[2]] &&
        new_items[e[2]] !== "",
    );
    // console.log(founded);
    if (founded) {
      setwinner(value);
    }

    // change the role of player
    setrole((prev) => !prev);
  };

  function gostart() {
    setwinner("");
    setrole(true);
    sethistory([]);
    setturns([]);
    setitems(Array(9).fill(""));
  }

  // control showing movies in items
  function handelshow(id) {
    let pp = [...history[id]];
    setitems(pp);
    setwinner("");
    setrole((id + 1) % 2 === 0);
  }

  return (
    <>
      <h3>
        {winner === ""
          ? `next player : ${role ? "X" : "O"}`
          : `winner is ${winner}`}
      </h3>
      <ul className="container">
        {items.map((e, i) => {
          return (
            <button key={i} className="btn" onClick={() => setval(e, i)}>
              {e}
            </button>
          );
        })}
      </ul>
      <ol>
        <li onClick={gostart}>go to game start</li>
        {turns.map((el, i) => {
          return (
            <li key={i} onClick={() => handelshow(i)}>
              go to move #{i + 1}
            </li>
          );
        })}
      </ol>
    </>
  );
};
