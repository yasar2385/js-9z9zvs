// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var filelist = new Array();
var fileInput = document.getElementById('fileUploader');
var output = document.getElementById('divFiles');
fileInput.addEventListener('change', function () {
  var HTML = '<table>';
  for (var i = 0; i < fileInput.files.length; ++i) {
    //filelist[i] = input.files.item(i).name;
    filelist.push(fileInput.files.item(i).name);
    HTML +=
      '<tr><td>' +
      filelist[i] +
      '</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button ></button></td></tr>';
  }
  HTML += '</table>';
  output.innerHTML = HTML;
  console.log(filelist);
});
