const startButton = document.querySelector(".startButton button");
const cells = document.querySelectorAll(".grid-item");
const grid = document.querySelector(".grid");
const levelSpan = document.querySelector("#level");
const scoresSpan = document.querySelector("#scores");

var level = 1;
var scores = 0;

function calculateScore() {
    /* 
        472 - 100% of progress bar
        150 points - 100% of progress bar (15 * 10)
        => each successed level will be (472 / 15 = 31.47)
        ex. 65% progress will be 472 - 472*0.65 = 165.2

        ex. 150 points - 472
            15 points - 47.2
    */
    
    let maxDashoffset = 472;
    let levelScore = 15;
    scores += levelScore;
    level += 1;
    scoresSpan.innerText = scores;
    levelSpan.innerText = level;
    let dashoffset = 472 - (scores / 15) * 47.2;
    document.querySelector("circle").style.strokeDashoffset = dashoffset;
    return scores
}


let arr = new Set();
let clickedCells = new Set();

async function generateRandoms() {
    if (level <= 6) {
        for (let i = 0; arr.size < level; i++) {
            let i = Math.trunc(Math.random() * 12);
            arr.add(i);
        } 
    }else {
        for (let i = 0; arr.size < 6; i++) {
            let i = Math.trunc(Math.random() * 12);
            arr.add(i);
        }
    }
    arr = [...arr];
    console.log(arr);
    return arr
}

async function showCells() {
    for (let i = 0; i < arr.length; i++) {
        let u = await foo(arr[i]);
        cells[u].style.backgroundColor = "#9521f3";
        setTimeout(() => {
            cells[u].style.backgroundColor = "#fccc47";
        }, 500);  
        disableStartBtn(true);
    }
}

async function foo(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i)
        }, 1000);
    })
}

async function clickIt() {
    await disableStartBtn(false);
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", async function () {
            await clickedCells.add(i);
            var clickedCellsArr = [...clickedCells];
            if (level < 7) {
                if (clickedCellsArr.length === level) {
                    grid.style.zIndex = "-1";
                    if (arr.every(item => clickedCellsArr.includes(item)) &&   clickedCellsArr.every(item => arr.includes(item))) {
                        calculateScore();
                        grid.style.zIndex = "1";
                        toEmpty();
                    } else {
                        level++;
                        levelSpan.innerText = level;
                        grid.style.zIndex = "1";
                        toEmpty();
                        alert(`Level Failed! Please press "Start next level" if you want to continue`);
                    }
                }
            }
            else {
                if (clickedCellsArr.length === 6) {
                    grid.style.zIndex = "-1";
                    if (arr.every(item => clickedCellsArr.includes(item)) && clickedCellsArr.every(item => arr.includes(item))) {
                        calculateScore(scores);
                        grid.style.zIndex = "1";
                        toEmpty();
                    } else {
                        level++;
                        levelSpan.innerText = level;
                        grid.style.zIndex = "1";
                        toEmpty();
                        alert(`Level Failed! Please press "Start next level" if you want to continue`);
                    }
                }
            }
        }); 
    }  
}

async function toEmpty() {
    arr = new Set();
    clickedCells = new Set();
}

async function disableStartBtn(bool) {
    startButton.disabled = bool;
}

async function generateShowClick() {
    disableStartBtn(true);
    await generateRandoms();
    await showCells();
    await clickIt();
}

async function levelUp(level) {
    level++;
    clickedCells = new Set();
    if (level > 1) {
        startButton.innerText = "Start next level";
    }
    return level
}

async function game() {
    await generateShowClick();
    await levelUp(level);
}

startButton.addEventListener("click", function () {
    game(); 
});