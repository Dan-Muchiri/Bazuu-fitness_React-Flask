# Bazuu Fitness App

Bazuu Fitness is a web application designed to revolutionize how individuals approach their fitness journeys. It provides a vibrant and supportive community-driven platform for users to share, discover, and engage with diverse fitness activities and routines. By fostering collaboration and knowledge-sharing, Bazuu Fitness aims to empower users to stay motivated and achieve their fitness goals effectively.

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

Bazuu Fitness is a dynamic Fitness platform that serves as a hub for users to share, discover, and engage with diverse fitness activities and routines. By facilitating seamless interaction and information exchange, Bazuu Fitness empowers users to learn from each other, stay motivated, and achieve their fitness goals effectively.

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
  - Postgresql
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
