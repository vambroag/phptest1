const textbox2Button = document.querySelector('.textbox2');
textbox2Button.addEventListener('click', () => {
    textbox2Button.classList.toggle('green-background');
});
const textbox3Button = document.querySelector('.textbox3');
textbox3Button.addEventListener('click', () => {
    textbox3Button.classList.toggle('green-background');
});
const textbox4Button = document.querySelector('.textbox4');
textbox4Button.addEventListener('click', () => {
    textbox4Button.classList.toggle('green-background');
});
const textbox5Button = document.querySelector('.textbox5');
textbox5Button.addEventListener('click', () => {
    textbox5Button.classList.toggle('green-background');
});
const textbox6Button = document.querySelector('.textbox6');
textbox6Button.addEventListener('click', () => {
    textbox6Button.classList.toggle('green-background');
});
const textbox7Button = document.querySelector('.textbox7');
textbox7Button.addEventListener('click', () => {
    textbox7Button.classList.toggle('green-background');
});
const textbox8Button = document.querySelector('.textbox8');
textbox8Button.addEventListener('click', () => {
    textbox8Button.classList.toggle('green-background');
});
const textbox9Button = document.querySelector('.textbox9');
textbox9Button.addEventListener('click', () => {
    textbox9Button.classList.toggle('green-background');
});


// 월화수목금토일 선택
const title1 = document.querySelector('#title1');
title1.addEventListener('click', () => {
    title1.classList.toggle('clicked');
});
const title2 = document.querySelector('#title2');
title2.addEventListener('click', () => {
    title2.classList.toggle('clicked');
});
const title3 = document.querySelector('#title3');
title3.addEventListener('click', () => {
    title3.classList.toggle('clicked');
});
const title4 = document.querySelector('#title4');
title4.addEventListener('click', () => {
    title4.classList.toggle('clicked');
});
const title5 = document.querySelector('#title5');
title5.addEventListener('click', () => {
    title5.classList.toggle('clicked');
});
const title6 = document.querySelector('#title6');
title6.addEventListener('click', () => {
    title6.classList.toggle('clicked');
});
const title7 = document.querySelector('#title7');
title7.addEventListener('click', () => {
    title7.classList.toggle('clicked');
});

// 밑에 월~일 선택
const title8 = document.querySelector('#title8');
title8.addEventListener('click', () => {
    title8.classList.toggle('clicked');
});
const title9 = document.querySelector('#title9');
title9.addEventListener('click', () => {
    title9.classList.toggle('clicked');
});
const title10 = document.querySelector('#title10');
title10.addEventListener('click', () => {
    title10.classList.toggle('clicked');
});
const title11 = document.querySelector('#title11');
title11.addEventListener('click', () => {
    title11.classList.toggle('clicked');
});
const title12 = document.querySelector('#title12');
title12.addEventListener('click', () => {
    title12.classList.toggle('clicked');
});
const title13 = document.querySelector('#title13');
title13.addEventListener('click', () => {
    title13.classList.toggle('clicked');
});
const title14 = document.querySelector('#title14');
title14.addEventListener('click', () => {
    title14.classList.toggle('clicked');
});

