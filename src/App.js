import { useState } from "react";
import "./App.css";
import Navbar from "./compontnts/Navbar";
import TextForm from "./compontnts/TextForm";
import Alert from "./compontnts/Alert";
import About from "./compontnts/About";
import {
  Routes,
  BrowserRouter as RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(":Dark mode has been disabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(37, 150, 190)";
      showAlert(":Dark mode has been enabled", "success");
    }
  };
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <RouterProvider>
        <Navbar title="TEXTUTILS" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3"></div>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse below"
                mode={Mode}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </RouterProvider>
    </>
  );
}

export default App;
