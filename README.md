# 🏏 IPL Auction System

A full-stack web application that simulates an IPL player auction. It allows users to manage IPL teams, maintain player records, conduct player bidding, and track team budgets during the auction process.

## 📌 Project Overview

The IPL Auction System is designed to simplify the management of a cricket player auction.

The application provides a user interface to manage teams and players, conduct auctions, assign players to teams, and automatically update team budgets based on successful bids.

The system uses React.js for the frontend, Spring Boot for backend services, and MySQL for database management.

## 🌐 Live Application

**Frontend:** https://ipl-auction-system-three.vercel.app/

**Backend:** Coming soon

**Database:** MySQL (Coming soon)


## ✨ Features

* **Team Management:** Add and manage IPL teams.
* **Player Management:** Add, view, update, and delete player records.
* **Player Auction:** Conduct player bidding and assign players to teams.
* **Budget Management:** Automatically deduct the winning bid amount from the team's available budget.
* **Player Status Tracking:** Track whether a player is available or sold.
* **IPL Team Logos:** Display IPL team logos in the application.
* **Database Integration:** Persist team and player information using MySQL.

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router

### Backend

* Java 17
* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* Maven
* Lombok

### Database

* MySQL

### Development Tools

* Visual Studio Code
* IntelliJ IDEA
* Postman
* Git
* GitHub

## 🏗️ System Architecture

```text
          USER
            |
            v
     React Frontend
            |
            | REST API
            v
    Spring Boot Backend
            |
            v
      Spring Data JPA
            |
            v
       MySQL Database
```

## 📂 Project Structure

```text
ipl-auction-system/
│
├── Backend/
│   └── ipl-auction-backend/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       └── resources/
│       ├── pom.xml
│       └── mvnw
│
├── Frontend/
│   └── ipl-auction-frontend/
│       ├── public/
│       │   └── logos/
│       ├── src/
│       ├── package.json
│       └── package-lock.json
│
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the application:

* Java Development Kit (JDK) 17
* Node.js and npm
* MySQL Server
* Maven (optional if using the included Maven wrapper)
* Git

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd ipl-auction-system
```

### 2. Configure MySQL Database

Create a MySQL database:

```sql
CREATE DATABASE ipl_auction;
```

Configure the database connection in the backend's `application.properties` file.

Provide your own database credentials through environment variables. Do not commit passwords or other secrets to GitHub.

### 3. Run the Backend

Open a terminal and navigate to:

```bash
cd Backend/ipl-auction-backend
```

Run the Spring Boot application using Maven:

```bash
mvn spring-boot:run
```

Alternatively, on Windows, use the Maven wrapper:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend will run at:

```text
http://localhost:8080
```

### 4. Run the Frontend

Open another terminal and navigate to:

```bash
cd Frontend/ipl-auction-frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend will run at:

```text
http://localhost:3000
```

## 🔗 Backend API Endpoints

| HTTP Method | Endpoint        | Description                               |
| ----------- | --------------- | ----------------------------------------- |
| GET         | `/players`      | Retrieve all players                      |
| POST        | `/players`      | Add a new player                          |
| PUT         | `/players/{id}` | Update player details                     |
| DELETE      | `/players/{id}` | Delete a player                           |
| GET         | `/teams`        | Retrieve all teams                        |
| POST        | `/teams`        | Add a new team                            |
| PUT         | `/teams/{id}`   | Update team details                       |
| DELETE      | `/teams/{id}`   | Delete a team                             |
| POST        | `/auction/buy`  | Purchase a player through auction bidding |

## 🔮 Future Enhancements

* Live auction interface.
* Real-time bidding functionality.
* Enhanced auction statistics and reports.
* Improved user experience and dashboard.
* Cloud deployment and online accessibility.

## 👨‍💻 Author

**Chandana**

IPL Auction System

---

*Developed as a full-stack web development project using React.js, Spring Boot, and MySQL.*
