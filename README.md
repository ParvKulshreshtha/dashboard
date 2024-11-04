**1. Setup and run Locally**

**Prerequisites**
Node.js and npm: Ensure you have Node.js (with npm) installed. You can download it from nodejs.org.
Setting Up the Project


**Clone the Repository**: If your project is hosted on a platform like GitHub, clone the repository to your local machine:
git clone https://github.com/your-username/your-repo.git
cd your-repo


**Install Dependencies**: Navigate to the project directory and install the required dependencies:
npm install
Running the Project


**Start the Development Server**: To run the project locally, start the development server:
npm run dev
This will start the Vite development server. You should see output indicating that the server is running and on which port (usually http://localhost:3000 or http://localhost:5173).
Open the Project in Your Browser: Open your web browser and navigate to the address provided by the Vite development server, such as http://localhost:3000 or http://localhost:5173.


**Common Issues**:
Ensure all dependencies are correctly installed. If you encounter issues, try deleting the node_modules directory and package-lock.json file, then run npm install again.

**2. Design Decisions**

**typescrip:** TypeScript was chosen to enhance code quality and maintainability by providing static typing, which helps catch errors early during development. This also improves the overall developer experience and makes the codebase easier to navigate and refactor. 


**Redux:** Redux is used for state management, particularly for maintaining the dark theme state, which needs to be accessed across multiple components. 


**tailwind:** Tailwind CSS was selected for styling the application due to its utility-first approach. This allows for rapid development of responsive and customizable UI components without writing custom CSS, leading to a more streamlined and maintainable codebase. 


**shadcn:** The shadcn library is used for advanced UI components like tables and breadcrumbs


**React-simple-maps:** React-simple-maps is used for the map component


**recharts:** Recharts is utilized for creating line and bar charts. This library was chosen for its ease of use, rich feature set, and excellent integration with React, allowing for the creation of interactive and visually appealing charts.


**react-roter**: React Router is employed for client-side routing to manage navigation within the application. It provides a robust solution for handling dynamic routing, nested routes, and route-based code splitting, enhancing the overall user experience.



