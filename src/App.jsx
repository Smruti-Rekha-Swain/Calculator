import { useState } from "react";

function App() {
  const [output, setOutput] = useState("");

  function number(inp) {
    if (output == "" && inp == 0) {
      return;
    }
    setOutput(output + inp);
  }

  function oprt(op) {
    if (output === "") {
      return;
    }
    const last = output.toString().charAt(output.length - 1);
    const lastChar = ["%", "*", "-", "+", "/"].includes(last);
    if (lastChar) {
      setOutput(output.slice(0, -1) + op);
    } else setOutput(output + op);
  }

  function special() {
    const last = output.at(-1);
    if (!isDigit()) {
      switch (last) {
        case "-":
          setOutput(output.slice(0, -1) + "+");
          break;
        case "+":
          setOutput(output.slice(0, -1) + "-");
          break;
        default:
          setOutput(output + "-");
      }
    } else {
      // Place a "-" at the start of the current number and NOT at the start of the output

    }
  }

  function clear() {
    setOutput("");
  }

  function backspace() {
    if (output === "") return;
    setOutput(output.slice(0, -1));
  }

  function dec() {
    if (output === "") {
      setOutput(output + "0.");
      return;
    }

    let i = output.length - 1;
    // This loop will traverse the string backwards to check if the current number is already decimal or not.
    while (isDigit(output.at(i)) && i >= 0) {
      i--;
    }
    // Found the current number as decimal and do nothing.
    if (output.at(i) == ".") return;
    // Check that the last character is an operator and append decimal after a zero.
    else if (!isDigit()) setOutput(output + "0.");
    // Here conclude that the current number is integer and we can convert it into decimal.
    else setOutput(output + ".");
  }

  function calculate() {
    if (output === "") return;
    setOutput(eval(output).toString());
  }

  function isDigit(d = output.at(-1), skipDot = false) {
    try {
      return typeof eval(d) == "number";
    } catch (error) {
      return false || skipDot;
    }
  }

  if (output === "0") setOutput("");

  return (
    <>
      <div className="container d-flex">
        <div className="col-2 offset-3 w-50 border border-3 px-3 mt-5">
          <div className="row my-1 border border-2">
            <div className="col text-end overflow-hidden">
              {output == "" ? 0 : output}
            </div>
          </div>
          <div className="row justify-content-around gap-3">
            <button className="btn btn-outline-warning col" onClick={clear}>
              C
            </button>
            <button className="btn btn-outline-warning col" onClick={backspace}>
              B
            </button>
            <button
              className="btn btn-outline-secondary col"
              onClick={() => oprt("%")}
            >
              %
            </button>
            <button
              className="btn btn-outline-secondary col"
              onClick={() => oprt("/")}
            >
              /
            </button>
          </div>
          <div className="row justify-content-around gap-3 mt-3">
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(7);
              }}
            >
              7
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(8);
              }}
            >
              8
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(9);
              }}
            >
              9
            </button>
            <button
              className="btn btn-outline-secondary col"
              onClick={() => oprt("*")}
            >
              *
            </button>
          </div>
          <div className="row justify-content-around gap-3 mt-3">
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(4);
              }}
            >
              4
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(5);
              }}
            >
              5
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(6);
              }}
            >
              6
            </button>
            <button
              className="btn btn-outline-secondary col"
              onClick={() => oprt("-")}
            >
              -
            </button>
          </div>
          <div className="row justify-content-around gap-3 mt-3">
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(1);
              }}
            >
              1
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(2);
              }}
            >
              2
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(3);
              }}
            >
              3
            </button>
            <button
              className="btn btn-outline-secondary col"
              onClick={() => oprt("+")}
            >
              +
            </button>
          </div>
          <div className="row justify-content-around gap-3 mt-3 mb-1">
            <button className="btn btn-outline-warning col" onClick={special}>
              +/-
            </button>
            <button
              className="btn btn-outline-primary col"
              onClick={() => {
                number(0);
              }}
            >
              0
            </button>
            <button className="btn btn-outline-danger col" onClick={dec}>
              .
            </button>
            <button className="btn btn-outline-success col" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
