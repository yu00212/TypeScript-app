const person: {
    name: string,
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'yota',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby)
}