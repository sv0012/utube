import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import './_app.scss';

function App() {


  const [sidebar, setSidebar] = useState(false);
  const handleToggleSidebar = ()=>setSidebar(value=>!value);

  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar} />
    <div className="app__container">
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      <Container fluid className="app__main">
        <HomeScreen />
      </Container>

    </div>
    </>
    
    
  )
}

export default App;
