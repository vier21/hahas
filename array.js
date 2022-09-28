//foreeach push() shift() pop()

//search
const source = ["anjing" , "kudA" , "bAbi", "SaPi"]

console.log(source.find((value) => {
    const src = value.toLowerCase();
    return src === "sapi";
}));

console.log(source);

const newSrc = source.map((value) => {
    return value.toLocaleLowerCase();
})

const newSrc2 = source.map( value => value.toUpperCase());

console.log(newSrc);
console.log(newSrc2);

console.log(source.reduce(before, curr => before + " " + curr));