const container = document.querySelector('.container')
const button = document.querySelector('.down')
const lengthg = container.querySelectorAll('main').length
const closerotation = document.querySelectorAll('.close')
const openrotation = document.querySelectorAll('.open')
const active = document.querySelectorAll('.rotater')
const navbar = document.querySelectorAll('.navbar')
let actives = 1
callloader();

function callloader() {
    openrotation[0].addEventListener('click', addroter)
    closerotation[0].addEventListener('click', closeroter)
    button.addEventListener('click', () => Changeslide('up'));


}


const Changeslide = (direction) => {

    const hiegh = container.clientHeight
    console.log(hiegh, '+++++');
    if (direction === 'up') {
        actives++
        console.log(actives, "====");
        if (actives > lengthg - 1) {
            actives = 0
        }
    }
    console.log(actives * hiegh, ')))))))))))))))');
    container.style.transform = `translateY(-${actives * hiegh }px)`
}

function addroter() {
    active[0].classList.add('activerot');
    navbar[0].classList.add('rotate');
    openrotation[0].classList.add('openrotate');
    closerotation[0].classList.add('closerotate');

    console.log(active[0].classList);
}

function closeroter() {
    active[0].classList.remove('activerot')
    navbar[0].classList.remove('rotate');
    console.log(active[0].classList);
}
  