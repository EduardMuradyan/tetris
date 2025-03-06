const container = document.getElementById('main');
let allItems = [];

for (let i = 0; i < 20; ++i) {
    for (let j = 0; j < 10; ++j) {
        let div = document.createElement('div');
        div.classList.add('cube');
        container.appendChild(div);
        allItems.push(div);
    }
}


let activeItem = { x: 2, y: 4 };

function updateBoard() {
    allItems.forEach(div => div.classList.remove('red'));
    allItems[activeItem.x * 10 + activeItem.y].classList.add('red');
}

function moveDown() {
    if (activeItem.x < 19) {
        activeItem.x += 1;
        updateBoard();
    }
}

function moveRight() {
    if (activeItem.y < 9) {
        activeItem.y += 1;
        updateBoard();
    }
}

function moveLeft() {
    if (activeItem.y > 0) {
        activeItem.y -= 1;
        updateBoard();
    }
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
});

updateBoard();