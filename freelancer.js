const state = {
    averagePrice: [105],
    freelancers: [
        { name: "Tom", occupation: "Farmer", price: 90 },
        { name: "Kelly", occupation: "Designer", price: 120 },
    ],
};

function updateAveragePrice() {
    let cost = 0;
    for (let i = 0; i < state.freelancers.length; i++) {
        const currentFreelancer = state.freelancers[i];

        cost += currentFreelancer.price;
    }
    state.averagePrice = Math.round(cost / state.freelancers.length);
}

function addFreelancerRow(freelancer) {
    state.freelancers.push(freelancer);
}   

function createMorefreelancer(freelancer) {
    const tr = document.createElement("tr");

    const Morenames = document.createElement("td");
    const Moreoccupations = document.createElement("td");
    const Moreprices = document.createElement("td");

    Morenames.textContent = freelancer.name;
    Moreoccupations.textContent = freelancer.occupation;
    Moreprices.textContent = freelancer.price;

    tr.append(Morenames, Moreoccupations, Moreprices);

    return tr;
}

function createHeader() {
    const tr = document.createElement("tr");

    const Morenames = document.createElement("th");
    const Moreoccupations = document.createElement("th");
    const Moreprices = document.createElement("th");

    Morenames.textContent = "Name";
    Moreoccupations.textContent = "Occupation";
    Moreprices.textContent = "Starting Price";

    tr.append(Morenames, Moreoccupations, Moreprices);

    return tr;
}

function clear() {
    const More = document.getElementById("Morefreelancer");

    while (More.childNodes.length) {
        More.removeChild(More.childNodes[0]);
    }
}

function render() {
    clear();

    const more = document.getElementById("Morefreelancer");

    more.appendChild(createHeader());

    for (let i = 0; i < state.freelancers.length; i++) {
        const currentFreelancer = state.freelancers[i];

        const row = createMorefreelancer(currentFreelancer);

        more.appendChild(row);
    }

    updateAveragePrice();

    const Prices = document.getElementById("Averageprice");
    Prices.textContent = `The average price is $${state.averagePrice}.`;
}

render();
const getrandomNames = ["Kai", "Victor", "Joel", "Potter"];
const getrandomJobs = ["Editor", "Photographer", "Lawyer", "Painter"];

function randomFreelancer() {
    const getrandomName = getrandomNames[Math.floor(Math.random() * getrandomNames.length)];
    const getrandomJob = getrandomJobs[Math.floor(Math.random() * getrandomJobs.length)];

    const getrandomPrice = Math.round(Math.random() * 200);

    const freelancer = {
        name: getrandomName,
        occupation: getrandomJob,
        price: getrandomPrice,
    };
    return freelancer;
}

setInterval(function () {
    const newFreelancer = randomFreelancer();
    addFreelancerRow(newFreelancer);
    
    render();
}, 8000);
