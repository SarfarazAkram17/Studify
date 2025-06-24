# 🎓 Studify — Assignment Management Platform

Studify is a modern, full-stack, Firebase-authenticated assignment management web application built for collaborative learning. Users can **create**, **submit**, and **evaluate** assignments with secure access control, seamless UI, and responsive design.

🌐 **Live Site**: https://assignment-11-sarfaraz-akram.netlify.app

---

## 🚀 Features Overview

### 🔐 Authentication & Security
- Firebase Authentication (Email/Password & Google Sign-In)
- Protected routes and secure API calls
- UID-based resource ownership checks

### 📝 Assignments
- Create, update, and delete assignments
- Upload thumbnail, set difficulty, due date, and total marks
- View assignment details
- Filter, and search assignments

### 📤 Submissions
- Submit assignments with Google Docs links & optional notes
- View attempted assignments with status, obtained marks, and feedback
- One unique submission per assignment per user

### ✅ Evaluation
- Evaluate all pending submissions (excluding self-submitted)
- Grade assignments with marks and feedback
- Automatically updates status to "completed" after grading

### 🌗 UI & UX
- Theme toggle (Dark/Light)
- SweetAlert confirmation modals
- Lottie animations for loading
- Toast notifications
- Fully responsive on all devices

---

## 📦 Tech Stack

| Layer      | Technology                               |
|------------|------------------------------------------|
| Frontend   | React v19.1.0, Tailwind CSS v4.1.8, DaisyUI v5.0.43             |
| Backend    | Node.js, Express.js, MongoDB             |
| Auth       | Firebase Authentication v11.9.0                  |
| Animation  | Lottie React v2.4.1, Framer Motion v12.16.0                    |
| Deployment | Netlify (Frontend), Vercel (Backend)     |

---

## 📦 NPM Packages Used

| Package             | Version    | Purpose                                      |
|---------------------|------------|----------------------------------------------|
| Tailwindcss         | 4.1.8      | Utility-first CSS framework                  |
| Daisyui             | 5.0.43     | Component library for Tailwind CSS           |
| React-icons         | 5.5.0      | Use required icons                           |
| React-toastify      | 11.0.5     | Toast notifications                          |
| React-tooltip       | 5.28.1     | Tooltip support                              |
| React-datepicker    | 8.4.0      | Elegant date picker UI                       |
| Framer-motion       | 12.16.0    | Animation and transition framework           |
| Lottie-react        | 2.4.1      | Lottie animations                            |
| Sweetalert2         | 11.22.0    | Pop-up confirmations                         |

# 🛠️ Getting Started 
git clone https://github.com/SarfarazAkram17/Studify.git
cd Studify
