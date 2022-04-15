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
let count = 1;

let chessBtn1 = document.querySelector('#chess__btn1');
let chessBtn2 = document.querySelector('#chess__btn2');
let chessBtn3 = document.querySelector('#chess__btn3');
let chessBtn4 = document.querySelector('#chess__btn4');
let chessBtn5 = document.querySelector('#chess__btn5');
let chessBtn6 = document.querySelector('#chess__btn6');

let elBtns = document.querySelectorAll('.ches__forms-btns');

function btnOne() {
  chessBtn1.addEventListener('click', () => {
    elBtns.forEach((elements) => {
      elements.classList.remove("orange");
    });
    chessBtn1.classList.add('orange');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn1')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((event) => {
          event.classList.remove('btn1')
          event.classList.remove('btn2')
          event.classList.remove('btn3')
          event.classList.remove('btn4')
          event.classList.remove('btn5')
          event.classList.remove('btn6')
          e.classList.remove('movItem')
        })
        e.classList.add('movItem')
        e.classList.add('btn1')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn1.addEventListener('click', btnsOne(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} btnOne()

function btnTwo() {
  chessBtn2.addEventListener('click', () => {
    chessBtn1.classList.remove('orange');
    chessBtn2.classList.add('orange');
    chessBtn3.classList.remove('orange');
    chessBtn4.classList.remove('orange');
    chessBtn5.classList.remove('orange');
    chessBtn6.classList.remove('orange');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn2')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('btn1')
          ee.classList.remove('btn2')
          ee.classList.remove('btn3')
          ee.classList.remove('btn4')
          ee.classList.remove('btn5')
          ee.classList.remove('btn6')
          e.classList.remove('movItem')
        })
        e.classList.add('movItem')
        e.classList.add('btn2')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn1.addEventListener('click', btnsTwo(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} btnTwo()


function btnThree() {
  chessBtn3.addEventListener('click', () => {
    chessBtn1.classList.remove('orange');
    chessBtn2.classList.remove('orange');
    chessBtn3.classList.add('orange');
    chessBtn4.classList.remove('orange');
    chessBtn5.classList.remove('orange');
    chessBtn6.classList.remove('orange');

    

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn3')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('btn1')
          ee.classList.remove('btn2')
          ee.classList.remove('btn3')
          ee.classList.remove('btn4')
          ee.classList.remove('btn5')
          ee.classList.remove('btn6')
          e.classList.remove('movItem')
        })
        e.classList.add('movItem')
        e.classList.add('btn3')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn3.addEventListener('click', btnsThree(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} btnThree()


function btnFour() {
  chessBtn4.addEventListener('click', () => {
    chessBtn1.classList.remove('orange');
    chessBtn2.classList.remove('orange');
    chessBtn3.classList.remove('orange');
    chessBtn4.classList.add('orange');
    chessBtn5.classList.remove('orange');
    chessBtn6.classList.remove('orange');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn4')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('btn1')
          ee.classList.remove('btn2')
          ee.classList.remove('btn3')
          ee.classList.remove('btn4')
          ee.classList.remove('btn5')
          ee.classList.remove('btn6')
          e.classList.remove('movItem')
        })
        e.classList.add('movItem')
        e.classList.add('btn4')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn4.addEventListener('click', btnsFour(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} btnFour()


function btnFive() {
  chessBtn5.addEventListener('click', () => {
    chessBtn1.classList.remove('orange');
    chessBtn2.classList.remove('orange');
    chessBtn3.classList.remove('orange');
    chessBtn4.classList.remove('orange');
    chessBtn5.classList.add('orange');
    chessBtn6.classList.remove('orange');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn5')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('btn1')
          ee.classList.remove('btn2')
          ee.classList.remove('btn3')
          ee.classList.remove('btn4')
          ee.classList.remove('btn5')
          ee.classList.remove('btn6')
          e.classList.remove('movItem')
        })
        e.classList.add('movItem')
        e.classList.add('btn5')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn5.addEventListener('click', btnsFive(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('movItem')
    })
  })
} btnFive()

function btnSix() {
  chessBtn6.addEventListener('click', () => {
    chessBtn1.classList.remove('orange');
    chessBtn2.classList.remove('orange');
    chessBtn3.classList.remove('orange');
    chessBtn4.classList.remove('orange');
    chessBtn5.classList.remove('orange');
    chessBtn6.classList.add('orange');

    

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('btn6')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('btn1')
          ee.classList.remove('btn2')
          ee.classList.remove('btn3')
          ee.classList.remove('btn4')
          ee.classList.remove('btn5')
          ee.classList.remove('btn6')
          e.classList.remove('movItem')
        })
        e.classList.add('movItem')
        e.classList.add('btn6')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn6.addEventListener('click', btnsSix(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('btn6')
    })
  })
} btnSix()

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
    e.classList.remove('movItem')
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
    if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 1) {
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
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
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
    else if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green')
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
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
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) ||
      itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) ||
      itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1
    ) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

function btnsSix(x, y) {
  items.forEach((itmm) => {
    if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) && itmm.childNodes[1].textContent != x && x != 1 ||
      x == 2 && itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y)) {
      itmm.classList.add('green')
    }
    else {
      itmm.classList.remove('green')
    }
  })
}

elList.addEventListener('mouseout', () => {
  items.forEach((im) => {
    im.classList.remove('green')
    im.classList.remove('btn1')
    im.classList.remove('btn2')
    im.classList.remove('btn3')
    im.classList.remove('btn4')
    im.classList.remove('btn5')
    im.classList.remove('btn6')
    xNum.innerHTML = "0";
    yNum.innerHTML = "0";
  })
})
