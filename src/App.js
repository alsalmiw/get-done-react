import logo from './logo.svg';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from './Pages/CreateAccount';
import './App.css';
import UserContext from './Context/UserContext';
import useUser from './Hooks/use-user';
import Navigation from './Components/Navigation';


function App() {
  return (
  
    <UserContext.Provider value={useUser()}>
  
    <Container fluid className='p-0'>
      <Navigation />
    </Container>
    
    </UserContext.Provider>
  );
}

export default App;
