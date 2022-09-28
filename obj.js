const target = {
    firstName: "Eko"
};
const source = {
    lastName: "Khannedy"
};

Object.assign(target, source);
console.info(target);
console.info(source);

const person = {
    firstName: "Eko",
    lastName: "Khannedy"
};

const personNan = {
    firstname : "Nope",
    lastnama : "Gil"
};

console.info(Object.values(person));
console.info(Object.getOwnPropertyNames(person));
console.info(Object.hasOwnProperty(personNan.firstname))

const buz = {
    fog: 'stack',
  };
  
  for (const name in buz) {
    if (buz.hasOwnProperty(name)) {
      console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
    } else {
      console.log(name); // toString or something else
    }
  }
