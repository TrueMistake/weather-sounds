(function () {
  const items = document.querySelectorAll('.sounds-item');
  const sounds = document.querySelectorAll('.sounds-item audio');
  const bodyBg:HTMLDivElement = document.querySelector('.bg-blur');
  const volume:HTMLInputElement = document.querySelector('.range');

  const playSound = (item: Element): void => {
    pauseAllSounds();
    removeAllClass();
    item.classList.add('play');
    item.querySelector('audio').play();
    item.querySelector('audio').dataset.play = 'true';
    console.log('volume', item.querySelector('audio').volume)
  }

  const pauseAllSounds = (): void => {
    sounds.forEach((item:HTMLAudioElement) => item.pause());
  }

  const removeAllClass = (): void => {
    items.forEach((item:HTMLAudioElement) => item.classList.remove('play'));
  }

  const pauseSound = (item): void => {
    item.classList.remove('play');
    item.querySelector('audio').pause();
    item.querySelector('audio').dataset.play = 'false';
  }

  const changeBg = (item): void => {
    bodyBg.style.backgroundImage = `url(./assets/${item.dataset.bg}.jpg)`
  }

  items.forEach((item:HTMLElement) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('play')) {
        playSound(item);
      } else {
        pauseSound(item);
      }

      changeBg(item);
    })
  });

  const changeVolume = (): void => {
    sounds.forEach((item:HTMLAudioElement) => {
      item.volume = +volume.value;
    });
  }

  changeVolume();

  volume.addEventListener('input', changeVolume)
})();
