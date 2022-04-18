// const arr = ['PES', 'eFootBall', 'FIFA', 'FO4']

// let [a, b, c, d] = arr

// console.log(a, c)

// const fieldName = 'game';
// const fieldPrice = 'price';

// let obj = {
//     [fieldName]: 'Pes eFootBall',
//     [fieldPrice]: 1000
// }

// console.log(obj)

const $=document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const panes = $$('.pane-item')

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        this.classList.add('active');
    }
});