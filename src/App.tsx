import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector } from './app/hooks';
import { Loader } from './components/Loader/Loader';
import { Overlay } from './components/Overlay';
import { Outlet } from 'react-router-dom';

function App() {
  const { isLoading } = useAppSelector(state => state.login);
  return (
    <div className="App">
      {
        isLoading && <Overlay><Loader /></Overlay>
      }
      <div className="container-md">
        <Outlet />
      </div>

    </div>
  );
}

export default App;
