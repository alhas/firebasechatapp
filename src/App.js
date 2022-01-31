import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {


  return (
    <>
    
     <SignIn/>

      
    </>

  );
}

export default App;
