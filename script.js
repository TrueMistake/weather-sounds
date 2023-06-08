(function () {
    var items = document.querySelectorAll('.sounds-item');
    var sounds = document.querySelectorAll('.sounds-item audio');
    var bodyBg = document.querySelector('.bg-blur');
    var volume = document.querySelector('.range');
    var playSound = function (item) {
        pauseAllSounds();
        removeAllClass();
        item.classList.add('play');
        item.querySelector('audio').play();
        item.querySelector('audio').dataset.play = 'true';
        console.log('volume', item.querySelector('audio').volume);
    };
    var pauseAllSounds = function () {
        sounds.forEach(function (item) { return item.pause(); });
    };
    var removeAllClass = function () {
        items.forEach(function (item) { return item.classList.remove('play'); });
    };
    var pauseSound = function (item) {
        item.classList.remove('play');
        item.querySelector('audio').pause();
        item.querySelector('audio').dataset.play = 'false';
    };
    var changeBg = function (item) {
        bodyBg.style.backgroundImage = "url(./assets/".concat(item.dataset.bg, ".jpg)");
    };
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!item.classList.contains('play')) {
                playSound(item);
            }
            else {
                pauseSound(item);
            }
            changeBg(item);
        });
    });
    var changeVolume = function () {
        sounds.forEach(function (item) {
            item.volume = +volume.value;
        });
    };
    changeVolume();
    volume.addEventListener('input', changeVolume);
})();
