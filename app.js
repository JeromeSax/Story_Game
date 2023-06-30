const choiceBtn = document.getElementById('choice');

choiceBtn.addEventListener('click', () => makeChoice());

// Create player
class player {
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
}

// Create Music Label
class villian {
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
}


// Add choices for level 1
const chapterOne = document.getElementById('level-1')





// Add choices for level 2
const chapterTwo = document.getElementById('level-2')






// Add choices for level 3
const chapterThree = document.getElementById('level-3')





// Add a way to record choices that the player makes





// Show the result from the choices made









// Function that restarts the game
document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
 });
