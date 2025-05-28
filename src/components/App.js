import React, { useState } from "react";

const resultMap = {
  1: "Friends",
  2: "Love",
  3: "Affection",
  4: "Marriage",
  5: "Enemy",
  0: "Siblings",
};

const App = () => {
  const [boy, setBoy] = useState("");
  const [girl, setGirl] = useState("");
  const [answer, setAnswer] = useState("");

  function calculateRelationship() {
    let b = boy.toLowerCase();
    let g = girl.toLowerCase();
    let unique = "";

    for (let i of b) {
      if (!g.includes(i)) unique += i;
    }

    for (let i of g) {
      if (!b.includes(i)) unique += i;
    }

    let resultIndex = unique.length % 6;
    setAnswer(resultMap[resultIndex]);
  }

  return (
    <div>
      <h1>FLAMES APP...</h1>

      <input
        data-testid="input1"
        name="name1"
        placeholder="Enter first name"
        value={boy}
        onChange={(e) => setBoy(e.target.value)}
      />

      <input
        data-testid="input2"
        name="name2"
        placeholder="Enter second name"
        value={girl}
        onChange={(e) => setGirl(e.target.value)}
      />

      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate_relationship
      </button>

      <button
        data-testid="clear"
        name="clear"
        onClick={() => {
          setBoy("");
          setGirl("");
          setAnswer("");
        }}
      >
        Clear
      </button>

      <h3 data-testid="answer">{answer}</h3>
    </div>
  );
};

export default App;
