var myImage=document.getElementById("image")
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'guduri.jpeg') {
    myImage.setAttribute('src','guduriphoto.jpg');
  } else {
    myImage.setAttribute('src','guduri.jpeg');
  }
}
