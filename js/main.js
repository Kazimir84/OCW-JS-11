// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let favoritesKeyLS = 'favorites';
localStorage.setItem(favoritesKeyLS, JSON.stringify([]));

users.forEach(function (user) {
    let divUsers = document.createElement('DIV');
    let divUser = document.createElement('DIV');
    let btn = document.createElement('BUTTON');
    btn.innerText = 'Add to Favorites';
    divUser.innerText = `Name: ${user.name}  Age: ${user.age}  Status: ${user.status}`;
    divUsers.append(divUser, btn);
    document.body.append(divUsers);

    btn.addEventListener('click', function () {
        let favorites = JSON.parse(localStorage.getItem(favoritesKeyLS));
        favorites.push(user);
        localStorage.setItem(favoritesKeyLS, JSON.stringify(favorites));
    });
});

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
























