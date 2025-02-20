import { useState } from "react";

function App() {
  const [output, setOutput] = useState(""); //create another state variable with const[operator,setOperater]=useState()
  const operand = [];
  const operator = [];

  function number(inp) {
    if (output == "" && inp == 0) {
      return;
    }
    setOutput(output * 10 + inp);
    // operand[0] = output * 10 + inp;
    // inp = operand[0];
  }

  function oprt(op) {
    if (output === "") {
      return;
    }
    if (typeof output == "number") {
      setOutput(output + "" + op);
    }
    const last = output.toString().charAt(output.length-1);
    const lastChar = ["%", "*", "-", "+","/"].includes(last);
    if (lastChar) {
      setOutput(output.slice(0, -1) + op);
    }
  }

  function special() {}
  function clear() {
    setOutput("");
  }
  function backspace() {}
  function dec() {}
  function calculate() {}

  return (
    <>
      <div className="container flex-column w-50 d-flex align-items-center">
        <div className="row">
          <div className="col">{output == "" ? 0 : output}</div>
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
              onClick={() => oprt("%")}
            >
              %
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt("/")}
            >
              /
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => number(7)}
            >
              7
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(8)}
            >
              8
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(9)}
            >
              9
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt("*")}
            >
              *
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => number(4)}
            >
              4
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(5)}
            >
              5
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(6)}
            >
              6
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt("-")}
            >
              -
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => number(1)}
            >
              1
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(2)}
            >
              2
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(3)}
            >
              3
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => oprt("+")}
            >
              +
            </button>

            <button className="btn btn-outline-warning" onClick={special}>
              +/-
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => number(0)}
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
