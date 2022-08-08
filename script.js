const executionButton = document.getElementById("executionButton");

executionButton.addEventListener("click", function() {
    const temp = Number(document.getElementById("temp").value);

    const main = Number(document.getElementById("main").value);

    if (temp < 5 && temp < 30) {
        checkTemp();
    } else {
        checkTemp();
    }

    if (main < 0) {
        checkMain();
    } else {
        checkMain()
    }

    if (temp && main) {

        document.getElementById("diluteLiquid").textContent = diluteLiquid(main);

        document.getElementById("accelerator").textContent = accelerator(temp, main);

        document.getElementById("hardener").textContent = hardener(temp, main);
    }
});

function checkTemp() {
    let result = prompt("適正温度は5~30℃以内です。");

    if (5 <= result && result <= 30) {
        document.getElementById("temp").value = result;
    } else {
        checkTemp();
    }
}

function checkMain() {
    let result = prompt("0以上のグラム単位の量を入力して下さい");

    if (0 < result) {
        document.getElementById("main").value = result;
    } else {
        checkMain();
    }
}

function getElement() {
    console.log("hello");
}

function diluteLiquid(mainElem) {
    return mainElem * 0.2;
}

function accelerator(temperature, main) {
    return Math.round(main * ((-0.05 * temperature) + 3) / 10) / 10;
}

function hardener(temperature, main) {
    return Math.round(main * ((-0.05 * temperature) + 3.5) / 10) / 10;
}