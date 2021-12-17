(() => {
    const button = document.getElementById("button");

    const counterElement = document.getElementById("counter");

    let counter = 0;

    button.onclick = () => {
        counter += 1;
        counterElement.textContent = counter;
    };
})();
