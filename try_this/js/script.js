const restaurants = [
    {
        name: 'Pasta House',
        menu: ['Spaghetti', 'Lasagna', 'Ravioli']
    },
    {
        name: 'Burger Town',
        menu: ['Cheeseburger', 'Fries', 'Milkshake']
    },
    {
        name: 'Sushi Palace',
        menu: ['Sushi Roll', 'Sashimi', 'Miso Soup']
    }
];

window.onload = function() {
    const restaurantList = document.getElementById('restaurant-list');

    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.className = 'restaurant';

        const restaurantName = document.createElement('h2');
        restaurantName.textContent = restaurant.name;
        restaurantDiv.appendChild(restaurantName);

        const menuList = document.createElement('ul');
        restaurant.menu.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.textContent = item;
            menuList.appendChild(menuItem);
        });

        restaurantDiv.appendChild(menuList);
        restaurantList.appendChild(restaurantDiv);
    });
};

// Add the nav toggle code for the responsive hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
