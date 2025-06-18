
# 🌍 WanderLust

**WanderLust** is a full-stack **peer-to-peer travel and accommodation platform**. It enables users to **register/login, list their own properties**, and **browse listings** from other users — forming a true **two-sided marketplace**.The platform offers a strong foundation for **user authentication**, **listing management**, **geolocation**, and **user-generated reviews**.

The project is structured using the **MVC (Model-View-Controller)** architecture and leverages a modern and scalable tech stack.



## 🛠️ Tech Stack

- **Frontend:** EJS, HTML5, CSS3, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** Passport.js
- **Maps & Geolocation:** Mapbox + MongoDB GeoJSON
- **Image Uploads:** Cloudinary

## 🧱 Architecture: MVC Pattern

- **Models** – MongoDB schemas and data logic
- **Views** – EJS templates rendered on the server
- **Controllers** – Application logic and route handlers

## ✨ Features

- 🧑‍💼 User authentication (Register/Login/Logout)
- 🏡 CRUD operations for listings
- 🗺️ Interactive Mapbox map for location-based listings
- 📷 Image upload and management via Cloudinary
- 💬 Ratings and reviews system
- 📱 Mobile-responsive UI
- 🧭 RESTful routing with Express

## 🔗 Live Demo

The project is deployed on **Render**:

👉 [Visit WanderLust Live](https://wanderlust-s0l5.onrender.com/listings)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/atifx17/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables
Create a .env file in the root folder and add the following:
```env
ATLASDB_URL=your_mongodb_atlas_url
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret
```
### 4. Start the App
```bash
node app.js
```
The application will be running at:
👉 http://localhost:8080/

### 5. Project Structure
```
wanderlust/
├── controllers/         # Route logic (listings, reviews, users)
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/              # Mongoose models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/              # Static files
│   ├── css/
│   └── js/
├── routes/              # Express route files
├── utils/               # Utility functions (e.g. for maps/images)
├── views/               # EJS templates
├── middleware.js        # Custom middleware
├── cloudConfig.js       # Cloudinary config
├── app.js               # Main server file
├── schema.js            # Joi or validation schemas
├── .env                 # Environment variables
├── .gitignore
├── notes.txt
├── package.json
└── package-lock.json
```

## 🧑‍💻 Author
**[MD Atif Alam](https://www.linkedin.com/in/atifx17/)**  
Full Stack Developer | MERN | Cloud Computing Enthusiast  
[LinkedIn](https://www.linkedin.com/in/atifx17/) • [GitHub](https://github.com/atifx17)