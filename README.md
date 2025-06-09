# 🗳️ SmartVote - Online Voting Portal

SmartVote is a browser-based voting platform built for institutions and academic organizations. It supports multiple user roles including Super Admins, Admins, Voters, and Candidates, offering a clean interface and basic role-based features.

## 🌐 Features

- Role-based login: Super Admin, Admin, Voter
- Voter and candidate registration with PRN validation
- Admin approval workflow
- Dashboards for each user type
- LocalStorage-based data persistence (demo mode)

## 👤 User Roles

### Super Admin
- Manages global election settings
- Approves admins and finalizes candidate lists

### Admin
- Handles branch-level elections
- Approves/rejects candidates and voters

### Voter
- Registers and logs in post-approval
- Votes, views candidates and election results

## 🧪 Tech Stack

- HTML5 / CSS3 / TailwindCSS
- JavaScript (Vanilla)
- Browser `localStorage` for temporary data

## 🚀 How to Use

1. Clone or download the project
2. Open `index.html` in a browser
3. Register as a voter or login with predefined roles (hardcoded in `script.js`)
4. Interact via dashboards based on your role

## ⚠️ Limitations

- No backend or database (demo only)
- All data is lost when browser storage is cleared
- Admin and candidate approvals are placeholder alerts

## 📝 License

This project is licensed under the terms of the [LICENSE](./LICENSE).

---

> Built with simplicity for educational and prototype use cases.
