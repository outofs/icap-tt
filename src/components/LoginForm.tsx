import { useEffect, useState } from 'react';
import { Modal, Button, Form, FormGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { init } from '../features/login';
import { useNavigate } from 'react-router-dom';

interface FormErrors {
  isUsernameError: boolean;
  isPasswordError: boolean;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(state => state.login);

  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [formErrors, setFormErrors] = useState<FormErrors>({
    isUsernameError: false,
    isPasswordError: false,
  });

  useEffect(() => {
    if (status) {
      switch (status) {
        case 200:
          setError('');
          navigate('/table');
          break;
        case 400:
          setError('Please, fill all required fields!');
          break;
        case 401:
          setError('Username or/and Password is/are incorrect!');
          break;
        case 500:
          setError('Something went wrong... Please, try later.');
          break;
        default:
          break;
      }
    }
  }, [status]);

  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isUsernameError: false,
    }));
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isPasswordError: false,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim()) {
      setFormErrors(currErrors => ({
        ...currErrors,
        isUsernameError: true,
      }));
    };

    if (!password.trim()) {
      setFormErrors(currErrors => ({
        ...currErrors,
        isPasswordError: true,
      }));
    };

    if (!username.trim() || !password.trim()) {
      return;
    };

    dispatch(init({ username, password }));
  };

  return (
    <div className="d-block m-auto p-3 w-50 border rounded my-5">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="text-center">
            Login Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="d-flex flex-column"
            onSubmit={submitHandler}
          >
            <FormGroup className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={username}
                onChange={usernameHandler}
                className="is-danger"
              />
              {
                formErrors.isUsernameError && (
                  <Form.Text className="text-danger">
                    Username is required!
                  </Form.Text>
                )
              }
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter title"
                value={password}
                onChange={passwordHandler}
                className="is-danger"
              />
              {
                formErrors.isPasswordError && (
                  <Form.Text className="text-danger">
                    Password is required!
                  </Form.Text>
                )
              }
            </FormGroup>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Form.Text className="text-danger text-center">
          {
            error
          }
        </Form.Text>
      </Modal.Dialog>
    </div>
  );
};