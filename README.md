<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&color=00C9FF&center=true&vCenter=true&width=700&lines=Encrypted+Cloud+Prescription;Authentication+System+🔐" alt="Typing SVG" />

<br/>

> **Secure. Smart. Cloud-Powered.**  
> A cloud-native system that authenticates medical prescriptions using QR codes and encrypted cloud storage — making healthcare verification tamper-proof and instant.

<br/>

[![AWS](https://img.shields.io/badge/AWS-Cloud_Powered-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![Lambda](https://img.shields.io/badge/Lambda-Serverless-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)](https://aws.amazon.com/lambda/)
[![S3](https://img.shields.io/badge/Amazon_S3-Storage-569A31?style=for-the-badge&logo=amazons3&logoColor=white)](https://aws.amazon.com/s3/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Frontend-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 🧠 What Is This?

Fake prescriptions are a real problem in healthcare. This system solves it by **encrypting and storing prescriptions on the cloud**, then generating a **unique QR code** or **verification link** for each one — so pharmacists or hospitals can verify authenticity in seconds.

No more paper fraud. No more manual lookups. Just scan and confirm. ✅

---

## 🎬 Live Demo

> ⚠️ **Live instance is currently paused** to avoid AWS charges. All demos below are recorded walkthroughs.

### 📋 Doctor Uploads Prescription + Link Verification

*How a doctor uploads patient info & prescription, and how verification works via a shareable link*

![Demo – Upload & Link Verification](./demo-upload-and-link.gif)

---

### 📱 QR Code Verification

*Scan the QR code to instantly verify prescription authenticity*

![Demo – QR Code Verification](./demo-qr-verification.gif)

---

## ⚙️ System Architecture

```
Doctor / User
     │
     ▼
[ Frontend (HTML/CSS/JS) ]
     │
     ▼
[ API Gateway ]  ◄── Entry point for all requests
     │
     ▼
[ AWS Lambda ]   ◄── Serverless logic & encryption
     │
     ▼
[ AWS EC2 ]      ◄── Core processing server
     │
     ▼
[ Amazon S3 ]    ◄── Encrypted prescription storage
     │
     ▼
[ QR Code / Link Generated ]
     │
     ▼
[ Pharmacist / Verifier scans or opens link → ✅ Verified ]
```

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🔐 **Encrypted Storage** | Prescriptions are securely stored in Amazon S3 |
| 📷 **QR Authentication** | Each prescription gets a unique, scannable QR code |
| 🔗 **Link Verification** | Share a verification link for remote or online checks |
| ☁️ **Cloud-Native** | Fully serverless & scalable via AWS infrastructure |
| ⚡ **Instant Response** | Lambda ensures near real-time verification |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| API | Amazon API Gateway |
| Compute | AWS EC2 |
| Serverless Logic | AWS Lambda |
| Storage | Amazon S3 |
| Authentication | QR Code + Unique Prescription ID |

---

## 🚀 Getting Started

> **Prerequisites:** You need an AWS account with the following services configured.

### AWS Services to Set Up

```
✅ EC2 Instance      – Application server
✅ Lambda Function   – Prescription processing logic  
✅ API Gateway       – REST API endpoint
✅ S3 Bucket         – Encrypted file storage
```

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/encrypted-cloud-prescription.git

# 2. Configure your AWS credentials
aws configure

# 3. Deploy Lambda function (from /lambda directory)
# Upload the function zip via AWS Console or CLI

# 4. Update API Gateway endpoint in frontend config

# 5. Open index.html or deploy to EC2
```

> 📌 Refer to `architecture-notes.md` *(if available)* for detailed AWS setup steps.

---

## ⚠️ Important Note

This project uses **paid AWS services** (EC2, Lambda, S3, API Gateway).  
The live demo is **currently disabled** to prevent unnecessary cloud charges.  
To run locally, configure all AWS resources and update the endpoint URLs in the frontend.

---

## 👨‍💻 Author

**Ruturaj** — B.Tech Computer Engineering, PCCoE  
Generative AI Intern @ Brainovision Solutions | SY Coordinator, PCCoE ACM Student Chapter

---

<div align="center">

*Built with ☁️ and 🔐 to make healthcare verification smarter.*

</div>
