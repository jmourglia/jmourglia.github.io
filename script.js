document.getElementById('form').addEventListener('submit', () => {
  const n = document.getElementById('name').value;
  const e = document.getElementById('email').value;
  const m = document.getElementById('msg').value;
  window.location.href = `mailto:jmourglia@gmail.com?subject=Contacto portfolio de ${encodeURIComponent(n)}&body=${encodeURIComponent(m + '\n\n— ' + e)}`;
});
