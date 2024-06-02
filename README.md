# Image Gallery App

A modern web application for managing and viewing personal image galleries. Built with React, Firebase, and Vite.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Image Upload**: Users can upload images to their personal gallery.
- **Personal Galleries**: Each user can view only their uploaded images.
- **Responsive Design**: Clean and responsive UI for a seamless experience across devices.
- **Firebase Integration**: Real-time database and storage handling with Firebase Firestore and Firebase Storage.

## Technologies

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development build tool.
- **Firebase**: Backend services for authentication, database, and storage.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/image-gallery-app.git
   cd image-gallery-app


   ```

2. **Install dependencies:**:

   ```bash
   npm install

   ```

3. **Set up Firebase:**:

- Create a Firebase project and configure Authentication, Firestore, and Storage.
- Create a .env file in the root directory and add your Firebase configuration:

  ```bash
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
  ```

4. **Run the app:**:

```bash
   npm run dev
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

```bash
   This provides a clear and structured README.md for your project, outlining its features, technologies used, and setup instructions.
```