/*
const button1 = document.querySelector('.button1');
const textbox2Buttons = document.querySelectorAll('.textbox2, .textbox3, .textbox4, .textbox5');
const textbox3Buttons = document.querySelectorAll('.textbox6, .textbox7, .textbox8, .textbox9');
const bbttnnButtons = document.querySelectorAll('.bbttnn');
const radioOptions = document.querySelectorAll('input[name="option"]');
const selectElements = document.querySelectorAll('.category-1');


let gageiyong = [];
let geoljae = [];
let youngup = [];
let bindo = [];
let gorigori = [];


button1.addEventListener('click', function() {

let anySelectedTextbox2 = false;
textbox2Buttons.forEach(button => {
    if (button.classList.contains('green-background')) {
    anySelectedTextbox2 = true;
    gageiyong.push(button.value);
    }
});

let anySelectedTextbox3 = false;
textbox3Buttons.forEach(button => {
    if (button.classList.contains('green-background')) {
    anySelectedTextbox3 = true;
    geoljae.push(button.value);
    }
});

let anySelectedBbttnn = false;
bbttnnButtons.forEach(button => {
    if (button.classList.contains('clicked')) {
    anySelectedBbttnn = true;
    youngup.push(button.getAttribute('value'));
    }
});

let anySelected = false;
radioOptions.forEach(option => {
  if (option.checked) {
    anySelected = true;
    bindo.push(option.value);
  }
});

let hasSelectedCategory = false;
selectElements.forEach((selectElement) => {
    if (selectElement.value !== '미선택') {
        hasSelectedCategory = true;
        gorigori.push(selectElement.value);
    }
});

if (anySelectedTextbox2 && anySelectedTextbox3 && anySelectedBbttnn && anySelected && hasSelectedCategory) {
    var insert1Value = document.querySelector(".insert-1").value;
    var insert2Value = document.querySelector(".insert-2").value;
    var insert3Value = document.querySelector(".insert-3").value;
    var timeset2Value = document.querySelector(".timeset-2").value;
    var timeset4Value = document.querySelector(".timeset-4").value;
    var textbox99Value = document.querySelector(".textbox9-9 textarea").value;
    

    alert("점포명: " + insert1Value + "\n점포위치: " + insert2Value + "\n가게 전화번호: " + insert3Value + "\n가게 영업일: " + youngup + "\n운영 시작 시간: " + timeset2Value + "\n운영 마감 시간: " + timeset4Value + "\n가게 이용 방법: " + gageiyong + "\n결제 방식: " + geoljae + "\n홍보 메시지: " + textbox99Value + "\n카테고리 설정: " + gorigori + "\n노출 빈도수 설정: " + bindo);
 
 
    
    if(insert1Value && insert2Value && insert3Value && timeset2Value && timeset4Value && textbox99Value) {
        location.href = 'cash-2.html';
    }
    else {
        alert("필수 항목을 모두 입력해 주세요1");
    }
}
else {
    alert('필수 항목을 모두 입력해 주세요2');
}
});*/


const button1 = document.querySelector('.button1');

button1.addEventListener('click', function () {
    const insert1Value = document.querySelector(".insert-1").value;
    const insert2Value = document.querySelector(".insert-2").value;
    const insert3Value = document.querySelector(".insert-3").value;
    const timeset2Value = document.querySelector(".timeset-2").value;
    const timeset4Value = document.querySelector(".timeset-4").value;
    const textbox99Value = document.querySelector(".textbox9-9 textarea").value;

    const selectedTextbox2 = Array.from(document.querySelectorAll('.textbox2, .textbox3, .textbox4, .textbox5'))
        .filter(button => button.classList.contains('green-background'))
        .map(button => button.value);

    const selectedTextbox3 = Array.from(document.querySelectorAll('.textbox6, .textbox7, .textbox8, .textbox9'))
        .filter(button => button.classList.contains('green-background'))
        .map(button => button.value);

    const selectedBbttnn = Array.from(document.querySelectorAll('.bbttnn'))
        .filter(button => button.classList.contains('clicked'))
        .map(button => button.getAttribute('value'));

    const selectedRadio = Array.from(document.querySelectorAll('input[name="option"]'))
        .filter(option => option.checked)
        .map(option => option.value);

    const selectedCategory = Array.from(document.querySelectorAll('.category-1'))
        .filter(selectElement => selectElement.value !== '미선택')
        .map(selectElement => selectElement.value);

    if (insert1Value && insert2Value && insert3Value && timeset2Value && timeset4Value && textbox99Value &&
        selectedTextbox2.length > 0 && selectedTextbox3.length > 0 && selectedBbttnn.length > 0 &&
        selectedRadio.length > 0 && selectedCategory.length > 0) {

        const queryParams = new URLSearchParams({
            insert1: insert1Value,
            insert2: insert2Value,
            insert3: insert3Value,
            timeset2: timeset2Value,
            timeset4: timeset4Value,
            textbox99: textbox99Value,
            selectedTextbox2: selectedTextbox2.join(','),
            selectedTextbox3: selectedTextbox3.join(','),
            selectedBbttnn: selectedBbttnn.join(','),
            selectedRadio: selectedRadio.join(','),
            selectedCategory: selectedCategory.join(',')
        });

        const newURL = `cash-2.html?${queryParams.toString()}`;
        alert("점포명: " + insert1Value + "\n점포위치: " + insert2Value + "\n가게 전화번호: " + insert3Value + "\n가게 영업일: " + selectedTextbox2.join(',') + "\n운영 시작 시간: " + timeset2Value + "\n운영 마감 시간: " + timeset4Value + "\n가게 이용 방법: " + selectedTextbox2.join(',') + "\n결제 방식: " + selectedTextbox3.join(',') + "\n홍보 메시지: " + textbox99Value + "\n카테고리 설정: " + selectedCategory.join(',') + "\n노출 빈도수 설정: " + selectedRadio.join(','));
        window.location.href = newURL;

    } else {
        alert('필수 항목을 모두 입력해 주세요');
    }
});



