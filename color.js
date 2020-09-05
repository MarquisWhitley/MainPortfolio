const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    const randomHex = getRandomHexColor();

    document.body.style.backgroundColor = randomHex;
})

btn.addEventListener("click", function() {
    const randomHex = getRandomHexColor();

    document.querySelector("button").style.background = randomHex;
})

btn.addEventListener("click", function() {
    const randomHex = getRandomHexColor();

    document.querySelector(".content__text").style.backgroundColor = randomHex;
})

// const hover = window.getComputedStyle(document.querySelector(".js__selector--logo"), ':hover').getPropertyValue('color')

// btn.addEventListener("click", function() {
//     const randomHex = getRandomHexColor();

//     hover = randomHex;
// })


function getRandomHexColor() {
    const chars = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    let result = '#';
    const charactersLength = chars.length

    for (let i = 0; i < 6; i++) {
        result += chars[(Math.floor(Math.random() * charactersLength))];
    }
    return result;
}