# m-tarunno-server

A full-stack application to manage a newsportal. It includes:

- 🖥️ Web Frontend: Built with React.js
- 📱 Mobile App: Built with React Native (Expo)
- 🌐 Backend: Node.js with Express.js
- 🗃️ Database: MySQL using Sequelize ORM

---

## 🚀 Features

- ✅ JWT + Cookie-based secure Authentication
- 🔑 Optional OTP Login system
- 🔒 Role-based Access Control (Admin, Editor, User)
- 🧩 Modular Architecture using Repository–Service–Controller pattern
- 🗃️ Sequelize ORM with MySQL Database
- 🧠 Categories, Tags, Posts, Comments, and Advertisement management
- 💬 Comment system with nested replies, likes, and views
- 📈 Trending and Latest content prioritization
- 🐳 Dockerized with Docker Compose support
- ✅ Clean, scalable, and production-ready codebase

---

## 📁 Folder Structure

m-tarunno-server/
.
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.js
│   ├── common
│   │   ├── authMiddleware.js
│   │   ├── dataFilterHandler.js
│   │   └── errorHandler.js
│   ├── config
│   │   ├── index.js
│   │   └── mysql.js
│   ├── loader
│   │   ├── db.js
│   │   ├── express.js
│   │   ├── index.js
│   │   ├── init.js
│   │   └── models.js
│   ├── modules
│   │   ├── adscategory
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── advertisement
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── auth
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── model.js
│   │   │   ├── otpService.js
│   │   │   └── service.js
│   │   ├── category
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── comment
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── cover
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── init.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── index.js
│   │   ├── junctions
│   │   │   ├── CategoryTag.js
│   │   │   └── PostTag.js
│   │   ├── post
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   ├── models
│   │   │   │   ├── Post.js
│   │   │   │   └── PostState.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── role
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── init.js
│   │   │   ├── middleware.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   ├── sms
│   │   │   ├── controller.js
│   │   │   └── index.js
│   │   ├── tag
│   │   │   ├── controller.js
│   │   │   ├── index.js
│   │   │   ├── middleware.js
│   │   │   ├── model.js
│   │   │   ├── repository.js
│   │   │   └── service.js
│   │   └── user
│   │       ├── controller.js
│   │       ├── index.js
│   │       ├── init.js
│   │       ├── middleware.js
│   │       ├── models
│   │       │   ├── User.js
│   │       │   └── UserToken.js
│   │       ├── repository.js
│   │       └── service.js
│   └── utils
│       ├── jwt.js
│       ├── logger.js
│       ├── multer
│       │   └── upload.js
│       ├── seoCalculator.js
│       └── smsService.js
└── uploads
    ├── others
    │   ├── 20250528_062951_6449.svg
    │   └── 20250528_063202_8237.png
    └── posts
        ├── 20250520_060449_5027.png
        └── 20250520_061135_4332.png

---

## Tech Stack

| Layer        | Technology             |
| ------------ | -----------------------|  
| Web Frontend | React.js               |
| Mobile App   | React Native (Expo)    |
| Backend      | Node.js + Express      |
| ORM          | Sequelize              |
| Database     | MySQL                  |
| Auth         | JWT + Cookie           |
| Container    | Docker, Docker Compose |

---