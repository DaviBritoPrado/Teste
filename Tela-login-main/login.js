const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

email.addEventListener('change', () => {
  const email = emailInput.value;
  console.log(email);
});

const password = senha.addEventListener('change', () => {
  const senha = passwordInput.value;
  console.log(senha);
});

btnLogin.addEventListener('click', async () => {
  const result = await fetch('https://backend-inova-jvvictorls-projects.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: senha.value
    })
  })

  const data = await result.json();
  console.log(data);

  window.alert('Login efetuado com sucesso!')

  window.location.href('https://teste-omhy.vercel.app/');
});