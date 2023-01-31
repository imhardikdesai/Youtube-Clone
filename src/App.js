import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Upnav from "./components/UpNav/Upnav";
import Slidebar from "./components/Slidebar/Slidebar"
import YTState from "./context/YtState";

function App() {
  return (
    <YTState>
      <div className="App">
        <Navbar />
        <div className="containr-fluid" id="section">
          <Slidebar />
          <Upnav />
        </div>
      </div>
    </YTState>
  )
}

export default App;