/*
const button1 = document.querySelector('.button1');

button1.addEventListener('click', function() {
    const insert1Value = document.querySelector(".insert-1").value;
    const insert2Value = document.querySelector(".insert-2").value;
    const insert3Value = document.querySelector(".insert-3").value;
    const timeset2Value = document.querySelector(".timeset-2").value;
    const timeset4Value = document.querySelector(".timeset-4").value;
    const textbox99Value = document.querySelector(".textbox9-9 textarea").value;

    const anySelectedTextbox2 = Array.from(document.querySelectorAll('.textbox2, .textbox3, .textbox4, .textbox5')).some(button => button.classList.contains('green-background'));
    const anySelectedTextbox3 = Array.from(document.querySelectorAll('.textbox6, .textbox7, .textbox8, .textbox9')).some(button => button.classList.contains('green-background'));
    const anySelectedBbttnn = Array.from(document.querySelectorAll('.bbttnn')).some(button => button.classList.contains('clicked'));
    const anySelectedRadio = Array.from(document.querySelectorAll('input[name="option"]')).some(option => option.checked);
    const anySelectedCategory = Array.from(document.querySelectorAll('.category-1')).some(selectElement => selectElement.value !== '미선택');


    alert("점포명: " + insert1Value + "\n점포위치: " + insert2Value + "\n가게 전화번호: " + insert3Value + "\n가게 영업일: " + anySelectedBbttnn + "\n운영 시작 시간: " + timeset2Value + "\n운영 마감 시간: " + timeset4Value + "\n가게 이용 방법: " + anySelectedTextbox2 + "\n결제 방식: " + anySelectedTextbox3 + "\n홍보 메시지: " + textbox99Value + "\n카테고리 설정: " + anySelectedRadio + "\n노출 빈도수 설정: " + anySelectedCategory);

    if (insert1Value && insert2Value && insert3Value && timeset2Value && timeset4Value && textbox99Value && anySelectedTextbox2 && anySelectedTextbox3 && anySelectedBbttnn && anySelectedRadio && anySelectedCategory) {
        location.href = 'cash-2.html';
    } else {
        alert('필수 항목을 모두 입력해 주세요');
    }
});*/


function updateAnswer(value) {
    const answerDiv = document.getElementById('answer');
    answerDiv.textContent = `${value.toLocaleString()}원`;
  }

  // Attach event listeners to radio options
  const radioOptionss = document.querySelectorAll('input[type="radio"]');
  radioOptionss.forEach(option => {
    option.addEventListener('change', function () {
      const selectedValue = parseInt(this.value) * 10000;
      updateAnswer(selectedValue);
    });
  });