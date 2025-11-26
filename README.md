

# 📰 **Dragon News – React Firebase News Portal**

A modern news portal built with **React**, **Firebase Authentication**, **React Router (Data API)**, and **Tailwind CSS + DaisyUI**.
This project focuses on **category-based news**, **authentication**, **latest ticker**, and a clean UI/UX.

---

## ⭐ **Features**

### 🔐 **Authentication**

* 👤 Email & Password Registration
* 🔑 Secure Login
* 🚪 Logout
* ✍️ Update User Profile
* 🔄 Persistent auth using `onAuthStateChanged`

### 📰 **News System**

* 📂 Category-wise news filtering
* 🗞️ Single news details page
* 🏷️ Highlighted trending news
* 🕒 Live latest-news ticker
* ✂️ Auto text-slice with "Read More" option
* 🖼️ Beautiful news cards

### 🎨 **UI / UX**

* 💎 Tailwind CSS styling
* 🎛️ DaisyUI components
* 📱 Fully responsive layout
* 🧭 Clean navigation (Home, About, Career, News)

### 🌐 **Routing (React Router v7 Data API)**

* 📡 Loaders used for fetching category-based data
* 🧩 Layout routes & nested routing
* 🔐 Private route for protected pages

### ⚙️ **State Management**

* 🧠 Context API (`AuthContext`) for auth state
* 🔄 Global loading & user state

---

## 📦 **Tech Stack & Libraries**

| Technology                          | Description                  |
| ----------------------------------- | ---------------------------- |
| ⚛️ **React**                        | Frontend UI library          |
| 🔥 **Firebase Auth**                | Authentication system        |
| 🛣️ **React Router (core package)** | Routing + loaders            |
| 🎨 **Tailwind CSS**                 | Utility-first styling        |
| 💠 **DaisyUI**                      | Pre-styled UI components     |
| 📅 **date-fns**                     | Time formatting              |
| 📡 **Axios / Fetch**                | API requests                 |
| 🪝 **React Hooks**                  | State & lifecycle management |

---

## 🔧 **Firebase Authentication Functions Used**

* `createUserWithEmailAndPassword()`
* `signInWithEmailAndPassword()`
* `signOut()`
* `updateProfile()`
* `onAuthStateChanged()`

---

## 📁 **Project Structure (Simplified)**

```
src/
│── Components/
│    ├── NewsCard/
│    ├── Header/
│    ├── LatestNews/
│── Pages/
│    ├── Home/
│    ├── About/
│    ├── Career/
│    ├── NewsDetails/
│── Context/
│    └── AuthProvider.jsx
│── Firebase/
│    └── firebase.config.js
│── Routes/
│    └── router.jsx
```

---

## 🚀 **How to Run Locally**

```sh
git clone <your-repo-url>
cd dragon-news
npm install
npm run dev
```

---

## 🔑 **Environment Setup**

Create a `.env.local` file:

```
VITE_apiKey=XXXX
VITE_authDomain=XXXX
VITE_projectId=XXXX
VITE_storageBucket=XXXX
VITE_messagingSenderId=XXXX
VITE_appId=XXXX
```

---




---
## 🤝 Live link
[Live Website](https://dragon-news-breaking-41c10.web.app/)


---

## 🤝 **Contributions**

Pull requests are welcome!

---

## 📝 **License**

MIT License.


