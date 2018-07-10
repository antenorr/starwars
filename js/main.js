$(document).ready(function () {

    

    let glow = $('.glow_effect');
    setInterval(function () {
        glow.toggleClass('glow');
    }, 1000);

    let play_button = $(".play_button");
    play_button.on('click', () => {
        play_button.fadeOut(500);
        $(".fade_in_effect").fadeIn("slow");
        $(".choose_prompt").text('Choose your 1st fighter!');
    })



    // **************** BEGIN TO PROGRAM GAMER ******************

    const aayla = {
        name: "aayla",
        attack: 30,
        img: "./../assets/aayla-secura.png"
    }
    const luke = {
        name: "luke",
        attack: 25,
        img: "./../assets/luke-skywalker.png"
    }
    const boba = {
        name: "boba",
        attack: 20,
        img: "./../assets/boba-fett.png"
    }
    const darth = {
        name: "darth",
        attack: 50,
        img: "./../assets/vader.png"
    }

    let chooseFighterFlag = true;
    let selectedFighters = [];
    let playerOne;
    let playerTwo;

    $(".fighter").on('click', function(e) {
        if (chooseFighterFlag && selectedFighters.length < 1 ) {
 
            let selection =  e.currentTarget.classList[0];
            selectedFighters.push(eval(selection)); //eval() used to change string to variable
            playerOne = eval(selection)
            $(".fighter_one").html(` <img src="${playerOne.img}" alt="" class="fighting_stance">`);
            chooseFighterFlag = false;
            $(".choose_prompt").text('Choose your 2nd fighter!');
          
        }
        else if (!chooseFighterFlag && selectedFighters.length === 1) {

            let selection = e.currentTarget.classList[0];
            selectedFighters.push(eval(selection)); //eval() used to change string to variable
            playerTwo = eval(selection)
            $(".fighter_two").html(` <img src="${playerTwo.img}" alt="" class="fighting_stance">`);
            $(".choose_prompt").text('Get Ready to Rumble!');
            $(".fade_out_effect").fadeOut(2000)

        
 
          
        }
        console.log( playerOne, playerTwo);
    })
   







   
    const chooseFighter = () => {

    }























});

    // Thsi is the formula to cause an element of absolute to move to the left

    // $("button").click(function () {
    //     $(".fighter").animate({ left: '250px' });
    // });
    /**
     *
     *         <button>hi</button>
        <div class="fighter" style="background:#98bf21;height:100px;width:100px;position:absolute;">
        </div>
     */