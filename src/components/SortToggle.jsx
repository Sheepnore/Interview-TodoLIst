import { Switch } from "@mui/material";
import "../styles/SortToggle.css";

function SortToggle() {
  return (
    <div className="SortToggle">
      <p>Move Done Things to the End?</p>
      <Switch></Switch>
    </div>
  );
}
export default SortToggle;
