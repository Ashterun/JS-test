// Input

function fun1() {
    let chbox = document.getElementById('one');

    if (chbox.checked) {
        alert('Выбран');
    } else {
        alert('Не выбран');
    }
}

function fun2() {
    let radi = document.getElementsByName('r1');

    for (let i = 0; i < radi.length; i++) {
        if(radi[i].checked) {
            alert(`Выбран ${i} элемент`);
        }
    }
}

// Select

function fun3() {
    let sel = document.getElementById('mySelect').selectedIndex;
    let options = document.getElementById('mySelect').options;
    
    alert(`Выбран ${options[sel].text}`);
}

// Generator

function fun4() {
    let rng = document.getElementById('r1');
    let div = document.getElementById('test');

    div.style.width = rng.value + 'px';
}

function fun5() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;

    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');

    let block = document.getElementById('block');
    
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = 
    rtl + 'px ' + 
    rtr + 'px ' + 
    rbr + 'px ' + 
    rbl + 'px ';
}

// Menu

document.getElementById('nav').onmouseover = function(event) {
    let target = event.target;

    if (target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onmouseover = function(event) {
    let target = event.target;
    console.log(event.target);

    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    let menu = document.getElementById('nav');
    let subm = document.getElementsByClassName('submenu');

    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}

// Tabs

let tab;
let tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');

        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event) {
    let target = event.target;

    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        
        tab[b].classList.add('whiteborder')
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

// Modal

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Animation

function myMove() {
    let elem = document.getElementById('myAnimation');
    let pos = 0;
    let id = setInterval(frame, 10)

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

// Slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

// Filter

function myFunction() {
    let input,
    filter,
    ul,
    li,
    a,
    i;

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUl');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

// Calculator

function plus() {
    let num1,
    num2,
    result

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function minus() {
    let num1,
    num2,
    result

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function multiply() {
    let num1,
    num2,
    result

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

// Modal img

let myModal = document.getElementById('myModal1');
let img = document.getElementById('myImg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');

img.onclick = function() {
    myModal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

let span1 = document.getElementsByClassName('close1')[0];

span1.onclick = function() {
    myModal.style.display = 'none';
}

// Progress bar

function move() {
    let elem = document.getElementById('myBar');
    let width = 10;
    let id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById('label').innerHTML = width * 1 + '%';
        }
    }
}

// Popup

function myFunction1() {
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

// Accordion

let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    }
}

// Converter

function moneyConverter(valNum) {
    document.getElementById('outputrub').innerHTML = valNum * 100;
}

// To Do

/*let myNodeList = document.getElementsByTagName('li');
let i1;

for (i1 = 0; i1 < myNodeList.length; i1++) {
    let span1 = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    
    span1.className = 'close2';
    span1.appendChild(txt);
    myNodeList[i1].appendChild(span1);
}

let close = document.getElementsByClassName('close2');
let i2;

for (i2 = 0; i2 < close.length; i2++) { 
    close[i2].onclick = function() {
        let div1 = this.parentElement;
        div1.style.display = 'none';
    }
}

let list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li1 = document.createElement('li');
    let inputValue = document.getElementById('myInput');
    let t = document.createTextNode(inputValue);

    li1.appendChild(t);

    if (inputValue === '') {
        alert('Поле не может быть пустым');
    } else {
        document.getElementById('myUl1').appendChild('li1');
    }
}

document.getElementById('myInput1').value = '';

let span1 = document.createElement('span');
let txt = document.createTextNode('\u00D7');

span1.className = 'close2';
span1.appendChild(txt);
li1.appendChild(span1);

for (i2 = 0; i2 < close.length; i2++) { 
    close[i2].onclick = function() {
        let div1 = this.parentElement;
        div1.style.display = 'none';
    }
}*/

// Toggle

function myFunction2() {
    let x = document.getElementById('myDiv');

    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

let close = document.getElementsByClassName('closeBtn');
let i1;

for (i1 = 0; i1 < close.length; i1++) {
    close[i1].onclick = function() {
        let div1 = this.parentElement;
        div1.style.opacity = '0';
        
        setTimeout(function() {
            div1.style.display = 'none';
        }, 600)
    }
}

