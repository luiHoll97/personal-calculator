import { greet } from "./utils/greet";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}

export default App;
