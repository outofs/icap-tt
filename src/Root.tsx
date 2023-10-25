import { Routes, Route, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from "./App";
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TablePage } from './pages/TablePage';

export const Root = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LoginPage />} />
            <Route path="table" element={<TablePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </HashRouter>
  )
}
