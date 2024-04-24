# Bazuu Fitness App

Bazuu Fitness is a web application designed to help users track their fitness activities, set fitness goals, and monitor their progress over time. With a user-friendly interface and robust features, Bazuu Fitness makes it easy for users to stay motivated and achieve their fitness goals.

## Table of Contents

- [About](#about)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

Bazuu Fitness allows users to create personalized fitness profiles, track their daily workouts, monitor their calorie intake, and set customizable fitness goals. Whether you're a beginner looking to kickstart your fitness journey or an experienced athlete aiming to reach new milestones, Bazuu Fitness has everything you need to succeed.

## Deployment

This site is deployed on [Render](https://bazuu-fitness.onrender.com), a modern platform for building and hosting web applications.

## Technologies Used

- **Frontend:**
  - React.js
  - Zustand (for state management)
  - HTML/CSS/JavaScript
  - React Router (for routing)
  - Formik for forms
  - Yup for validations
- **Backend:**
  - Python
  - Sqlite
  - SqlAlchemy
  - Flask
- **Authentication:**
  - bcrypt (for password hashing)

## Features

### User Authentication

- **Sign up:** Create a new account with a unique username and email address.
- **Login:** Access your account securely with your credentials.
- **Logout:** Log out of your account to protect your privacy.
- **Delete Account:** To delete from the database the user.

### Fitness Activity Feed

- **View Activities:** Users can browse through a feed of fitness activities posted by other users on the site.
- **Add Activity:** Users can create and post their own fitness activities to share with the community.
- **Follow Activities:** Users can follow activities posted by other users to stay updated on their progress and routines.

### Activity Management

- **Update Activity:** Owners of fitness activities can edit and update their posts as needed to reflect changes or improvements.
- **Delete Activity:** Activity owners have the ability to delete their own posts if they no longer wish to share them with the community.

### User Profile

- **Profile Picture:** Users can upload a profile picture to personalize their account and make it recognizable to others.
- **Logout:** Users can securely log out of their accounts to protect their privacy.
- **Login:** Registered users can log in to access their accounts and engage with the community.
- **Delete Account:** Users have the option to permanently delete their accounts from the system if they choose to do so.

### Community Interaction

- **Share Activities:** Users can share their fitness activities to inspire and motivate others in the community.
- **Support and Collaboration:** Users can interact with each other by following fitness activities, fostering a sense of community and encouragement.

### Activity Repository

- **Personalized Activity Feed:** Each user has a page where they can view all the fitness activities they have either posted or followed.
- **Organized Display:** Activities are neatly organized and categorized for easy navigation and reference.

## Getting Started

To get started with Bazuu Fitness, follow these steps:


### Usage

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd bazuu-fitness-app
    ```

3. **Install dependencies for the backend server:**

    ```bash
    pipenv install
    pipenv shell
    ```

4. **Run the Flask API:**

    ```bash
    python server/app.py
    ```

5. **Install dependencies for the frontend client:**

    ```bash
    npm install --prefix client
    ```

6. **Run the React app:**

    ```bash
    npm start --prefix client
    ```

7. **Access the Bazuu Fitness app in your web browser at http://localhost:3000.**

### Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
