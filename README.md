# 🚗 Car Parking Management System

A modern and efficient car parking management system featuring **QR code-based authentication**, built using **Spring Boot**, **JavaFX** and a **web frontend**.(Extract the rar files inside of **car-park-api**, **car-parking** folders)

## 🌟 Features

* ✅ QR code-based parking authentication
* 📍 Real-time parking slot management
* 👤 User registration and login
* 💳 Payment tracking and processing
* 🖥️ Web and desktop application interfaces
* 🛠️ Admin dashboard for parking operations

---

## 📸 Preview
![WhatsApp Image 2024-05-02 at 11 56 23_539b4a37](https://github.com/user-attachments/assets/b3487d54-36d0-42d7-9615-078c8a6d2087)
![WhatsApp Image 2024-05-02 at 11 56 41_9bc74349](https://github.com/user-attachments/assets/25ce5c96-9376-4bee-aded-2fef5df074ba)

---

## 🧱 Project Structure

This system is organized into three main components:

1. `car-park-api` – Spring Boot backend server
2. `car-parking` – JavaFX-based desktop client
3. `front` – Web frontend served via Nginx

---

## 🛠️ Technologies Used

| Layer | Technology |
|-------|------------|
| Backend | Spring Boot |
| Desktop App | JavaFX |
| Frontend | HTML, CSS, JavaScript |
| Database | MySQL |
| Authentication | JWT |
| QR Code | ZXing library |
| Web Server | Nginx |
| Containerization | Docker |

---

## 🚀 Setup & Installation

### ✅ Prerequisites

Ensure the following are installed on your machine:

* Java 8 or higher
* Maven
* Docker
* MySQL
* Node.js (for frontend development)

### 🔧 Backend Setup

```bash
cd car-park-api
mvn clean install
mvn spring-boot:run
```

### 🖥️ Desktop Application

```bash
cd car-parking
mvn clean install
mvn javafx:run
```

### 🌐 Frontend Setup

```bash
cd front
docker-compose up -d
```

---

## 📱 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/register` | User registration |
| `/login` | User login & JWT authentication |
| `/requestQr` | Generate QR code for parking |
| `/mySlot` | Retrieve assigned parking slot |
| `/pendingPayment` | View pending payment status |
| `/myDetails` | Get user profile information |

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. Fork this repository
2. Create a new branch:
   ```bash
   git checkout -b files
   ```
3. Commit your changes:
   ```bash
   git commit -m 'files'
   ```
4. Push to the branch:
   ```bash
   git push origin 
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## 📮 Support

- **📧 Email:** [k.b.ravindusankalpaac@gmail.com](mailto:k.b.ravindusankalpaac@gmail.com)  
- **🐞 Bug Reports:** [GitHub Issues](https://github.com/K-B-R-S-W/SLTC_Parking_Management_System/issues)  
- **📚 Documentation:** See the project [Wiki](https://github.com/K-B-R-S-W/SLTC_Parking_Management_System/wiki)  
- **💭 Discussions:** Join the [GitHub Discussions](https://github.com/K-B-R-S-W/SLTC_Parking_Management_System/discussions)

---

## ⭐ Support This Project

If you find this project helpful, please consider giving it a **⭐ star** on GitHub!
