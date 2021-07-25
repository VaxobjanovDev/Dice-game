$(".btn").click(function(){
    let randomNumber1 = Math.floor(Math.random()*6) + 1;

    let randomImageSource = "images/dice" + randomNumber1 + ".png";

    $(".img1 img").attr("src", randomImageSource);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomSourceImage = "images/dice" + randomNumber2 + ".png"

    $(".img img").attr("src", randomSourceImage); 

    
    if(randomNumber1>randomNumber2){
        $("h1").html("<i class='fas fa-flag'></i> Player 1 won!!");
    }
    else if (randomNumber1<randomNumber2){
        $("h1").html("<i class='fas fa-flag'></i> Player 2 won!!");
    }
    else{
        $("h1").html(" <i class='fas fa-handshake'></i>Draw");
    }
})


// document.querySelector(".btn").addEventListener("click", function(){
//     let randomNumber2 = Math.floor(Math.random() * 6) + 1

//     let randomSourceImage = "images/dice" + randomNumber2 + ".png"

//     document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage); 
// })



// document.querySelector(".btn").addEventListener("click", function(){
    
//     let random = Math.floor(Math.random()*6+1);

//     if(random===1){
//         document.querySelectorAll("img")[0].setAttribute("src", "./images/dice1.png");
//     }
//     else if(random===2){
//         document.querySelectorAll("img")[0].setAttribute("src", "./images/dice2.png");
//     }
//     else if(random===3){
//         document.querySelectorAll("img")[0].setAttribute("src", "./images/dice3.png");
//     }
//     else if(random===4){
//         document.querySelectorAll("img")[0].setAttribute("src", "./images/dice4.png");
//     }
//     else if(random===5){
//         document.querySelectorAll("img")[0].setAttribute("src", "./images/dice5.png");
//     }
//     else {
//         document.querySelectorAll("img")[0].setAttribute("src", "./images/dice6.png");
//     }
// })

// document.querySelector(".btn").addEventListener("click", function(){
    
//     let random = Math.floor(Math.random()*6+1);

//     if(random===1){
//         document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
//     }
//     else if(random===2){
//         document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
//     }
//     else if(random===3){
//         document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
//     }
//     else if(random===4){
//         document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
//     }
//     else if(random===5){
//         document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
//     }
//     else {
//         document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
//     }
// })