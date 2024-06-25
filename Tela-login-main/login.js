const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');

email.addEventListener('change', () => {
  email = email.value;
  console.log(email);
});

const password = senha.addEventListener('change', () => {
  senha = senha.value;
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