(function () {
  const items = document.querySelectorAll<HTMLElement>('.sounds-item');
  const sounds = document.querySelectorAll<HTMLAudioElement>('.sounds-item audio');
  const bodyBg = document.querySelector<HTMLDivElement>('.bg-blur');
  const volume = document.querySelector<HTMLInputElement>('.range');

  const playSound = (item: Element): void => {
    pauseAllSounds();
    removeAllClass();
    item.classList.add('play');
    item.querySelector<HTMLAudioElement>('audio').play();
    item.querySelector<HTMLAudioElement>('audio').dataset.play = 'true';
  }

  const pauseAllSounds = (): void => {
    sounds.forEach((item:HTMLAudioElement) => item.pause());
  }

  const removeAllClass = (): void => {
    items.forEach((item:HTMLAudioElement) => item.classList.remove('play'));
  }

  const pauseSound = (item:HTMLElement): void => {
    item.classList.remove('play');
    item.querySelector<HTMLAudioElement>('audio').pause();
    item.querySelector<HTMLAudioElement>('audio').dataset.play = 'false';
  }

  const changeBg = (item:HTMLElement): void => {
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
