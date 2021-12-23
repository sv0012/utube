import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import SearchScreen from "./screens/SearchScreen";
import SubscriptionsScreen from "./screens/subscriptionsScreen/SubscriptionsScreen";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import './_app.scss';

const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const handleToggleSidebar = ()=>setSidebar(value=>!value);

  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar} />
    <div className="app__container">
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      <Container fluid className="app__main">
        {children}
      </Container>

    </div>
    </>
  )


}





function App() {

const { accessToken, loading } = useSelector(state => state.auth)

const history = useHistory()

useEffect(() => {
   if (!loading && !accessToken) {
      history.push('/auth')
   }
}, [accessToken, loading, history])


  return (
    <Switch>
         <Route path='/' exact>
            <Layout>
               <HomeScreen />
            </Layout>
         </Route>

         <Route path='/auth'>
            <LoginScreen />
         </Route>

         <Route path='/search/:query'>
            <Layout>
               <SearchScreen />
            </Layout>
         </Route>

         <Route path='/watch/:id'>
            <Layout>
               <WatchScreen />
            </Layout>
         </Route>

         <Route path='/feed/subscriptions'>
            <Layout>
               <SubscriptionsScreen />
            </Layout>
         </Route>

         <Route path='/channel/:channelId'>
            <Layout>
               <ChannelScreen />
            </Layout>
         </Route>

         <Route>
            <Redirect to='/' />
         </Route>
      </Switch>
    
    
    
  )
}

export default App;
