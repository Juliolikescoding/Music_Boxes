// select your elemets or define your vars
var keys = document.querySelectorAll(".key")
var notes ={
    cKey: document.querySelector('#cAudio'),
    dKey: document.querySelector('#dAudio'),
    eKey: document.querySelector('#eAudio'),
    fKey: document.querySelector('#fAudio'),
    gKey: document.querySelector('#gAudio'),
    aKey: document.querySelector('#aAudio'),
    bKey: document.querySelector('#bAudio'),
}
var popUp = document.querySelector(".note")
var points = document.getElementsByClassName("points")[0];
// define your functions

function playNote(key){
    // console.log(key)
    notes[key].currentTime = 0
    notes[key].play()
}

function notePopUp(key){
    popUp.innerHTML = key;
    points.innerHTML = parseInt(points.innerHTML) + 1;
    
}

// call your functions and/or add event listeners

keys.forEach(function(key){
    key.addEventListener('click', function(){
        playNote(key.id);
        notePopUp(key.innerHTML,console.log(points));
    })
});

document.addEventListener('keydown',function(event){
    // console.log(event.key)
    if(event.key === "a"){
        playNote("cKey");
        notePopUp("C");
    }
    else if(event.key === "A"){
        playNote("cKey");
        notePopUp("C");
    }
    //
    if(event.key === "s"){
        playNote("dKey")
        notePopUp("D");
    }
    //
    else if(event.key === "S"){
        playNote("dKey")
        notePopUp("D");
    }
    //
    if(event.key === "d"){
        playNote("eKey")
        notePopUp("E")
    }
    //
    else if(event.key === "D"){
        playNote("eKey")
        notePopUp("E")
    }
    //
    if(event.key === "f"){
        playNote("fKey")
        notePopUp("F")
    }

    else if(event.key === "F"){
        playNote("fKey")
        notePopUp("F")
    }
    
    if(event.key === "g"){
        playNote("gKey")
        notePopUp("G")
    }
    else if(event.key === "G"){
        playNote("gKey")
        notePopUp("G")
    }
    
    if(event.key === "h"){
        playNote("aKey")
        notePopUp("A")
    }

    else if(event.key === "H"){
        playNote("aKey")
        notePopUp("A")
    }

    if(event.key === "j"){
        playNote("bKey")
        notePopUp("B")
    }

    else if(event.key === "J"){
        playNote("bKey")
        notePopUp("B")
    }
});
