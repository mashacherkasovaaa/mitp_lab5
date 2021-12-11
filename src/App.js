import "./App.css";
import React, {  useRef } from "react";

function App() {
  const button1 = useRef(null);
  const button2 = useRef(null);
  const button3 = useRef(null);
  const button4 = useRef(null);
  const button5 = useRef(null);
  const button7 = useRef(null);
  const button8 = useRef(null);
  const button9 = useRef(null);
  const button10 = useRef(null);
  const button11 = useRef(null);
  const button12 = useRef(null);
  const button13 = useRef(null);
  const button15 = useRef(null);

  const onButtonClick = button => {
    button.current.focus();
  };
  const click = str => {
    console.log("Click at rect ", str);
  };
  const onKeyboardClick = (e, up, down, left, right, str) => {
    (e === "ArrowRight" || e==="KeyD") && right && onButtonClick(right);
    (e === "ArrowLeft" || e==="KeyA") && left && onButtonClick(left);
    (e === "ArrowUp"|| e==="KeyW") && up && onButtonClick(up);
    (e === "ArrowDown" || e==="KeyS") && down && onButtonClick(down);
    e === "Enter" && click(str);
  };
  return (
    <div className={"grid-container"}>
      <div
        className={"post-1 rectangle"}
        onMouseMove={() => onButtonClick(button1)}
        onKeyDown={e =>
          onKeyboardClick(e.code, false, button4, false, button2, "1")
        }
        onClick={() => click("1")}
        tabIndex={1}
        ref={button1}
      />
      <div
        className={"post-2 rectangle"}
        onMouseMove={() => onButtonClick(button2)}
        onKeyDown={e =>
          onKeyboardClick(e.code, false, button5, button1, button3, "2")
        }
        onClick={() => click("2")}
        tabIndex={1}
        ref={button2}
      />
      <div
        className={"post-3 rectangle"}
        onMouseMove={() => onButtonClick(button3)}
        onKeyDown={e =>
          onKeyboardClick(e.code, false, button8, button2, false, "3")
        }
        tabIndex={1}
        ref={button3}
        onClick={() => click("3")}
      />
      <div
        className={"post-4 rectangle"}
        onMouseMove={() => onButtonClick(button4)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button1, button12, false, button5, "4")
        }
        tabIndex={1}
        ref={button4}
        onClick={() => click("4")}
      />
      <div
        className={"post-5 rectangle"}
        onMouseMove={() => onButtonClick(button5)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button2, button9, button4, button7, "5")
        }
        tabIndex={1}
        ref={button5}
        onClick={() => click("5")}
      />
      <div className={"post-6 display-none"} />
      <div
        className={"post-7 rectangle"}
        onMouseMove={() => onButtonClick(button7)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button2, button11, button5, button8, "6")
        }
        tabIndex={1}
        ref={button7}
        onClick={() => click("6")}
      />
      <div
        className={"post-8 rectangle"}
        onMouseMove={() => onButtonClick(button8)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button3, button11, button7, false, "7")
        }
        tabIndex={1}
        ref={button8}
        onClick={() => click("7")}
      />
      <div
        className={"post-9 rectangle"}
        onMouseMove={() => onButtonClick(button9)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button5, button13, button4, button10, "8")
        }
        tabIndex={1}
        ref={button9}
        onClick={() => click("8")}
      />
      <div
        className={"post-10 rectangle"}
        onMouseMove={() => onButtonClick(button10)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button2, false, button9, button11, "9")
        }
        tabIndex={1}
        ref={button10}
        onClick={() => click("9")}
      />
      <div
        className={"post-11 rectangle"}
        onMouseMove={() => onButtonClick(button11)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button7, button15, button10, false, "10")
        }
        tabIndex={1}
        ref={button11}
        onClick={() => click("10")}
      />
      <div
        className={"post-12 rectangle"}
        onMouseMove={() => onButtonClick(button12)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button4, false, false, button13, "11")
        }
        tabIndex={1}
        ref={button12}
        onClick={() => click("11")}
      />
      <div
        className={"post-13 rectangle"}
        onMouseMove={() => onButtonClick(button13)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button9, false, button12, button15, "12")
        }
        tabIndex={1}
        ref={button13}
        onClick={() => click("12")}
      />
      <div className={"post-14 display-none"} />
      <div
        className={"post-15 rectangle"}
        onMouseMove={() => onButtonClick(button15)}
        onKeyDown={e =>
          onKeyboardClick(e.code, button11, false, button13, false, "13")
        }
        tabIndex={1}
        ref={button15}
        onClick={() => click("13")}
      />
    </div>
  );
}

export default App;
