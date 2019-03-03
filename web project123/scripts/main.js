var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/anika.jpg') {
      myImage.setAttribute ('src','images/anika1.jpg');
    } else {
      myImage.setAttribute ('src','images/anika.jpg');
    }
}