import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector } from './app/hooks';
import { Loader } from './components/Loader/Loader';
import { Overlay } from './components/Overlay';
import { Outlet } from 'react-router-dom';
import { ModalForm } from './components/ModalForm';

function App() {
  const { isLoading: loginLoading } = useAppSelector(state => state.login);
  const { isLoading: peopleLoading } = useAppSelector(state => state.people);
  const { person } = useAppSelector(state => state.selectedPerson);

  return (
    <div className="App">
      {
        (loginLoading || peopleLoading) && <Overlay><Loader /></Overlay>
      }
      <div className="container-md">
        <Outlet />
      </div>
      {
        person && <ModalForm />
      }
    </div>
  );
}

export default App;
