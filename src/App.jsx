import './App.css'
import AppRouter from './AppRouter';
import Sidebar from './components/Sidebar';

const App = () => {
  return(
    <div className='main-container'>
      <Sidebar/>
      <AppRouter/>
    </div>
  )
}

export default App;