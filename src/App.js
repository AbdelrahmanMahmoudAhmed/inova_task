//css file
import './App.css';
import Loader from './components/generic/Loader'
//components
import Router from './Router';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  
  const isLoding = useSelector((state) => state.globalSlice.loader)
  return (
    <div className="App">
      <div>
        { isLoding &&  ( <Loader />) }
      </div>
     <Router />
    </div>
  );
}

export default App;
