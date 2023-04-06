const eshikon = { name: 'eshikon.com', job: 'traning institute' }
// console.log(eshikon.name);

const person = new Object();
// console.log(person);

const metarial = Object.create(eshikon);
// console.log(metarial.job);


class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const pepo = new people('Papraraz', 55)
console.log(pepo);