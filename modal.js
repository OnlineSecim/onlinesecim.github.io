var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";

}
const modalWindow = (header , text, color) => {
  if(header == 'canvas') {
    document.querySelector('#myModal h2').innerHTML = 'SONUÇLAR'
    document.querySelector('#myModal p').innerHTML = ''

    document.querySelector('#res').style.display = 'inline-block';
  } else {
    document.querySelector('#res').style.display = 'none'
    document.querySelector('#myModal h2').innerHTML = header
    document.querySelector('#myModal p').innerHTML = text
  }

  document.querySelector('.modal-header').style.backgroundColor = color || '#5cb85c'
  
  
  
  modal.style.display = "block"
  
}





