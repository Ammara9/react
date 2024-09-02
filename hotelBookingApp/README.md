# Quest Qisar Hotel - Project Overview

## Introduction

"Quest Qisar Hotel" is a responsive web application built using Create React App, designed to provide a seamless and intuitive user experience for hotel search and booking. The application has been meticulously developed with a well-organized component structure and integrates several external libraries to enhance functionality and user interface design. This document provides a detailed overview of the component architecture, the relationships between components, and the external packages used in the project.

## Component Structure

### App.js
The `App.js` file serves as the central hub of the application. It imports and renders all other components, managing the routing using `React Router` (Switch, Route, Redirect). This ensures that navigation within the application is smooth and all links function correctly.

### Navbar
The `Navbar` component provides navigation links to various sections of the application, such as "About Us" and "All Hotels." It acts as the global header, visible on all pages, and is crucial for guiding users through the app. The "About Us" section offers insights into the company's history, philosophy, and team, while "All Hotels" provides an overview of available hotels on the homepage.

### Footer
The `Footer` component is consistently displayed at the bottom of each page, offering contact information and other relevant details to assist users.

### Content
The `Content` component is the core of the application, displaying hotel information and various services, including booking options. Within this component, several subcomponents are responsible for different functionalities:

- **HotelSearchBar**: Allows users to input search criteria such as destination, check-in and check-out dates, and the number of adults, children, and rooms. A search button triggers the search based on these parameters.
- **HotelList**: Displays a list of five different hotels, including details such as name, country, family-friendly options, images, descriptions, and pricing.
- **HotelDetails**: When users select a hotel from the list, they are redirected to a detailed view. This includes a photo gallery, additional hotel information, and subcomponents like "Restaurant" and "Taxi Booking," along with a button to complete the booking.

#### Additional Subcomponents
- **Restaurant**: This component displays the weekly menu for the CantM restaurant.
- **Taxi Booking**: Offers two taxi booking options, displaying prices and contact information.
- **Message**: This component confirms the user's reservation once they click the "Book" button.

## Component Tree

To better visualize how our components interact, here is the hierarchical structure of the application:

- App
  - Navbar
    - About Us
    - All Hotels
  - Content
    - HotelSearchBar
    - HotelList
    - HotelDetails
      - Restaurant
      - Taxi Booking
      - Message
  - Footer

## External Packages Used

To efficiently develop the React.js application, several external packages were integrated, each serving a specific purpose:

- **react-router-dom**: Manages navigation between different pages and sections of the application, ensuring a smooth user experience.
- **react-bootstrap** and **bootstrap**: These packages enable the use of the Bootstrap framework for creating stylish and responsive UI elements.
- **react-datepicker**: Implements a calendar for easy selection of check-in and check-out dates in the search bar.
- **react-rating**: Allows users to rate hotels or services, which is valuable for expressing preferences and improving the user experience.

## Conclusion

In developing the "Quest Qisar Hotel" React.js application, we have prioritized user-friendliness and functionality by implementing a clear component structure and integrating external packages to enhance our project. The application provides a versatile and informative experience for users, allowing them to search for hotels, explore services, and make bookings with ease. By following best practices and leveraging external packages, we have created a welcoming and functional environment for our users.

### Digital Pritotype: Figma
https://www.figma.com/proto/2ImU8g29A4hJTZDzp5c5oV/Projektgrupp-4?type=design&node-id=2-139&t=8VFNmrXhNtY1UgOQ-1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A139 
