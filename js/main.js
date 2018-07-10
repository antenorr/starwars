$(document).ready(function () {

    

    let glow = $('.glow_effect');
    setInterval(function () {
        glow.toggleClass('glow');
    }, 1000);

    let play_button = $(".play_button");
    play_button.on('click', () => {
        play_button.fadeOut(500);
        $(".fade_in_effect").fadeIn("slow")
    })




    $(".choose_prompt").text('Choose your 1st fighter!')





    let selectedFighters = [];
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