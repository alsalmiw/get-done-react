import logo from './logo.svg';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from './Pages/CreateAccount';
import './App.css';
import UserContext from './Context/UserContext';
import useUser from './Hooks/use-user';
import Navigation from './Components/Navigation';
import ModalContext from './Context/ModalContext';
import useModal from './Hooks/use-modal';


function App() {
  return (
  
    <UserContext.Provider value={useUser()}>
  
    <Container fluid className='p-0'>
    <ModalContext.Provider value={useModal()}>
      <Navigation />
      </ModalContext.Provider>
    </Container>
    
    </UserContext.Provider>
  );
}

export default App;
