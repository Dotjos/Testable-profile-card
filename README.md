# 🪪 HNG – Profile Card

An accessible, responsive, and testable **multi-page website** built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.  
This project expands on **Stage 0 (Profile Card)** by adding **About Me** and **Contact Us** pages — featuring form validation, accessibility best practices, and dynamic navigation highlighting.

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
- ✅ Auto-highlight active navigation link using JavaScript
- ✅ Contact form with full validation and accessible error messages
- ✅ Keyboard-navigable UI with visible focus states
- ✅ Consistent visual design and modular code

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

```
profile-card/
profile-card/
├── index.html
├── about.html
├── contact.html
├── styles/
│   ├── style.css
│   ├── about.css
│   └── contact.css
├── scripts/
│   ├── script.js
│   └── contact.js
├── assets/
│   └── Ibiwumi_Joseph_Oladotun.jpg
└── README.md
```

---

## 🧩 Data Test IDs

All visible elements include `data-testid` attributes for automated testing as required:

🪪 Profile Card Page (index.html)

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

🙋‍♂️ About Me Page (about.html)

| Section                 | Data Test ID             |
| ----------------------- | ------------------------ |
| Bio                     | `test-about-bio`         |
| Goals in program        | `test-about-goals`       |
| Areas of low confidence | `test-about-confidence`  |
| Note to future self     | `test-about-future-note` |
| Extra thoughts          | `test-about-extra`       |

---

📬 Contact Page (contact.html)

| Field Data      | Data Test ID                 |
| --------------- | ---------------------------- |
| Full name       | `test-contact-name`          |
| Email           | `test-contact-email`         |
| Subject         | `test-contact-subject`       |
| Message         | `test-contact-message`       |
| Submit button   | `test-contact-submit`        |
| Error – Name    | `test-contact-error-name`    |
| Error – Email   | `test-contact-error-email`   |
| Error – Subject | `test-contact-error-subject` |
| Error – Message | `test-contact-error-message` |
| Success message | `test-contact-success`       |

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dotjos/Testable-profile-card
   cd profile-card
   Open the project
   Simply open the index.html file in your browser.
   ```

(Optional) Use a live server for hot reload:

```bash
npx live-server
```

## 💻 Implementation Notes

- The **Profile Page** displays the current time dynamically using JavaScript (`Date.now()`).
  The current time is generated using:

```js
document.getElementById("user-time").textContent = Date.now();
```

- **Navigation** links connect all three pages (`index.html`, `contact.html`, and `about.html`).
- The **Contact Page** includes custom JavaScript validation:
  - Checks all required fields before submission.
  - Displays per-field error messages tied via `aria-describedby`.
  - Shows a success confirmation when validation passes.
- The **About Page** is fully semantic, using `<main>` and `<section>` elements with descriptive headings.
- Separate CSS files (`style.css`, `contact.css`, `about.css`) manage styling per page.
- All elements include `data-testid` attributes for testing and accessibility.

---

🧾 Form Validation & Accessibility
✅ Form Validation Rules

-All fields are required.

-Email must follow a valid format → name@example.com.

-Message must contain at least 10 characters.

-Displays per-field error messages and a success confirmation after a valid submission.

♿ Accessibility Guidelines

-Each `<input/>` has a linked label using the for attribute (e.g., `<label for="email">Email</label>`).

-Error messages are tied to inputs using aria-describedby for screen reader support.

-All form elements are keyboard-accessible (focusable and navigable via Tab).

Layout adjusts:

-Mobile: stacked vertically

-Tablet & Desktop: avatar on the left, text on the right

👨🏽‍💻 Author
Oladotun Joseph
Frontend Developer | HNG Internship 2025

🏁 Acknowledgment
Special thanks to the HNG Internship Team for the learning opportunity and to all mentors for their guidance.

📜 License
This project is licensed under the MIT License — you’re free to use and modify with attribution.
