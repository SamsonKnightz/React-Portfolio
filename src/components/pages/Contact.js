import React, { useState } from 'react';




// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

import '../../styles/Section.css';

const styles = {
    sectionStyles: {
      background: 'black',
      color: "white",

    },
  };

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <section style={styles.sectionStyles} className="section">
    <section class="mb-4">
      <div class="container w-50 p-3 mt-3">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        <form class="row" className="form">
          <div class="col-md-4">
            <div class="md-form mb-0">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input
                value={password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control"/>
                        </div>
                    </div>
                </div>

          <div class="row">

            <div class="col-md-12">

              <div class="md-form">
                <label for="message">Your message</label>
                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
              </div>

            </div>
          </div>
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
    </section>
  );
}

export default Contact;
