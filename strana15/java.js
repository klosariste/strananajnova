function openPopup()  {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
    
  }
  function openPopup(popupId) {
    var overlay = document.querySelector('.overlay');
    var popup = document.getElementById(popupId);
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup(popupId) {
    var overlay = document.querySelector('.overlay');
    var popup = document.getElementById(popupId);
    overlay.style.display = 'none';
    popup.style.display = 'none';
}
  
