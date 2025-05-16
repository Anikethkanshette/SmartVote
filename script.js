
const admins = [
  { username: 'aniketh', password: 'Aniketh@12', role: 'super_admin' },
  { username: 'sujit', password: 'Sujit@12', role: 'admin' },
  { username: 'vaibhav', password: 'Vaibhav@12', role: 'admin' }
];

function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const matchAdmin = admins.find(u => u.username === username && u.password === password && u.role === role);
  if (matchAdmin) {
    msg.innerText = "Login successful";
    if (role === "super_admin") window.location.href = "super_admin.html";
    if (role === "admin") window.location.href = "admin.html";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password && u.role === "voter" && u.status === "approved");
  if (role === "voter" && user) {
    window.location.href = "voter.html";
    return;
  }

  msg.innerText = "Invalid credentials or not approved.";
}

function register() {
  const username = document.getElementById("regUsername").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;
  const prn = document.getElementById("regPRN").value.trim();
  const branch = document.getElementById("regBranch").value.trim();
  const msg = document.getElementById("regMsg");

  // PRN validation for 14 or 15 digits
  if (prn.length !== 14 && prn.length !== 15 || isNaN(prn)) {
    msg.innerText = "PRN must be exactly 14 or 15 digits.";
    return;
  }

  if (!username || !password || !prn || !branch) {
    msg.innerText = "All fields required.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.prn === prn)) {
    msg.innerText = "PRN already exists.";
    return;
  }

  users.push({ username, password, prn, branch, role, status: "pending" });
  localStorage.setItem("users", JSON.stringify(users));
  msg.innerText = "Registered. Awaiting approval.";
}
