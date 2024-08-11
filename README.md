# DisasterSphere

DisasterSphere is a comprehensive disaster management platform designed to inform users about ongoing disasters, provide essential educational resources, manage disaster response efforts, and facilitate communication and fundraising during emergencies. The platform includes a robust user authentication system, an admin panel for managing users and disaster reports, and a real-time alert system to keep users informed of potential dangers in their area.

## Key Features

### 1. User Management
- **User Registration & Login**: Users can create accounts and log in securely with email and password. The platform uses email verification to confirm the authenticity of user accounts.
- **Email Verification**: After registration, users receive a verification email with a link to activate their accounts. This email is professionally designed and styled to ensure a consistent user experience.
- **Role Management**: The system supports role-based access, distinguishing between regular users and admins. Admins have additional privileges to manage users, disasters, and platform content.
- **User List Management (Admin)**: Admins can view, promote, or demote users, making it easy to manage user roles and permissions.

### 2. Disaster Management
- **Disaster Reporting**: Users can report disasters by submitting information such as the name, location, and description of the event. Reports include a verification status, helping to maintain the accuracy of information on the platform.
- **Non-Verified Disasters**: Disasters that have not yet been verified by an admin are listed separately, awaiting review and approval.
- **Verified Disasters**: Verified disasters are displayed in a card-based UI for easy browsing. Admins can delete outdated or incorrect reports.

### 3. Admin Panel
- **Statistics Dashboard**: The admin panel features a dashboard displaying key metrics, such as the total number of users, admins, and reported disasters.
- **User Management**: Admins can manage users, promote or demote admin roles, and oversee user activities on the platform.
- **Disaster Verification**: Admins can review and verify disaster reports, ensuring that only accurate and relevant information is available to users.
- **Alert System**: Admins can send alerts to users based on their location. Alerts are categorized by severity (Yellow, Orange, Red) and sent via email to users in affected areas.

### 4. Email System
- **Verification Email**: Upon registration, users receive a verification email designed with HTML and CSS, ensuring it looks professional across all devices.
- **Alert Emails**: Admins can send alert emails to users based on their state and city. These emails are consistent in design with the verification emails and provide detailed information and instructions regarding ongoing disasters.

### 5. Frontend Features
- **React-Based UI**: The platform's frontend is built using React, providing a dynamic and responsive user experience.
- **Routing**: React Router is used for smooth navigation between different sections, such as the admin panel, user list, disaster reports, and email verification page.
- **Search and Filter**: Users can search and filter disaster reports by name, state, or city, making it easy to find specific information.
- **Responsive Design**: The platform is fully responsive, offering a consistent user experience across desktops, tablets, and mobile devices.

### 6. Additional Features
- **Real-Time Disaster Alerts**: The platform provides users with up-to-date notifications on ongoing disasters, keeping them informed and prepared.
- **Virtual Volunteer Network**: Connects volunteers with disaster response tasks and fundraising opportunities, fostering community involvement.
- **Community-Based Reporting System**: Users can report and share information about local disasters, creating a collaborative environment for disaster response.
- **Educational Resources & Interactive Learning**: Offers detailed educational content and interactive modules on disaster preparedness.
- **Disaster Response Task Manager**: Assigns and tracks tasks for volunteers during disasters, ensuring coordinated and efficient response efforts.
- **Emergency Communication Hub**: Facilitates communication between users during emergency situations, allowing for quick and effective coordination.
- **Donation & Fundraising Section**: Enables donations and fundraising for disaster relief efforts, supporting affected communities.
- **Detailed Disaster-Specific Pages**: Provides in-depth information on specific disasters, including earthquakes, floods, cyclones, wildfires, tsunamis, and landslides.
- **SEO Optimization**: Enhances search engine visibility for the platform using React Helmet, driving more traffic to the site.
- **Admin Panel**: Allows administrators to manage disasters, user activities, and other platform content effectively.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/disastersphere.git
    ```
2. Install the required dependencies for the backend:
    ```bash
    cd disastersphere
    npm install
    ```
3. Install the required dependencies for the frontend:
    ```bash
    cd client
    npm install
    ```
4. Set up environment variables by creating a `.env` file in the root directory.

### Running the Application
- To run the backend server:
    ```bash
    npm run server
    ```
- To run the frontend:
    ```bash
    cd client
    npm start
    ```


