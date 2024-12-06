# Blog Platform 🌟

A modern platform for blogging enthusiasts to create, share, and manage blog posts effortlessly.

## 🚀 Overview

The **Blog Platform** empowers users to craft and share their thoughts seamlessly. Whether you're a budding writer or a seasoned blogger, this platform offers a simple yet powerful interface to manage your content.  
Built with the latest technologies like **Next.js 14** and **MongoDB**, this application ensures a smooth, reliable, and feature-rich blogging experience.

---

## ✨ Features

### 🌟 Core Features:

- **User Authentication**: Secure registration and login system for personalized access.
- **Create Blogs**: A user-friendly text editor to help you pen down your thoughts.
- **Edit Blogs**: Update your posts with ease to keep them relevant.
- **Delete Blogs**: Remove any blog post if you no longer wish to share it.

### 🎨 Personalization:

- **Profile Updates**: Keep your profile information up-to-date effortlessly.
- **Image Uploads**: Enhance your blogs by uploading images through **Cloudinary integration**.

### 🔥 Additional Highlights:

- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **High Performance**: Leveraging the power of **Next.js 14** for a seamless user experience.

---

## 🛠️ Technologies Used

| **Tech Stack**   | **Description**                                                              |
| ---------------- | ---------------------------------------------------------------------------- |
| **Frontend**     | Next.js 14 - Cutting-edge React framework for dynamic web applications.      |
| **Backend**      | Node.js - Robust server-side runtime.                                        |
| **Database**     | MongoDB - Scalable NoSQL database with Prisma ORM for simplified management. |
| **Image Upload** | Cloudinary - Efficient image storage and delivery system.                    |

---

## 🔧 Installation

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js**: Download [here](https://nodejs.org/).
- **MongoDB**: Install MongoDB Community Edition or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas).

### 2️⃣ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhanuteja005/bloggy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Blog-Platform
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the following:

   ```env
    DATABASE_URL=your_mongo_db_connection_string
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
    JWT_SECRET=your_secret_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```
6. Visit `http://localhost:3000` in your browser to see the app in action!

---

## 🤝 Contribution

We welcome contributions to make this platform even better! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -m 'Add feature XYZ'`).
4. Push your changes to your branch (`git push origin feature-xyz`).
5. Submit a pull request.

---
