let currentIndex = 0;
const menuItems = document.querySelectorAll('.menu-item');

// Handle clicks on menu items
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        menuItems[currentIndex].classList.remove('selected'); // Remove selected class from currently selected item
        currentIndex = index; // Update the current index
        item.classList.add('selected'); // Add selected class to clicked item
    });
});

// Handle keyboard navigation
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        menuItems[currentIndex].classList.remove('selected');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : menuItems.length - 1;
        menuItems[currentIndex].classList.add('selected');
    } else if (event.key === 'ArrowDown') {
        menuItems[currentIndex].classList.remove('selected');
        currentIndex = (currentIndex < menuItems.length - 1) ? currentIndex + 1 : 0;
        menuItems[currentIndex].classList.add('selected');
    }
});
