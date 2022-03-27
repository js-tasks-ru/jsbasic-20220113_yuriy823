function toggleText() {
  
  document.querySelector('.toggle-text-button').addEventListener('click', hideText);
  
  function hideText(e) {
    text.hidden = !text.hidden;
  }
};