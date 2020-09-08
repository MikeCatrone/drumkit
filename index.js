

var ba, dum, tiss;

        ba = new Audio('sounds/tom-2.mp3');
        dum = new Audio('sounds/kick-bass.mp3');
        tiss = new Audio('sounds/crash.mp3');


        
document.querySelector('.btn').addEventListener('click', () => {

    processAudio('play');
})


var drumButton = document.querySelectorAll('.drum').length;

// listens for the drum button clicks
for(var i = 0; i < drumButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {

        processAudio(this.textContent);
        animation(this.textContent);
        
    })
}


// detects key pressed
document.addEventListener('keydown', (event) => {

    processAudio(event.key);


    //to prevent errors when keypress is different
    if(event.key === 'w' || event.key === 'a' || event.key === 's' 
        || event.key === 'd' || event.key === 'j' || event.key === 'k' || event.key === 'l') {
            animation(event.key);
        } 

});



// adds some animation
const animation = (x) => {

    document.querySelector(`.${x}`).classList.add('pressed');

    setTimeout( () => {
        document.querySelector(`.${x}`).classList.remove('pressed');
    }, 125);
    

}


const processAudio = (x) => {

    if(x === 'w') {
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();

    } else if(x === 'a') {
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();

    } else if(x === 's') {
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();

    } else if(x === 'd') {
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();

    } else if(x === 'j') {
        var snare = new Audio('sounds/snare.mp3');
        snare.play();

    } else if(x === 'k') {
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();

    } else if(x === 'l') {
        var crash = new Audio('sounds/crash.mp3');
        crash.play();

    } else if(x === 'play') {

        
        setTimeout( () => {
            animation('a');
            ba.play();
        }, 30);
        

        setTimeout( () => {
            animation('k');
            dum.play();
        }, 180);

        setTimeout( () => {
            animation('l');
            tiss.play();
        }, 760); // 1000 is 1 second delay
        

    }

}