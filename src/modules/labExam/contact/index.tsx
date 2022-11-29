import React from 'react';
import { Button, Snackbar, IconButton } from '@material-ui/core';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import firebase from '../../../firebase/config';

export const Contact = () => {
  const nameRegex = RegExp(/^[a-zA-Z\s\.]{0,30}$/);
  const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [snackBarMessage, setSnackBarMessage] = React.useState('Invalid Data');
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  var currentDate = new Date();
  var dateTime =
    currentDate.getDate() +
    '/' +
    (currentDate.getMonth() + 1) +
    '/' +
    currentDate.getFullYear() +
    ' @ ' +
    currentDate.getHours() +
    ':' +
    currentDate.getMinutes() +
    ':' +
    currentDate.getSeconds();
  const { email, name, message } = values;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRegex.test(email) && nameRegex.test(name) && message.length > 0) {
      setSnackBarMessage('Message Successfully received by author');
      handleStoreData();
      setValues({ ...values, email: '', name: '', message: '' });
    } else {
      setSnackBarMessage('Invalid Data');
      setOpenSnackBar(true);
    }
  };
  const handleStoreData = () => {
    firebase
      .database()
      .ref('viewerMessage')
      .push({ values, dateTime })
      .catch((err) => console.log(err));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.name == 'name') {
      setValues({ ...values, name: event.target.value });
    }
    if (event.target.name == 'email') {
      setValues({ ...values, email: event.target.value });
    }
    if (event.target.name == 'message') {
      setValues({ ...values, message: event.target.value });
    }
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };
  return (
    <div className="contact" id="contact">
      <div className="contact_container">
        <div className="contact_form">
          <div className="contact_form-image">
            <Image src="/images/contact/web.png" layout="fill" objectFit="contain" />
          </div>
          <form className="contact_form-form" onSubmit={handleSubmit}>
            <label className="contact_form-form-label">Name</label>
            <input
              type="text"
              className="contact_form-form-text"
              placeholder="Type Your name"
              value={name}
              onChange={handleChange}
              name="name"
            />
            <label className="contact_form-form-label">Email</label>
            <input
              type="email"
              className="contact_form-form-text"
              placeholder="Type Your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label className="contact_form-form-label">Message</label>
            <textarea
              className="contact_form-form-textArea"
              placeholder="Type Your message here"
              name="message"
              value={message}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" className="contact_form-form-button" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackBarMessage}
        className="snackbar"
        action={
          <React.Fragment>
            <IconButton size="medium" aria-label="close" color="inherit" onClick={handleClose}>
              <MdClose fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
