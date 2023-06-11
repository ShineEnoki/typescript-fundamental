import { Invoice } from "./classic/Invoice.js";
import { ListTemplate } from "./classic/ListTemplate.js";
import { Payment } from "./classic/Payment.js";
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(b: number): number;
// }
// const me: IsPerson = {
//     name: 'Paing Takhon',
//     age: 78,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number) : number{
//         console.log('I spent', amount);
//         return amount   
//     }
// }
// const invOne = new Invoice('Mario', 'wrok on', 500)
// const invTwo = new Invoice('Luigi', 'wrok on', 5000)
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices);
// invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()) )
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'baba', age: 'another life' });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'Barbu',
    data: 'hello',
};
const docFour = {
    uid: 2,
    resourceName: 'string array',
    data: ['hello', 'world']
};
// console.log(docThree, docFour);
//ENUM
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTIOR"] = 3] = "DIRECTIOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: 'hello',
};
const docSix = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ['hello', 'world']
};
// console.log(docFive, docSix);
