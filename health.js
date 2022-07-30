// let container = document.getElementsByClassName("container").value

const workouts = {
    cardioTraining: [
        'https://www.youtube.com/embed/cZyHgKtK75A',
        'https://www.youtube.com/embed/PvEnWsPrL4w',
        'https://www.youtube.com/embed/s82_Hi_5ItA',
        'https://www.youtube.com/embed/QKCkO9fy9O4'
    ],
}
// Second is this:

let rootString = "";
const dispCardioWorkouts = () => {
    rootString += `
    <div class="container">
    <h2 class="video-header">Cardio Training</h2>
    <div class="flexbox-container">
    `;
    for (let link of workouts['cardioTraining']) {
        rootString += `
            <div class="flexbox-item">
                <iframe width="400" height="315" src="${link}" frameborder="0" allowfullscreen></iframe>
        </iframe>
            </div>
        `;
    }
    rootString += `
    </div>
    </div>`;
    return rootString;
};
// document.innerHTML = dispCardioWorkouts();
