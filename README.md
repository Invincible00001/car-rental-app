# car-rental-app
public/cars.json
Purpose: Acts as a mock data source for car details. This file mimics an API response and contains an array of car objects, each with attributes like id, name, price, image, and seats.
Usage: The car data is fetched dynamically in CarList.js to populate the car cards.
src/components/Header.js
Purpose: Provides a navigation header for the application.
Key Features:
Displays the application title using an icon from react-icons.
Includes links for navigation (e.g., Home and Booking) styled with Bootstrap.
Functionality: The Link components from react-router-dom allow seamless navigation between routes without reloading the page.
src/components/Footer.js
Purpose: Displays a footer at the bottom of the page.
Key Features:
Shows a copyright notice.
Styled with Bootstrap classes for a simple and responsive layout.
src/components/CarList.js
Purpose: Displays a list of available cars fetched from the cars.json file.
Key Features:
State Management:
Uses useState to store the list of cars.
Uses useEffect to fetch car data from cars.json when the component mounts.
Dynamic Content:
Maps over the list of cars to dynamically generate Bootstrap card components for each car.
Redirection:
The "Book Now" button redirects to the BookingForm page, passing the selected car's details using the useNavigate hook.
Styling:
Cards are styled using Bootstrap and include icons for better visualization.
Functionality:
Renders car details (name, price, seats, and image) dynamically.
Handles navigation to the booking page with the selected car’s details.
src/components/BookingForm.js
Purpose: Displays a form for booking a car, prefilled with details of the selected car.
Key Features:
State Management:
Uses useState to manage form data for pickupDate, returnDate, and car.
Receiving Data:
Uses useLocation from react-router-dom to retrieve car details passed as state from CarList.js.
Prefills the form with the selected car’s name.
Form Handling:
Handles form input changes and submission.
Displays an alert confirming the booking upon submission.
Styling:
Styled with Bootstrap classes for a clean and responsive layout.
Functionality:
Displays a form where users can select dates and confirm their booking for a specific car.
src/App.js
Purpose: Serves as the entry point for routing and combines all components.
Key Features:
Routing:
Configures routes for the application using BrowserRouter, Routes, and Route from react-router-dom.
Maps the / path to CarList and /booking path to BookingForm.
Layout:
Includes the Header and Footer components, ensuring they appear on all pages.
Styling:
Links the custom CSS file (index.css) for global styles.
Functionality:
Manages navigation between different pages of the app.
src/index.js
Purpose: The main entry point of the React application.
Key Features:
Renders the App component into the DOM’s root element (index.html).
Includes Bootstrap CSS for consistent styling across components.
Functionality:
Initializes the React app and applies global styles.
src/index.css
Purpose: Provides additional global styles to enhance the app’s appearance.
Key Features:
Animations:
Adds hover effects for cards and buttons.
Responsive Design:
Ensures consistent spacing and styling across different screen sizes.
Utility Styles:
Customizes Bootstrap classes for a unique look and feel.
Functionality:
Enhances the visual appeal of the app with minimal custom CSS.
