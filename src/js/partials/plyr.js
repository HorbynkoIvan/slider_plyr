import Plyr from 'plyr';



export function plyrPlayer() {
    const players = Plyr.setup('.js-player',
        {
            fullscreen: { enabled: false, fallback: true, iosNative: false },
            hideControls: true,
            controls: [
               // 'play-large',
                // 'play',
                // 'progress',
                // 'current-time',
                // 'mute',
                // 'volume',
                // 'captions',
                // 'settings',
                // 'pip',
                // 'airplay',
                // 'fullscreen'
            ],
        });


    // Bind event listener
    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
    }

    // Loop through each instance
    players.forEach(function(instance) {
        // Play
        // on('.js-play', 'click', function() {
        //     instance.play();
        // });
        //
        // // Pause
        // on('.js-pause', 'click', function() {
        //     instance.pause();
        // });
        //
        // // Stop
        // on('.js-stop', 'click', function() {
        //     instance.stop();
        // });
        //
        // // Rewind
        // on('.js-rewind', 'click', function() {
        //     instance.rewind();
        // });
        //
        // // Forward
        // on('.js-forward', 'click', function() {
        //     instance.forward();
        // });
    });
}