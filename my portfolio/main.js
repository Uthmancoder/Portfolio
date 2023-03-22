let text = "HI, I'm Uthman, Web developer";
let screen = document.getElementById("screen");
let i = 0;

function autowrite() {
  if (i < text.length) {
    if (text.charAt(i) === ',') {
      let parts = text.split(",");
      screen.innerHTML = '<span>' + parts[0] + ',</span><br>'; // wrap the first part of the string in a span element and add a line break after the comma
      screen.innerHTML += '<span>' + parts[1].trim() + ',</span><br>'; // wrap the second part of the string (after trimming any leading or trailing spaces) in a span element and add a line break
      i += parts[0].length + parts[1].length + 1; // update the index to skip the comma and any spaces between the parts
      setTimeout(autowrite, 300);
    } else {
      screen.innerHTML += '<span>' + text.charAt(i) + '</span>'; // wrap the current character in a span element
      i++;
      setTimeout(autowrite, 200);
    }
  }
}

autowrite();



