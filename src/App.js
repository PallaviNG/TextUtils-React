import "./App.css";
import "../src/css/main.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alerts from "./Components/Alerts";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(
    {
      message: "Light mode has been enabled",
      type: "success",
    },
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  );

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(21, 67, 96)";
      document.title = "TextUtils- Light Mode";
      showAlert("Dark Mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Dark Mode";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        darkColors={["#0B5345", "#784212", "#B7950B"]}
      />

      <Alerts alert={alert} />
      <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
