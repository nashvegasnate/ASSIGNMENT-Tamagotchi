const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('eat')) {
      console.warn('clicked on eat');
    }
    if (e.target.id.includes('play')) {
      console.warn('clicked on play');
    }
    if (e.target.id.includes('fight')) {
      console.warn('clicked on fight');
    }
    if (e.target.id.includes('sleep')) {
      console.warn('clicked on sleep');
    }
  });
};

export default domEvents;
