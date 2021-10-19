import { Invoice } from './Classes/Invoice.js';
import { Payment } from './Classes/Payment.js';
import { ListTemplate } from './Classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc.format());
    list.render(doc, type.value, 'end');
});
