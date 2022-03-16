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
import Personnel from './Pages/Personnel';


function App() {
  return (
  
    <UserContext.Provider value={useUser()}>
   <ModalContext.Provider value={useModal()}>
    <Container fluid className='p-0'>
   
      <Navigation />
     
    </Container>
     </ModalContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
