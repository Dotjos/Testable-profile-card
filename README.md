# 🪪 HNG Stage 0 – Profile Card

A simple, accessible, and responsive **Profile Card** built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.  
This project was created as part of the **HNG Internship (Stage 0 - Frontend Track)** to demonstrate mastery of HTML semantics, accessibility, responsiveness, and basic interactivity.

---

## 🚀 Live Demo

🔗 **Live Preview:** [View on Netlify](https://profile-card-stage-0-hng.netlify.app/)  
🔗 **GitHub Repo:** [View Repository](https://github.com/Dotjos/Testable-profile-card)

---

## 🧩 Features

- ✅ Fully semantic and accessible HTML structure
- ✅ Responsive layout (mobile-first, adapts across devices)
- ✅ Dynamically displays current time in milliseconds (`Date.now()`)
- ✅ Avatar image with proper `alt` attribute
- ✅ Social links open in a new tab with `rel="noopener noreferrer"`
- ✅ Keyboard navigable (focus styles visible)
- ✅ Clean folder structure and maintainable code

---

## 🧠 Tech Stack

| Technology                   | Purpose                        |
| ---------------------------- | ------------------------------ |
| **HTML5**                    | Semantic and accessible markup |
| **CSS3 (Flexbox/Grid)**      | Responsive and modern styling  |
| **Vanilla JavaScript (ES6)** | Dynamic time rendering         |
| **Git+Github / Netlify**     | Version control & deployment   |

---

## 📁 Folder Structure

profile-card/
├── index.html
├── styles.css
├── script.js
├── assets/
│ └── Ibiwumi_Joseph_Oladotun.jpg
└── README.md

---

## 🧩 Data Test IDs

All visible elements include `data-testid` attributes for automated testing as required:

| Element                | Data Test ID                 |
| ---------------------- | ---------------------------- |
| Profile card container | `test-profile-card`          |
| User name              | `test-user-name`             |
| User bio               | `test-user-bio`              |
| Current time           | `test-user-time`             |
| Avatar image           | `test-user-avatar`           |
| Social links wrapper   | `test-user-social-links`     |
| Individual social link | `test-user-social-<network>` |
| Hobbies list           | `test-user-hobbies`          |
| Dislikes list          | `test-user-dislikes`         |

---

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/profile-card.git
   cd profile-card
   Open the project
   Simply open the index.html file in your browser.
   ```

(Optional) Use a live server for hot reload:

```bash
npx live-server
```

💻 Implementation Notes
The current time is generated using:

```js
document.getElementById("user-time").textContent = Date.now();
```

Layout adjusts:

Mobile: stacked vertically

Tablet & Desktop: avatar on the left, text on the right

👨🏽‍💻 Author
Oladotun Joseph
Frontend Developer | HNG Internship 2025

🏁 Acknowledgment
Special thanks to the HNG Internship Team for the learning opportunity and to all mentors for their guidance.

📜 License
This project is licensed under the MIT License — you’re free to use and modify with attribution.
