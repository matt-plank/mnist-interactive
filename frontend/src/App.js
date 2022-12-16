import DrawingArea from "./components/drawingArea/drawingArea";
import NavBar from "./components/navBar/navBar";
import Prediction from "./components/prediction/prediction";

function App() {
  return (
    <>
      <NavBar />

      <div className="wrapper">
        <DrawingArea />
        <Prediction />
      </div>
    </>
  );
}

export default App;
