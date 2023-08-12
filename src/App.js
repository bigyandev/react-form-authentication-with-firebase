
import './App.css';
import MainForm from './components/MainForm';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <>
    <AuthProvider>
    <MainForm />
    </AuthProvider>
    </>
  )
    
}

export default App;
