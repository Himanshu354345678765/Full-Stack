const output = document.getElementById("output");

function writeOutput(data) {
  output.textContent = JSON.stringify(data, null, 2);
}

async function request(url, method, body) {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("signupName").value,
    email: document.getElementById("signupEmail").value,
    password: document.getElementById("signupPassword").value,
  };

  try {
    const data = await request("/api/auth/signup", "POST", payload);
    writeOutput(data);
  } catch (error) {
    writeOutput({ error: error.message });
  }
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value,
  };

  try {
    const data = await request("/api/auth/login", "POST", payload);
    writeOutput(data);
  } catch (error) {
    writeOutput({ error: error.message });
  }
});

document.getElementById("checkUserBtn").addEventListener("click", async () => {
  try {
    const res = await fetch("/api/auth/me");
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Unauthorized");
    }

    writeOutput(data);
  } catch (error) {
    writeOutput({ error: error.message });
  }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    const data = await request("/api/auth/logout", "POST");
    writeOutput(data);
  } catch (error) {
    writeOutput({ error: error.message });
  }
});
