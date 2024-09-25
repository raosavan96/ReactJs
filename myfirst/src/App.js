import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Appbar from "./Component/Navbar/Appbar";
// import Context from "./Component/Hooks/Context/Context";
// import Learn from "./Component/ChaiWithCode/Learn";
// import Api from "./Component/Api/Api";
// import Mui from "./Component/Mui/Mui";

// import RouterP from "./Component/Prectice/Router/RouterP";

// import UseEffect from "./Component/Hooks/UseEffect/UseEffect";
// import UseStateHook from "./Component/Hooks/UseState/UseState";
// import Css from "./Component/Css/Css.jsx";
// import Props from "./Component/Props/Props";
// import Form from "./Component/Form/Form";
import Todo from "./Component/Projects/Todo/Todo";
import Ltodo from "./Component/Todo/Todo";
import Home from "./Component/Home";
import PassGGrty from "./Component/ChaiWithCode/Projects/PassGGrty";
import UseRef from "./Component/Hooks/UseRef/UseRef";
// import Data from "./Component/Data/Data";
import UseState from "./Component/Hooks/UseState/UseState";
import UseEffect from "./Component/Hooks/UseEffect/UseEffect";
import UseReducer from "./Component/Hooks/UseReducer/UseReducer";
import UseContext from "./Component/Hooks/useContext/UseContext";
import UseContextApi from "./Component/Hooks/useContextApi/UseContextApi";
import UseCallBack from "./Component/Hooks/Usecallback/UseCallBack";
import Usememo from "./Component/Hooks/Usememo/Usememo";
import Sign from "./Component/Projects/Signin/Sign";
import PassGenPre from "./Component/ChaiWithCode/Projects/PassGenPre";
import Weather from "./Component/Projects/Weather/Weather";
import BackColor from "./Component/BackColor/BackColor";
// import Router from "./Component/Navbar/Navbar";
// import CurrencyInfo from "./Component/Projects/CurrencyInfo/CurrencyInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="learntodo" element={<Ltodo />} />
          <Route path="/password" element={<PassGGrty />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usecontextapi" element={<UseContextApi />} />
          <Route path="/usememo" element={<Usememo />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/passgen" element={<PassGenPre />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/usecallback" element={<UseCallBack />} />
          <Route path="/bgcolor" element={<BackColor />} />
        </Routes>
      </BrowserRouter>

      {/* <Css /> */}
      {/* <Props /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffect /> */}
      {/* <Form /> */}
      {/* <Todo /> */}
      {/* <Data /> */}
      {/* <Router /> */}
      {/* <RouterP /> */}
      {/* <Mui /> */}
      {/* <Learn /> */}
      {/* <Api /> */}
      {/* <Context /> */}
    </>
  );
}

export default App;
