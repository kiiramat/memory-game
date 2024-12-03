const cardArray = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milshake",
        img: "images/milshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milshake",
        img: "images/milshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random());


function createBoard(gridDisplay) {
    for ( let i = 0; i < 10; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("date-id", i);
        gridDisplay.append(card);
    }
}

const gridDisplay = document.querySelector(".grid");
createBoard(gridDisplay);