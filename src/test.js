var a;
var b;
var c;
var d;
var user = {
    name: "Luca",
    surname: "Leyva",
    age: 37,
    isAdmin: true
};
var user2 = {
    name: "Patrick",
    surname: "Manelski",
    age: 37,
    isAdmin: true,
    permissions: ["Manager", "Developer"]
};
var usersArray = [user, user, user];
function getFirst(arr) {
    return arr[0];
}
getFirst(usersArray);
var multiplication = function (a, b) { return a * b; };
var addition = function (a, b) { return a + b; };
