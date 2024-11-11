import Home from "./pages/Home";
import Chat from "./pages/Chat";
import {Routes,Route} from "react-router-dom";
import UserContextProvider from "./context/UserContext";

function App() {
  

  return (
   
    <UserContextProvider>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact  path="/chat" element={<Chat />} />
     </Routes>
     </UserContextProvider>
    
   
  )
}

export default App
