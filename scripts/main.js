function createMain() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.appendChild(main);
}

function createManySections() {
    const main = document.querySelector("main");
    for (let i = 0; i < 3; i++) {
        main.appendChild(createSection(i));
    }
}

function createSection(index) {
    const view = document.createElement("section");
    view.innerHTML = `
        <div>
            <p>eu sou o numero ${index}</p>
        </div>
    `;
    return view;
}

createMain();
createManySections();