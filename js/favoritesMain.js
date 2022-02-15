let favoritesKeyLS = 'favorites';
let favorites = JSON.parse(localStorage.getItem(favoritesKeyLS));

favorites.forEach(function (user) {
    let divUsers = document.createElement('DIV');
    let divUser = document.createElement('DIV');

    divUser.innerText = `Name: ${user.name}  Age: ${user.age}  Status: ${user.status}`;
    divUsers.append(divUser);
    document.body.append(divUsers);
});