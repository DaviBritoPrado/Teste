const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const telefoneInput = document.getElementById('telefone');
const usuarioInput = document.getElementById('usuario');

emailInput.addEventListener('change', function() {
  const email = emailInput.value;
  console.log(email);
})

passwordInput.addEventListener('change', function() {
  const password = passwordInput.value
  console.log(password);
})

telefoneInput.addEventListener('change', function() {
  const telefone = telefoneInput.value
  console.log(telefone);
})

usuarioInput.addEventListener('change', function() {
  const usuario = usuarioInput.value
  console.log(usuario);
})