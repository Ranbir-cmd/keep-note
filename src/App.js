import "./App.css";
import Home from "./components/Home";
import DataProvider from "./components/context/DataProvider";

function App() {
  return (
    <div>
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
