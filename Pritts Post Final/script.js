document.querySelectorAll('vimeo-embed, youtube-embed').forEach((v) => {
  const [poster, src] =
    v.tagName === 'VIMEO-EMBED'
      ? [`vumbnail.com/${v.id}.jpg`, 'player.vimeo.com/video']
      : [`i.ytimg.com/vi/${v.id}/hqdefault.jpg`, 'www.youtube.com/embed'];

  v.innerHTML = `<img loading="lazy" src="https://${poster}" alt="${v.title}"><button aria-label="Play"></button>`;
  v.children[1].addEventListener(
    'click',
    () => (
      (v.innerHTML = `<iframe allow="autoplay" src="https://${src}/${v.id}?autoplay=1"></iframe>`),
      v.classList.add('active-video')
    )
  );
});

const videos = document.querySelectorAll('vimeo-embed, youtube-embed');
const close = document.querySelectorAll('.fancybox-close');
const reel = document.querySelector('.demo-reel-video');
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', () => {
    document.querySelectorAll('.active-video').forEach((v) => {
      const [poster, src] =
        v.tagName === 'VIMEO-EMBED'
          ? [`vumbnail.com/${v.id}.jpg`, 'player.vimeo.com/video']
          : [`i.ytimg.com/vi/${v.id}/hqdefault.jpg`, 'www.youtube.com/embed'];

      v.innerHTML = `<img loading="lazy" src="https://${poster}" alt="${v.title}"><button aria-label="Play"></button>`;
      v.classList.remove('.active-video');
      v.children[1].addEventListener(
        'click',
        () =>
          (v.innerHTML = `<iframe allow="autoplay" src="https://${src}/${v.id}?autoplay=1"></iframe>`),
        v.classList.add('active-video')
      );
    });
    const source = reel.src;
    reel.src = '';
    reel.src = source;
  });
}

for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener('click', (e) => {
    const please = e.currentTarget.id;
    document.querySelectorAll('.active-video').forEach((v) => {
      if (v.id != please) {
        const [poster, src] =
          v.tagName === 'VIMEO-EMBED'
            ? [`vumbnail.com/${v.id}.jpg`, 'player.vimeo.com/video']
            : [`i.ytimg.com/vi/${v.id}/hqdefault.jpg`, 'www.youtube.com/embed'];

        v.innerHTML = `<img loading="lazy" src="https://${poster}" alt="${v.title}"><button aria-label="Play"></button>`;
        v.classList.remove('.active-video');
        v.children[1].addEventListener(
          'click',
          () =>
            (v.innerHTML = `<iframe allow="autoplay" src="https://${src}/${v.id}?autoplay=1"></iframe>`),
          v.classList.add('active-video')
        );
      }
    });
  });
}
