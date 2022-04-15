let elArr = [];

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    elArr.push({y: i, x: j});
  }
}

let elList = document.querySelector('.chess__list');

elArr.forEach((items) => {
  let li = document.createElement('li');
  li.className = "chess__item";
  if ((items.x + items.y) % 2 != 0) {
    li.classList.add('itemWhite');
  } else {
    li.classList.add('itemBlack');
  }
  li.innerHTML = `
    <span class="span2 d-none">${items.x}</span>
    <span class="span1 d-none">${items.y}</span>`;

  elList.appendChild(li);
})

let items = document.querySelectorAll('.chess__item');
let span1 = document.querySelectorAll('.span1');
let span2 = document.querySelectorAll('.span2');
let yNum = document.querySelector('.y-num');
let xNum = document.querySelector('.x-num');
let x, y;

let chessBtn1 = document.querySelector('#chess__btn1');
let chessBtn2 = document.querySelector('#chess__btn2');
let chessBtn3 = document.querySelector('#chess__btn3');
let chessBtn4 = document.querySelector('#chess__btn4');
let chessBtn5 = document.querySelector('#chess__btn5');
let chessBtn6 = document.querySelector('#chess__btn6');

let elBtns = document.querySelectorAll('.ches__forms-btns');

elBtns.forEach((item) => {
  item.addEventListener("click", () => {
    elBtns.forEach((value) => {
      value.classList.remove("orange");
    });
    item.classList.add('orange');
  })
});

function btnOne() {
  chessBtn1.addEventListener('click', () => {
    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn1')
      })
      e.addEventListener('mouseover', () => {
        e.classList.add('btn1')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsOne(x, y);
      })
    })
  })
} 

btnOne()

function btnTwo() {
  chessBtn2.addEventListener('click', () => {
    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn2')
      })
      e.addEventListener('mouseover', () => {
        e.classList.add('movItem')
        e.classList.add('btn2')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsTwo(x, y);
      })
    })
  })
} 

btnTwo()

function btnThree() {
  chessBtn3.addEventListener('click', () => {
    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn3')
      })
      e.addEventListener('mouseover', () => {
        e.classList.add('btn3')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsThree(x, y);
      })
    })
  })
} 

btnThree()

function btnFour() {
  chessBtn4.addEventListener('click', () => {
    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn4')
      })
      e.addEventListener('mouseover', () => {
        e.classList.add('btn4')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsFour(x, y);
      })
    })
  })
} 

btnFour()

function btnFive() {
  chessBtn5.addEventListener('click', () => {
    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn5')
      })
      e.addEventListener('mouseover', () => {
        e.classList.add('btn5')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsFive(x, y);
      })
    })
  })
} 

btnFive()

function btnSix() {
  chessBtn6.addEventListener('click', () => {
    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn6')
      })
      e.addEventListener('mouseover', () => {
        e.classList.add('btn6')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsSix(x, y);
      })
    })
  })
} 

btnSix()

function itemsFun() {
  items.forEach((e) => {
    e.addEventListener('mouseout', () => {
      e.classList.remove('movitem2')
      e.classList.remove('movItem')
    })
    e.addEventListener('mouseover', () => {
      items.forEach((ee) => {
        ee.classList.remove('movitem2')
        ee.classList.remove('movItem')
      })
      e.classList.remove('movItem')
      e.classList.add('movitem2')
      xNum.innerHTML = e.childNodes[1].textContent;
      yNum.innerHTML = e.childNodes[3].textContent;
    })
    e.classList.remove('movitem2')
  })
} itemsFun()

