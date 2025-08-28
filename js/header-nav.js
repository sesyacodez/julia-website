document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'darkModeToggle') {
    document.body.classList.toggle('dark-mode');
  }
});