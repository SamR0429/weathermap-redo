
const themeLink = document.createElement('link');
themeLink.rel = 'stylesheet';
themeLink.href = 'path-to-light-theme.css'; // Adjust the path to your actual CSS file for the light theme
document.head.appendChild(themeLink);

document.querySelector('.btn-switch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        themeLink.href = 'path-to-light-theme.css';
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        themeLink.href = 'path-to-dark-theme.css';
    }
});
