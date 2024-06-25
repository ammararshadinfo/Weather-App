// import './App.css'
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";
export default function App() {
  let click = () => {
    console.log("clicking button");
  };
  return (
    <>
      {/* <h1>Material UI Sample</h1>
      <Button variant="contained" color="success" onClick={click}>
        Sample Button
      </Button>
      <br></br>
      <Button
        variant="contained"
        color="error"
        onClick={click}
        endIcon={<SendIcon />}
      >
        Delete Button
      </Button> */}
      <WeatherApp />
    </>
  );
}
