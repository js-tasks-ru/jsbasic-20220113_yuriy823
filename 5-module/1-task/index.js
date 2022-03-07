function hideSelf() {

  document.onclick = hideButton; 

  function hideButton(e) {
    if (document.querySelector('.hide-self-button') == e.target) { 
      e.target.hidden = true;
    }  
  }
}