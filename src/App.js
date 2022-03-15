import logo from './logo.svg';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from './Pages/CreateAccount';
import './App.css';
import Navigation from './Components/Navigation';


function App() {
  return (
  
    <Container fluid className='p-0'>
      <Navigation />
    </Container>
    
    
  );
}

export default App;
