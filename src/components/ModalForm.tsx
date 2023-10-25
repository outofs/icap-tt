import { Button, Form, FormGroup, Modal } from 'react-bootstrap';
import { Overlay } from './Overlay';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useState } from 'react';
import { unselectPerson } from '../features/selectedPerson';
import { Person } from '../types/Person';
import { updatePerson } from '../features/people';

interface FormErrors {
  isNameError: boolean;
  isEmailError: boolean;
  isDateError: boolean;
  isPhoneError: boolean;
  isAddressError: boolean;
};

export const ModalForm = () => {
  const { person } = useAppSelector(state => state.selectedPerson);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(person?.name || '');
  const [email, setEmail] = useState(person?.email || '');
  const [date, setDate] = useState(person?.birthday_date || '');
  const [phone, setPhone] = useState(person?.phone_number || '');
  const [address, setAddress] = useState(person?.address || '');

  const [formErrors, setFormErrors] = useState<FormErrors>({
    isNameError: false,
    isEmailError: false,
    isDateError: false,
    isPhoneError: false,
    isAddressError: false,
  });

  const closeModalHandler = () => dispatch(unselectPerson());

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isNameError: false,
    }));
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isEmailError: false,
    }));
  };

  const dateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isDateError: false,
    }));
  };

  const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isPhoneError: false,
    }));
  };

  const addressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setFormErrors(currErrors => ({
      ...currErrors,
      isAddressError: false,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setFormErrors(currErrors => ({
        ...currErrors,
        isNameError: true,
      }));
    };

    if (!email.trim()) {
      setFormErrors(currErrors => ({
        ...currErrors,
        isEmailError: true,
      }));
    };

    if (!date.trim()) {
      setFormErrors(currErrors => ({
        ...currErrors,
        isDateError: true,
      }));
    };

    if (!phone.trim()) {
      setFormErrors(currErrors => ({
        ...currErrors,
        isPhoneError: true,
      }));
    };

    if (!name.trim()
      || !email.trim()
      || !date.trim()
      || !phone.trim()
    ) {
      return;
    };

    const updatedPerson: Person = {
      id: person?.id || 0,
      name,
      email,
      birthday_date: date,
      phone_number: phone,
      address,
    };

    dispatch(updatePerson(updatedPerson));
    closeModalHandler();
  };



  return (
    <Overlay>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>
              Editing form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="d-flex flex-column"
              onSubmit={submitHandler}
            >
              <FormGroup className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={nameHandler}
                  className="is-danger"
                />
                {
                  formErrors.isNameError && (
                    <Form.Text className="text-danger">
                      Name is required!
                    </Form.Text>
                  )
                }
              </FormGroup>

              <FormGroup className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={emailHandler}
                  className="is-danger"
                />
                {
                  formErrors.isEmailError && (
                    <Form.Text className="text-danger">
                      Email is required!
                    </Form.Text>
                  )
                }
              </FormGroup>

              <FormGroup className="mb-3">
                <Form.Label>Birthday date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={dateHandler}
                  className="is-danger"
                />
                {
                  formErrors.isDateError && (
                    <Form.Text className="text-danger">
                      Date is required!
                    </Form.Text>
                  )
                }
              </FormGroup>

              <FormGroup className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={phoneHandler}
                  className="is-danger"
                />
                {
                  formErrors.isPhoneError && (
                    <Form.Text className="text-danger">
                      Phone is required!
                    </Form.Text>
                  )
                }
              </FormGroup>

              <FormGroup className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  onChange={addressHandler}
                  className="is-danger"
                />
              </FormGroup>

              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalHandler}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Overlay>
  );
};