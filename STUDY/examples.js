function Person(name, email) {
  this.name = name;
  this.email = email;
  this.gender = "femail";
}

console.log(Person); // [Function: Person]
console.log(typeof Person); // function

let user1 = new Person("Lee", "aaa@mail.com");
let user2 = new Person("Kim", "bbb@mail.com");

console.log(user1); // Person { name: 'Lee', email: 'aaa@mail.com', gender: 'femail' }
console.log(
  `name: ${user1.name}, email: ${user1.emial}, gender: ${user1.gender}`
); // name: Lee, email: undefined, gender: femail
