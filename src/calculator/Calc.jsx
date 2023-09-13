import { Button, Switch, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/css/Calc.css";
import { styled } from "@mui/material/styles";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
const keys = [
  {
    label: "AC",
    value: "C",
  },
  { label: "%", value: "%" },
  { label: "⌫", value: "⌫" },
  { label: "÷", value: "/" },
  {
    label: "7",
    value: "7",
  },

  {
    label: "8",
    value: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    label: "×",
    value: "*",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "6",
    value: "6",
  },

  {
    label: "﹣",
    value: "-",
  },
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "+",
    value: "+",
  },
  {
    label: "00",
    value: 10,
  },
  {
    label: "0",
    value: "0",
  },
  {
    label: ".",
    value: ".",
  },
  {
    label: "=",
    value: "=",
  },
];

function Calc() {
  const [current, setCurrent] = useState("");
  const [color, setColor] = useState(true);
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");
  const [equal, setEqual] = useState("");

  function compute() {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "/":
        result = eval(previousNumber / currentNumber);
        break;
      case "*":
        result = eval(previousNumber * currentNumber);
        break;
      case "+":
        result = eval(previousNumber + currentNumber);
        break;
      case "-":
        result = eval(previousNumber - currentNumber);
        break;
      case "%":
        result = eval(previousNumber % currentNumber);
        break;
      default:
        return;
    }

    return result;
  }

  function operation(e) {
    if (e === "." && current.includes(".")) return;
    if (e === ".") {
      setCurrent(current + e);
    }
    if (e === "." && current.includes(".")) {
      return;
    }
    if (
      (e == "%" || e == "/" || e == "*" || e == "-" || e == "+") &&
      current[current.length - 1] == "."
    ) {
      return;
    }

    if (
      e === "0" ||
      e === "1" ||
      e === "2" ||
      e === "3" ||
      e === "4" ||
      e === "5" ||
      e === "6" ||
      e === "7" ||
      e === "8" ||
      e === "9"
    ) {
      setCurrent(current + parseInt(e));

      if (equal == "=") {
        setCurrent(e);
        setEqual("");
      }
    }

    if (e === 10) {
      setCurrent(current + "00");
    }
    if (e === "⌫") {
      setCurrent(String(current).slice(0, -1));
    }
    if (e === "C") {
      setCurrent("");
      setOperations("");
      setPrevious("");
    }
    if (e === "-" || e === "+" || e === "/" || e === "*" || e === "%") {
      if (current === "" && e === "-") {
        setCurrent(current + e);
      }
      if (
        ["+", "-", "/", "*", "%"].includes(e) &&
        ["+", "-", "/", "*", "%"].includes(current.charAt(current.length - 1))
      )
        return;
      Mainoperation(e);
    }
    if (e === "=") {
      let value = compute();

      if (value === undefined || value == null) return;
      setCurrent(value);
      setPrevious("");
      setOperations("");
      setEqual("=");
    }
  }
  function Mainoperation(e) {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(e);
  }

  const handleKeyPress = (event) => {
    let e = event.key;
    if (e === "." && current.includes(".")) return;
    if (e === ".") {
      setCurrent(current + e);
    }

    if (e === "." && current.includes(".")) {
      return;
    }
    if (
      (e == "%" || e == "/" || e == "*" || e == "-" || e == "+") &&
      current[current.length - 1] == "."
    ) {
      return;
    }

    if (
      e === "0" ||
      e === "1" ||
      e === "2" ||
      e === "3" ||
      e === "4" ||
      e === "5" ||
      e === "6" ||
      e === "7" ||
      e === "8" ||
      e === "9"
    ) {
      setCurrent(current + parseInt(e));

      if (equal == "=") {
        setCurrent(e);
        setEqual("");
      }
    }
    if (e === "-" || e === "+" || e === "/" || e === "*" || e === "%") {
      if (current == "" && e == "-") {
        setCurrent(current + e);
      }
      if (
        ["+", "-", "/", "*", "%"].includes(e) &&
        ["+", "-", "/", "*", "%"].includes(current.charAt(current.length - 1))
      )
        return;

      Mainoperation(e);
    }

    if (e === "Backspace") {
      setCurrent(String(current).slice(0, -1));
    }

    if (e === "Enter") {
      let value = compute();

      if (value === undefined || value == null) return;
      setCurrent(value);
      setPrevious("");
      setOperations("");
      setEqual("=");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return (
    <div>
      <div className="calculator">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div
                className="screen"
                style={
                  color
                    ? { backgroundColor: "#1e272e" }
                    : { backgroundColor: "whitesmoke" }
                }
              >
                <div className="brightness">
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    defaultChecked
                    onClick={() => setColor(!color)}
                  />{" "}
                </div>
                <Typography
                  variant="h6"
                  sx={[
                    color ? { color: "white" } : { color: "black" },
                    {
                      fontWeight: 700,
                      paddingTop: "2rem",
                      width: "20rem",
                      ml: "3rem",
                      overflowX: "scroll",
                    },
                  ]}
                >
                  {previous} {operations}
                </Typography>
                <Typography
                  sx={[
                    color ? { color: "white" } : { color: "black" },
                    ,
                    {
                      overflowX: "scroll",
                      fontWeight: 700,
                      width: "20rem",
                      ml: "3rem",
                      fontSize: "2rem",
                      paddingTop: "0.6rem",
                      "@media (max-width: 370px)": {
                        fontSize: "1.6rem",
                      },
                    },
                  ]}
                >
                  {current}
                </Typography>
              </div>
              <div className="keypad">
                {keys.map((item) => {
                  return (
                    <Button
                      onClick={() => operation(item?.value)}
                      variant="contained"
                      sx={
                        item.label == "="
                          ? [
                              color
                                ? { backgroundColor: "#485460", color: "black" }
                                : {
                                    backgroundColor: "black",
                                    color: "white",
                                  },
                              {
                                width: "6.24rem",
                                height: "4rem",
                                borderRadius: 0,

                                fontWeight: 700,
                                fontSize: "1.5rem",
                                "@media (max-width: 415px)": {
                                  width: "5.25rem",
                                  height: "3.4rem",
                                },
                                "@media (max-width: 370px)": {
                                  width: "6rem",
                                  height: "2.45rem",
                                },
                              },
                            ]
                          : [
                              color
                                ? { backgroundColor: "#d2dae2", color: "black" }
                                : { backgroundColor: "white", color: "black" },
                              {
                                width: "6.24rem",
                                height: "4rem",
                                borderRadius: 0,

                                fontWeight: 700,
                                fontSize: "1.5rem",
                                "@media (max-width: 415px)": {
                                  width: "5.25rem",
                                  height: "3.4rem",
                                },
                                "@media (max-width: 370px)": {
                                  width: "6rem",
                                  height: "2.45rem",
                                },
                              },
                            ]
                      }
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
