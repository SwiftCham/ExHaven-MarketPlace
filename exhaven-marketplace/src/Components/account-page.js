import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const AccountPage = () => {
  // Your component logic goes here
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [showChangeEmail, setShowChangeEmail] = React.useState(false);
  const [showChangePassword, setShowChangePassword] = React.useState(false);

  const handleChangeEmailOpen = () => setShowChangeEmail(true);
  const handleChangePasswordOpen = () => setShowChangePassword(true);
  const handleChangeEmailClose = () => setShowChangeEmail(false);
  const handleChangePasswordClose = () => setShowChangePassword(false);



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>View Account</h1>
      <div style={{ border: '2px solid black' }}>
        <div style={{ textAlign: 'left' }}>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} readOnly />
          <br /><a href="#" onClick={handleChangeEmailOpen}>Change email?</a>
        </div>
        <div style={{ textAlign: 'left' }}>
          <label>Password:</label>
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} readOnly />
          <button onClick={handleTogglePassword}>{showPassword ? 'Hide' : 'Show'}</button>
          <br /><a href="#" onClick={handleChangePasswordOpen}>Change password?</a>
        </div>
        <div style={{ textAlign: 'left' }}>
          <label>Orders:</label>
          <br />
          <br />
        //TODO: Implement Order history
          <br />
          <br />
          <br />
        </div>
        <div style={{ textAlign: 'left' }}>
          <label>Billing Address</label>
          <br />
          <br />
        //TODO: implement address get function
          <br />
          <br />
          <br />
          <Button variant="secondary" >Edit Address</Button>
        </div>
      </div>


      <Modal show={showChangeEmail} onHide={handleChangeEmailClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Email" />
          <p></p>
          <input type="password" placeholder="Password" />
          <p></p>
          <button>Change Email</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleChangeEmailClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showChangePassword} onHide={handleChangePasswordClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="password" placeholder="Current Password" />
          <p></p>
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />
          <p></p>
          <button>Change Password</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleChangePasswordClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};


export default AccountPage;