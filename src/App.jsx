import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView";
import Todo from "./Todo";
import Navbar from "./Navbar";
import ProfileCard from "./assets/Profilecard";
import store from "./store";
import { Provider } from "react-redux";
const Profilelist = {
  name: "JEEVANANTHAN M",
  role: "AI&DS Trainer",
  
  mobile: 9809890980,
  address: "D.No: 23/234,Saraswathi Nagar,Coimbatore",
};

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    {/* //     <Route path="/todo" element={<Todo />} /> */}
    //     <Route path="/profilecard" element={<ProfileCard profile={Profilelist}/>} />
    //     <Route path="/gridview" element={<GridView />} />

    <Route 
    path="/reduxcounter"
    element={
      <Provider store={store}>
        <Todo/>
      </Provider>
    }
    />
      </Routes>
     </BrowserRouter>
 
    
  );
}

export default App;
