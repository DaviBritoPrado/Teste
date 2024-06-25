const nome = document.getElementById('nome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const interesse = document.getElementById('interesse');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
})

nome.addEventListener('change', function() {
  const nomeValue = nome.value;
  console.log(nomeValue);
})

emailInput.addEventListener('change', function() {
  const email = emailInput.value;
  console.log(email);
})

passwordInput.addEventListener('change', function() {
  const password = passwordInput.value
  console.log(password);
})

cpf.addEventListener('change', function() {
  const cpfValue = cpf.value
  console.log(cpfValue);
})

endereco.addEventListener('change', function() {
  const enderecoValue = endereco.value
  console.log(enderecoValue);
})

interesse.addEventListener('change', function() {
  const interesseValue = interesse.value
  console.log(interesseValue);
})

const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', async function() {
  const result = await fetch('https://backend-inova-one.vercel.app/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nome.value,
      email: emailInput.value,
      password: passwordInput.value,
      cpf: cpf.value,
      address: endereco.value,
      interest: interesse.value
    })
  });
  console.log(result)

  const data = await result.json();

  console.log(data);
  console.log('clicou no botão')
})