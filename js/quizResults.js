function animateText(elementId, text, delay, callback) {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  text.split('').forEach((char, index) => {
    setTimeout(() => {
      element.innerHTML += char;
      if (index === text.length - 1 && callback) {
        callback();
      }
    }, delay * index * 1000); // delay is in seconds, so multiply by 1000 to convert to milliseconds
  });
}

document.addEventListener("DOMContentLoaded", function() {
  animateText('couple1', 'KENING ZHU', 0.2, () => {
    animateText('couple2', 'LUNA SNOW!', 0.2, () => {
      setTimeout(() => {
        document.querySelector('.animate-gift').style.display = 'block';
      }, 2000); // 2 seconds after the last letter
    });
  });
});