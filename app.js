var image = new Array ();
image[0] = "images/lifesharing3.png";
image[1] = "http://via.placeholder.com/500x250";
image[2] = "http://via.placeholder.com/600x400";
image[3] = "http://via.placeholder.com/350x350";
var size = image.length
var x = Math.floor(size*Math.random())

$('#randomImages').attr('src',image[x]);