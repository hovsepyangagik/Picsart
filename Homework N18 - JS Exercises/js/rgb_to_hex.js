function rgbToHex(rgb) {

    rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
    return "#" + ((1 << 24) + (+rgb[0] << 16) + (+rgb[1] << 8) + (+rgb[2])).toString(16).slice(1);

  }
  
console.log(rgbToHex("rgb(0, 128, 192)"));
console.log(rgbToHex("rgb(45, 255, 192)"));
console.log(rgbToHex("rgb(0, 0, 0)"));