function btnsOne(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function btnsTwo(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == +(x) - 1 && itmm.childNodes[3].textContent == +(y) - 2 ||
      itmm.childNodes[1].textContent == +(x) - 2 && itmm.childNodes[3].textContent == +(y) - 1 ||
      itmm.childNodes[1].textContent == +(x) - 2 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) - 1 && itmm.childNodes[3].textContent == +(y) + 2 ||
      itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) - 2 ||
      itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) + 2 ||
      itmm.childNodes[1].textContent == +(x) + 2 && itmm.childNodes[3].textContent == +(y) - 1 ||
      itmm.childNodes[1].textContent == +(x) + 2 && itmm.childNodes[3].textContent == +(y) + 1) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function btnsThree(x, y) {
  items.forEach((itmm) => {
    if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) + 2 && itmm.childNodes[3].textContent == +(y) + 2 ||
      itmm.childNodes[1].textContent == +(x) + 3 && itmm.childNodes[3].textContent == +(y) + 3 ||
      itmm.childNodes[1].textContent == +(x) + 4 && itmm.childNodes[3].textContent == +(y) + 4 ||
      itmm.childNodes[1].textContent == +(x) + 5 && itmm.childNodes[3].textContent == +(y) + 5 ||
      itmm.childNodes[1].textContent == +(x) + 6 && itmm.childNodes[3].textContent == +(y) + 6 ||
      itmm.childNodes[1].textContent == +(x) + 7 && itmm.childNodes[3].textContent == +(y) + 7) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == +(x) + 2 && itmm.childNodes[3].textContent == +(y) - 2 ||
      itmm.childNodes[1].textContent == +(x) + 3 && itmm.childNodes[3].textContent == +(y) - 3 ||
      itmm.childNodes[1].textContent == +(x) + 4 && itmm.childNodes[3].textContent == +(y) - 4 ||
      itmm.childNodes[1].textContent == +(x) + 5 && itmm.childNodes[3].textContent == +(y) - 5 ||
      itmm.childNodes[1].textContent == +(x) + 6 && itmm.childNodes[3].textContent == +(y) - 6 ||
      itmm.childNodes[1].textContent == +(x) + 7 && itmm.childNodes[3].textContent == +(y) - 7) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == +(x) - 1 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) - 2 && itmm.childNodes[3].textContent == +(y) + 2 ||
      itmm.childNodes[1].textContent == +(x) - 3 && itmm.childNodes[3].textContent == +(y) + 3 ||
      itmm.childNodes[1].textContent == +(x) - 4 && itmm.childNodes[3].textContent == +(y) + 4 ||
      itmm.childNodes[1].textContent == +(x) - 5 && itmm.childNodes[3].textContent == +(y) + 5 ||
      itmm.childNodes[1].textContent == +(x) - 6 && itmm.childNodes[3].textContent == +(y) + 6 ||
      itmm.childNodes[1].textContent == +(x) - 7 && itmm.childNodes[3].textContent == +(y) + 7) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function btnsFour(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
      itmm.classList.add('green')
    }
    else if(
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) + 2 && itmm.childNodes[3].textContent == +(y) + 2 ||
      itmm.childNodes[1].textContent == +(x) + 3 && itmm.childNodes[3].textContent == +(y) + 3 ||
      itmm.childNodes[1].textContent == +(x) + 4 && itmm.childNodes[3].textContent == +(y) + 4 ||
      itmm.childNodes[1].textContent == +(x) + 5 && itmm.childNodes[3].textContent == +(y) + 5 ||
      itmm.childNodes[1].textContent == +(x) + 6 && itmm.childNodes[3].textContent == +(y) + 6 ||
      itmm.childNodes[1].textContent == +(x) + 7 && itmm.childNodes[3].textContent == +(y) + 7) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) - 1 ||
      itmm.childNodes[1].textContent == +(x) + 2 && itmm.childNodes[3].textContent == +(y) - 2 ||
      itmm.childNodes[1].textContent == +(x) + 3 && itmm.childNodes[3].textContent == +(y) - 3 ||
      itmm.childNodes[1].textContent == +(x) + 4 && itmm.childNodes[3].textContent == +(y) - 4 ||
      itmm.childNodes[1].textContent == +(x) + 5 && itmm.childNodes[3].textContent == +(y) - 5 ||
      itmm.childNodes[1].textContent == +(x) + 6 && itmm.childNodes[3].textContent == +(y) - 6 ||
      itmm.childNodes[1].textContent == +(x) + 7 && itmm.childNodes[3].textContent == +(y) - 7) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == +(x) - 1 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) - 2 && itmm.childNodes[3].textContent == +(y) + 2 ||
      itmm.childNodes[1].textContent == +(x) - 3 && itmm.childNodes[3].textContent == +(y) + 3 ||
      itmm.childNodes[1].textContent == +(x) - 4 && itmm.childNodes[3].textContent == +(y) + 4 ||
      itmm.childNodes[1].textContent == +(x) - 5 && itmm.childNodes[3].textContent == +(y) + 5 ||
      itmm.childNodes[1].textContent == +(x) - 6 && itmm.childNodes[3].textContent == +(y) + 6 ||
      itmm.childNodes[1].textContent == +(x) - 7 && itmm.childNodes[3].textContent == +(y) + 7) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function btnsFive(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == +(x) - 1 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) + 1 ||
      itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) ||
      itmm.childNodes[1].textContent == +(x) - 1 && itmm.childNodes[3].textContent == +(y) ||
      itmm.childNodes[1].textContent == +(x) && itmm.childNodes[3].textContent == +(y) - 1 ||
      itmm.childNodes[1].textContent == +(x) + 1 && itmm.childNodes[3].textContent == +(y) - 1) {
      itmm.classList.add('green')
    } else {
      itmm.classList.remove('green')
    }
  })
}

function btnsSix(x, y) {
  items.forEach((itmm) => {
    if(y == 7 && itmm.childNodes[1].textContent == x && (itmm.childNodes[3].textContent == y - 1 || itmm.childNodes[3].textContent == y - 2 && itmm.childNodes[1].textContent == x)){
      itmm.classList.add('green')
    } else if(y == 8){
      itmm.classList.remove('green');
    } else if (itmm.childNodes[3].textContent == y - 1 && itmm.childNodes[1].textContent == x) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

elList.addEventListener('mouseout', () => {
  items.forEach((im) => {
    im.classList.remove("green")
    xNum.innerHTML = "0";
    yNum.innerHTML = "0";
  })
})