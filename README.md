# Elysian Shores - Frontend

## Overview

Elysian Shores is a luxury experience web application offering users a seamless platform to manage their accounts, reset passwords, and engage with a premium interface. This project is the **frontend** portion, built with **React** and includes essential features such as **user authentication** and **password reset**.

---

## Features

- **User Authentication**: Users can sign up and log in to their accounts.
- **Password Reset**: Users can easily reset their password if they forget it or wish to change it.
- **Responsive Design**: The UI is optimized for both desktop and mobile devices.
- **Error Handling**: Real-time feedback for validation errors, including issues with passwords, emails, and required fields.
- **Modern UI**: Built using **React**, **Bootstrap**, and custom CSS to provide a clean and functional user interface.

---

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **React Router**: For navigation and handling different routes.
- **Bootstrap**: For styling and responsive design.
- **Fetch API**: For making asynchronous requests to the backend.
- **React Hooks**: For managing state and side effects, such as form input handling.
- **CSS**: Custom styles for form inputs, buttons, and layout.

---

## Password Reset Feature

One of the core features of this application is the **password reset functionality**. The process is designed to help users recover their account in case they forget their password or wish to update it. The password reset process is handled through two main pages:

1. **Forgot Password**: A page where users can request a password reset link by entering their email.
2. **Reset Password**: A page where users can set a new password once they've received a reset link.

### Forgot Password

The **Forgot Password** page allows users to request a password reset. Here's how it works:

- The user enters their registered **email address**.
- Once submitted, the system sends a password reset link to the user's email.
- If the email doesn't exist in the system, an error message is displayed.

### Reset Password

The **Reset Password** page is where users can set a new password. After receiving a valid reset link in their email, they can follow these steps:

- The user enters a **new password**.
- The password is validated to ensure it meets the minimum length requirement (at least 6 characters).
- The user is required to confirm the password by entering it again.
- If the passwords match, the user’s password is updated in the system.

---

## Routes

The application uses **React Router** to handle navigation. Below are the available routes related to the password reset functionality:

- **/forgotpassword**: Allows users to submit their email address to receive a password reset link.
- **/resetpassword**: After clicking the reset link, users are redirected to this page to enter and confirm their new password.

---

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sandhyachan/react-redux-cart.git
    ```

2. **Install dependencies**:
    ```bash
    cd reactreduxcart
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser.


## Password Reset Process
### Forgot Password:

Navigate to the Forgot Password page (/forgotpassword).
Enter the registered email address and click "Send Reset Link".
If the email is valid, the user will receive a reset link to their inbox.
Reset Password:

Once the user clicks the reset link from their email, they will be redirected to the Reset Password page (/resetpassword).
The user will enter a new password and confirm it by entering it again.
After the passwords match and are valid, the password is updated, and the user can log in with the new password.


## License

This project is open-source and available under the [MIT License](LICENSE).