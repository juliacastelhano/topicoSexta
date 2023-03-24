const n1 = Math.floor(Math.random() * 100);
const n2 = Math.floor(Math.random() * 100);

console.log(n1);
console.log(n2);

if(n1 > n2) {
    console.log(`O número ${n1} é maior que ${n2}`);
}
 else console.log(`O número ${n2} é maior que ${n1}`);