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

enum Role {admin, read_only, author};

const person = {
    name: 'Rose',
    age: 29,
    hobbies: ['Reading', 'Writing'],
    role: Role.admin
};

// person.role.push('admin')

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}