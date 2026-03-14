# 🔐 Encrypted Cloud Prescription Authentication System

A **cloud-based medical prescription verification system** that ensures prescriptions are authentic using **QR codes, secure cloud storage, and serverless architecture**.

This system helps pharmacies, hospitals, and authorities **verify prescriptions instantly and prevent fraud.**

---

## 🚀 Project Overview

The **Encrypted Cloud Prescription Authentication System** allows doctors to upload prescriptions securely to the cloud.  
Each prescription is linked with a **unique QR code and ID**, enabling quick verification by pharmacies or users.

The system leverages **AWS cloud services** to provide a scalable and secure verification pipeline.

---

# 🎥 System Demo

## 👨‍⚕️ Doctor Upload & Verification via Link

This demo shows:
- Doctor uploading prescription
- Prescription stored securely in cloud
- Verification using a generated link

![Doctor Upload Demo](demo-upload.gif)

---

## 📱 Verification Using QR Code

This demo shows:
- Scanning the QR code
- System fetching prescription from cloud
- Authentication result displayed instantly

![QR Code Verification Demo](demo-qr-verification.gif)

---

# ☁️ System Architecture

```
User Uploads Prescription
        │
        ▼
    API Gateway
        │
        ▼
     AWS Lambda
        │
        ▼
      AWS EC2
        │
        ▼
   Amazon S3 Storage
        │
        ▼
  Verification Response
```

The architecture combines **serverless computing and cloud infrastructure** to ensure secure and fast prescription validation.

---

# 🛠️ Technologies Used

### ☁️ Cloud Services
- AWS EC2
- AWS Lambda
- AWS API Gateway
- Amazon S3

### 💻 Development
- HTML
- CSS
- JavaScript

### 🔐 Security
- QR Code Authentication
- Secure Cloud Storage

---

# ⭐ Key Features

- 🔒 Secure prescription storage in cloud
- 📱 QR Code based authentication
- 🔎 Manual prescription ID verification
- ☁️ Scalable cloud-based architecture
- ⚡ Fast verification response

---

# ⚙️ Setup Notes

To run this project fully, you must configure:

- AWS EC2 instance
- AWS Lambda function
- API Gateway endpoints
- Amazon S3 bucket

These cloud resources enable the **upload, storage, and verification pipeline**.

---

# 🌐 Live Demo

Currently **disabled** because the **AWS EC2 instance is turned off** to avoid cloud charges.

---

# 📌 Repository Contents

- Project source code
- Cloud architecture implementation
- Frontend verification interface
- Prescription upload module

---

# 👨‍💻 Author

**Ruturaj Warkad**

B.Tech Computer Engineering  
PCCOE

---

# 📜 License

This project is for **educational and demonstration purposes**.
