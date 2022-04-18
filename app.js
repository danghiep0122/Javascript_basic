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

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const panes = $$('.pane-item')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')



console.log([tabActive]);

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.pane-item.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
        
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';    
    }
});