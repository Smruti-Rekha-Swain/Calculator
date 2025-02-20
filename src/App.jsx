import { useState } from "react";

function App() {
  const [output, setOutput] = useState(0);
  const operand = [];
  const operator = [];
  function number(inp) {}
  function oprt() {}
  function special() {}
  function clear() {}
  function backspace() {}
  function dec() {}
  function calculate() {}

  return (
    <>
      <div className="container flex-column w-50 d-flex align-items-center">
        <div className="row ">
          <div className="col">{output}</div>
        </div>

        <div className="row p-2">
          <div className="col-10  gap-1 justify-content-around d-flex flex-wrap">
            <button className="btn btn-outline-warning" onClick={clear}>
              C
            </button>
            <button className="btn btn-outline-warning" onClick={backspace}>
              B
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt(this.value)}
              value={"%"}
            >
              %
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt(this.value)}
              value={"/"}
            >
              /
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={7}
            >
              7
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={8}
            >
              8
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={9}
            >
              9
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt(this.value)}
              value={"*"}
            >
              *
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={4}
            >
              4
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={5}
            >
              5
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={6}
            >
              6
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt(this.value)}
              value={"-"}
            >
              -
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={1}
            >
              1
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={2}
            >
              2
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={3}
            >
              3
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt(this.value)}
              value={"+"}
            >
              +
            </button>

            <button className="btn btn-outline-warning" onClick={special}>
              +/-
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(this.value)}
              value={0}
            >
              0
            </button>
            <button className="btn btn-outline-danger" onClick={dec}>
              .
            </button>
            <button className="btn btn-outline-success" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
