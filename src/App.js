import "./App.css";
import Dashboard from "./components/dashboad";
import Chatapp from "./components/Personalchat/app";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#000000",
          height: "100vh",
        }}
      >
        <Dashboard />
      </div>
      {/* <div>
        <Chatapp />
      </div> */}
    </div>
  );
}

export default App;
