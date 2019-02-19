 // 2. This code loads the IFrame Player API code asynchronously.
var tag1 = document.createElement('script');
tag1.src = "https://www.youtube.com/iframe_api";
var tag2 = document.createElement('script');
tag2.src = "https://code.jquery.com/jquery-3.3.1.js";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag1, firstScriptTag);
firstScriptTag.parentNode.insertBefore(tag2, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '720',
        width: '1080',
        videoId: 'HzxQLJL9vi8',
        //  wmode: transparent makes HTML goes on top of Flash
        //  fs: disable full screen
        playerVars: {'autoplay': 0, 'wmode': 'transparent', 'fs': 0, 'controls':1, 'rel':0, 'modestbranding':1},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
var done1 = false;
var done2 = false;
var done3 = false;
var done4 = false;
var done5 = false;
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    setInterval(
        function() {
            if (event.target.getCurrentTime() >= 43 && event.target.getCurrentTime() <= 44 && !done1) {
                done1 = true;
                stopVideo(1);
            } else if (event.target.getCurrentTime() >= 155 && event.target.getCurrentTime() <= 156 && !done2) {
                done2 = true;
                stopVideo(2);
            } else if (event.target.getCurrentTime() >= 190 && event.target.getCurrentTime() <= 191 && !done3) {
                done3 = true;
                stopVideo(3);
            } else if (event.target.getCurrentTime() >= 225 && event.target.getCurrentTime() <= 225.5) {
                $("#invent4").css("display", "block");
            } 
            if (event.target.getCurrentTime() >= 228.5 && event.target.getCurrentTime() <= 229) {
                event.target.pauseVideo();
                setTimeout(continueVideo, 20000, 4);
            }
        },
        500
    );
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
    if (event.data == YT.PlayerState.PLAYING) {
        $("#invent1").css("display", "none");
        $("#invent2").css("display", "none");
        $("#invent3").css("display", "none");
        $("#invent4").css("display", "none");
    }
}

function stopVideo(id_num) {
    var id = "#invent"+id_num;
    $(id).css("display", "block");
    player.pauseVideo();
} 

function handleQ1() {
    $("#btnq1").html("<button onclick=\"continueVideo(1)\" class=\"button\">Continue</button>");
    var A = $("input[id=A1]:checked").val();
    var B = $("input[id=B1]:checked").val();
    var C = $("input[id=C1]:checked").val();
    var D = $("input[id=D1]:checked").val();
    var str = "";
    if (A && C && !B && !D) {
        str = "<p>Great job! You got it right!</p>";
    } else if (!B && !D && (A || C)) {
        str = "<p>You are almost there, missing only one correct answer. The correct answer is A and C.</p>";
    } else if (A || C) {
        str = "<p>Your answers are partially correct. Nice try! The correct answer is A and C.</p>";
    } else {
        str = "<p>Oops, you didn’t catch the correct answers. Seems like you will learn a lot today! The correct answer is A and C.</p>";
    }
    $("#answer1").html(str);
}

function handleQ2() {
    $("#btnq2").html("<button onclick=\"continueVideo(2)\" class=\"button\">Continue</button>");
    var A = $("input[id=A2]:checked").val();
    var B = $("input[id=B2]:checked").val();
    var C = $("input[id=C2]:checked").val();
    var str = "";
    if (!A && !B && C) {
        str = "<p>Nice job! Your answer is correct. Let’s move on to see the explanation.</p>";
    } else {
        str = "<p>Oops, you didn’t catch the correct answer C. Let’s continue to see why we should choose C.</p>";
    }
    $("#answer2").html(str);
}

function continueVideo(id_num) {
    var id = "#invent"+id_num;
    $(id).css("display", "none");
    player.playVideo();
}

function showHint() {
    $("#btn-hint").css("display", "none");
    $("#hint-text").css("display", "inline-block");
}


// //Show slides above video
// new YT.Player('player', {
//     height: '720',
//     width: '1080',
//     videoId: 'M7lc1UVf-VE',
// //  wmode: transparent  makes HTML goes on top of Flash
// //  fs: disable full screen
//     playerVars: {'autoplay': 0, 'wmode': 'transparent', 'fs': 0, 'controls':1, 'rel':0, 'modestbranding':1, 'showinfo':0},
//     events: {
//         'onReady': onPlayerReady,
//         'onStateChange': onPlayerStateChange,
//         'onError': onPlayerError,
//     }
// });
// document.getElementById('player').style['z-index']=-10;
// document.getElementById('player').style['-webkit-transform']='translateZ(0)';


