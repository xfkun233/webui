// Function to toggle dark mode
const toggleDarkMode = () => {
  const html = document.querySelector('html');
  const currentTheme = html.getAttribute('data-bs-theme');

  if (currentTheme === 'dark') {
    html.removeAttribute('data-bs-theme');
    darkModeToggle.textContent = '暗黑主题';
    localStorage.setItem('theme', 'light'); // Store the theme in localStorage
  } else {
    html.setAttribute('data-bs-theme', 'dark');
    darkModeToggle.textContent = '明亮主题';
    localStorage.setItem('theme', 'dark'); // Store the theme in localStorage
  }
};

const darkModeToggle = document.getElementById('darkModeToggle');

// Check if theme preference is stored in localStorage
const storedTheme = localStorage.getItem('theme');
const html = document.querySelector('html');

if (storedTheme) {
  html.setAttribute('data-bs-theme', storedTheme);
  if (storedTheme === 'dark') {
    darkModeToggle.textContent = '明亮主题';
  } else {
    darkModeToggle.textContent = '暗黑主题';
  }
} else {
  // If no preference is stored, default to dark mode
  html.setAttribute('data-bs-theme', 'dark');
  darkModeToggle.textContent = '明亮主题';
  localStorage.setItem('theme', 'dark');
}

darkModeToggle.addEventListener('click', toggleDarkMode);