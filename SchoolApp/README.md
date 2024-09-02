
# Project Overview

This project is a comprehensive web application built with React, leveraging several modern libraries and services to create a user-friendly and interactive experience. The application focuses on user authentication, profile management, and educational content related to global environmental issues. It also includes a quiz feature that enhances user engagement. Below is a detailed breakdown of the components, libraries, and functionalities that make up the project.

## Key Packages and Libraries Used
@fortawesome/free-solid-svg-icons@^6.5.1: Provides a collection of solid icons for use throughout the application.
@fortawesome/react-fontawesome@^0.2.0: Integrates FontAwesome icons with React components.
bootstrap@^5.3.2: A popular CSS framework for responsive and modern web design.
firebase@^10.6.0: Utilized for user authentication, data storage, and real-time database functionalities.
react@^18.2.0: The core library for building user interfaces in this project.
react-bootstrap@^2.9.1: Bootstrap components for React, enabling the use of Bootstrap’s styling and components within React.
react-dom@^18.2.0: Provides DOM-specific methods that enable React to interact with the web browser.
react-router-dom@^6.20.1: Manages navigation and routing within the application.
react-scripts@^5.0.1: Scripts and configuration used by Create React App.
react-confetti@^6.1.0: Adds celebratory confetti effects, enhancing user experience after quiz completion.
react-chartjs-2@^5.2.0: Integrates Chart.js into React to create data visualizations like graphs.
react-icons: Provides a set of popular icons to enhance the UI.

## Project Structure and Components
The src folder contains key components and files, including contexts, Firebase configuration, user information, quizzes, and educational content. Below is a brief overview of these components:

## Core Components
App.js: Manages the routing of the application, including nested routes, and determines where the navigation bar and footer should be displayed.
Navbar.jsx: Displays the navigation bar with a logo that links back to the homepage, and includes the user’s profile picture.
NavbarProfileImage.jsx: Fetches and displays the user's profile image from Firebase Storage, updated whenever the user uploads a new image.

## Context and Routing
Auth.jsx: Handles authentication using Firebase, providing context for managing user login states.
PrivateRoute: Protects specific routes, ensuring only authenticated users can access certain pages.
Firebase Integration
firebase.jsx: Contains Firebase configuration details and exports functions to interact with Firebase services like Authentication and Realtime Database.

## User Information Management
Login.jsx: Enables users to log in using Firebase Authentication, with functionality for error handling and password resets.
SignUp.jsx: Allows new users to register, managing email and password validation.
Profile.jsx: Displays user information, including completed challenges and profile picture management.
ResetPassword.jsx: Sends a password reset email using Firebase Authentication API.

## Educational Content
Subject Components: Includes components like Global Temperature, Glaciers, Sea Level, How to Help, and Challenges, which display educational content on environmental topics.
Challenges.jsx: Allows users to explore and track their progress on environmental challenges, syncing data with Firebase.
SetChallengesToFirebase.jsx: Updates Firebase Realtime Database with user-specific challenge data, ensuring synchronization between the client and the database.

## Quiz Feature
QuizStart: Confirms whether the user wants to begin the quiz.
Quiz.jsx: Fetches quiz data from a JSON file and displays it.
Utils.jsx: Randomizes the quiz questions each time it runs.
Questions.jsx: Allows users to navigate through the quiz questions and submit answers.
QuizResult.jsx: Displays a modal showing the quiz results, which are saved to Firebase only during the session when the user is logged in.

## Data Visualization
Graph Components: Three JS-based graphs (Global Temperature, Sea Level, Glaciers) are created and displayed within their respective components to visually represent the data.
