// Create player
class Player {
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
}

let player = new Player('Joe Schmoe, Indepent Artist');

// Create Music Label
class Villian {
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
}

let villian = new Villian('UrScrewed Music Group, Record Label');


// creating the buttons
const button1 = document.getElementById('choice1');
const button2 = document.getElementById('choice2');
const button3 = document.getElementById('choice3');
const button4 = document.getElementById('choice4');
const button5 = document.getElementById('choice5');
const button6 = document.getElementById('choice6');
const button7 = document.getElementById('choice7');
const button8 = document.getElementById('choice8');
const button9 = document.getElementById('choice9');
const button10 = document.getElementById('ending');

// Add event listeners
button1.addEventListener('click', makeChoice);
button2.addEventListener('click', makeChoice);
button3.addEventListener('click', makeChoice);
button4.addEventListener('click', makeChoice1);
button5.addEventListener('click', makeChoice1);
button6.addEventListener('click', makeChoice1);
button7.addEventListener('click', makeChoice2);
button8.addEventListener('click', makeChoice2);
button9.addEventListener('click', makeChoice2);
button10.addEventListener('click', makeChoice3);

// Chapter 1 choices displayed on screen
function makeChoice(choice) {
    if (choice.target === button1) {
        const result1 = document.getElementById('message');
        result1.textContent = 'You chose to sign the deal and get a Drake feature. Drake now owns half the song and took your favorite song from the album for his new single';
    } else if (choice.target === button2) {
        const result2 = document.getElementById('message');
        result2.textContent = 'You chose to sign the deal and get an IceSpice feature. Unfortunately you hated her verse and because you did not like it she created fake internet beef to generate streams';
    } else if (choice.target === button3) {
        const result3 = document.getElementById('message');
        result3.textContent = 'You did not take the deal and lost the chance to fund your album. Now you are back at square one';
    }
}

// Chapter 2 choices displayed on screen
function makeChoice1(choice) {
    if (choice.target === button4) {
        const result4 = document.getElementById('message2');
        result4.textContent = 'You chose to change the genre of your music. This resulted in your original fans hating it and labeling it as hot dumpster water pop dookie on social media. But hey at least your streams doubled on Flopify';
    } else if (choice.target === button5) {
        const result5 = document.getElementById('message2');
        result5.textContent = 'You chose to put all of your energy into content and music. Your social media following has grown and the fans are loving the new music, but it is not paying all the bills. You had to get a 9-5 to make some more cash';
    } else if (choice.target === button6) {
        const result6 = document.getElementById('message2');
        result6.textContent = 'You chose to move back in with your parents. You folded like a lawnchair under the immense financial pressure of funding your music and making a living. Shame on you!';
    } 
}


// Chapter 3 choices displayed on screen
function makeChoice2(choice) {
    if (choice.target === button7) {
        const result7 = document.getElementById('message3');
        result7.textContent = 'You chose to continue navigating the music industry which resulted in you losing creative freedom in your music. You have so much money now but your music does not make you happy. At least you are not riding the struggle bus anymore';
    } else if (choice.target === button8) {
        const result8 = document.getElementById('message3');
        result8.textContent = 'You chose to stay consistent and found balance in your life which resulted in being able to save up enough money to fund your first tour! Just a small tour with a few cities on the east coast but this is huge and tickets are selling out. Unfortunately your current job will not approve the vacation time to accomodate your tour';
    } else if (choice.target === button9) {
        const result9 = document.getElementById('message3');
        result9.textContent = 'You chose to approach the local bar owner with your music ideas and it was a success. Every friday night you run a jam session that features local artists and musicians, but you have been getting complaints of being unfair and using the session to only promote your music. The local music community is not happy and attendance for the session has started to drop';
    } 
}


// Add a way to record choices that the player makes





// Show the result from the choices made
function makeChoice3(choice) {
    if(choice.target === button10) {
        const result10 = document.getElementById('message4');
        result10.textContent = 'Every choice had a consequence. Signing with the record label has resulted in you becoming a rich but unrelatable artist. You have lost touch with reality and your fans have noticed. The music does not hit like it used to. If you choose to stay independent you managed to book your first tour with your favorite local artists and band members. Unfortunately you get fired from your job for going on the tour and even now while selling out venues you worry how you will pay next months rent without a job. Still you have never been happier. Perhaps you took a completely different route and choose to move back home. This resulted in you becoming bitter at your failed potential. You despise younger artists and run an overpriced jam session in your hometown. This is the closest you will ever come to musical freedom. '
    }
}




// Function that restarts the game
document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
 });
