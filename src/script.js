let order = [];
let clickedOrder = [];
let score = 0;

const colors = {
    red: document.querySelector('.red'),
    green: document.querySelector('.green'),
    blue: document.querySelector('.blue'),
    yellow: document.querySelector('.yellow')
}

const suffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

const lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected')
    }, number - 250);
}

const checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVoce acertou! Iniciando proximo nivel!`)
        nextLevel();
    }
}

const click = (color) => {
    clickedOrder[clickedOrder.length] = order;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 500)

}

const createColorElement = (color) => {
    if (color == 0) {
        return colors.red;
    } else if (color == 1) {
        return colors.green;
    } else if (color == 2) {
        return colors.blue;
    } else if (color == 3) {
        return colors.yellow;
    }
}

const nextLevel = () => {
    score += 1;
    suffleOrder();
}

const gameOver = () => {
    alert(`Pontuação: ${score}\nVoce perdeu o jogo!\nClique em OK para iniciar um novo jogo!`)
    order = [];
    clickedOrder = [];

    playGame();
}

const playGame = () => {
    alert(`Bem vindo ao jogo!`)
    score = 0

    nextLevel();
}

colors.red.onclick = () => click(0);
colors.green.onclick = () => click(1);
colors.blue.onclick = () => click(2);
colors.yellow.onclick = () => click(3);

playGame();