"use strict";
//const person: {
//  name: string; 
// age: number; 
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Rose',
//     age: 29,
//     hobbies: ['Reading', 'Writing'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_only"] = 1] = "read_only";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
;
var person = {
    name: 'Rose',
    age: 29,
    hobbies: ['Reading', 'Writing'],
    role: Role.admin
};
// person.role.push('admin')
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
