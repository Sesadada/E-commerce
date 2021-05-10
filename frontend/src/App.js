import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen"



const App = () => {
  return (

<Router>
  <Header />
  <main className='py-3'>
  <Container>
   <h1>Welcome to Witch Craft</h1>
     <HomeScreen />
  </Container>
  </main>
 <Footer />
</Router>

  );
}

export default App;
