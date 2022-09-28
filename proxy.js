const target = {};

const proxy = new Proxy(target, {
    get : (target,property) => {
        console.log(`Access property : ${property}`)
        return target[property]
    },
    set : (target,property,value) => {
        console.log(`Mengubah Property ${property} menjadi ${value}`)
        target[property] = value;
    }
});

proxy.firstname = "Eko";
proxy.lastName = "Marco";

console.log(proxy.firstname);
console.log(proxy.lastName);
console.log(target);