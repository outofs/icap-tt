import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector } from './app/hooks';
import { Loader } from './components/Loader/Loader';
import { Overlay } from './components/Overlay';
import { Outlet } from 'react-router-dom';

function App() {
  const { isLoading: loginLoading } = useAppSelector(state => state.login);
  const {isLoading: peopleLoading} = useAppSelector(state=>state.people);

  return (
    <div className="App">
      {
        (loginLoading || peopleLoading) && <Overlay><Loader /></Overlay>
      }
      <div className="container-md">
        <Outlet />
      </div>

    </div>
  );
}

export default App;
