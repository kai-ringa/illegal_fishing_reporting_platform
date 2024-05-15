# Illegal Fishing Reporting Platform

This project is a web application designed to report illegal fishing activities. It allows users to submit reports with details such as location, description, and evidence upload, and includes features such as geolocation, user authentication, data visualization, and notifications.

## Features

- **Incident Reporting Form**: Users can submit details of illegal fishing incidents.
- **Geolocation**: Capture the precise location of reported incidents and display them on an interactive map.
- **User Authentication**: Ensure the credibility of reports and prevent spam or false submissions.
- **Data Visualization**: Visualize reported data with heatmaps or clusters on the map.
- **Notification System**: Alert authorities in real-time when new incidents are reported.
- **Data Export**: Enable exporting of reported data for further analysis and enforcement purposes.

## Technologies Used

- Frontend: React.js (with Vite)
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: To be implemented
- Mapping and Geolocation: To be implemented

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/illegal_fishing_reporting_platform.git
   cd illegal_fishing_reporting_platform

   ```

2. Install dependencies for the backend and frontend.

3. Set up your environment variables. Create a .env file in the backend directory and add the following:
   ```sh
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev

   ```

2. Open your browser and navigate to http://localhost:3000 to view the application.

### Future Improvements

- Implement user authentication
- Integrate geolocation API
- Add data visualization for reports
- Set up a notification system
- Allow data export for analysis
