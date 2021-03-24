import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/Badge";

function App() {
  return (
    <div className="App">
      <WarningSign text="no emotions allowed!" />
      <MyBadge color="dark" text="be a robot" />
    </div>
  );
}

export default App;
