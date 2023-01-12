// Import stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

var _validFileExtensions = ['.jpg', '.jpeg', '.bmp', '.gif', '.png'];
var but = document.getElementById('but1');
but.addEventListener('click', (event) => {
  Uploader.click();
});

var Uploader = document.getElementById('Uploader');
Uploader.addEventListener('change', function () {
  var arrInputs = document.getElementsByTagName('input');
  for (var i = 0; i < arrInputs.length; i++) {
    var oInput = arrInputs[i];
    if (oInput.type == 'file') {
      var sFileName = oInput.value;
      console.log('00==>' + sFileName);
      if (sFileName.length > 0) {
        var blnValid = false;
        updateFileName(sFileName);
        for (var j = 0; j < _validFileExtensions.length; j++) {
          var sCurExtension = _validFileExtensions[j];
          // console.log(
          //   '=1=>' +
          //     sFileName.substr(
          //       sFileName.length - sCurExtension.length,
          //       sCurExtension.length
          //     )
          // );
          if (
            sFileName
              .substr(
                sFileName.length - sCurExtension.length,
                sCurExtension.length
              )
              .toLowerCase() == sCurExtension.toLowerCase()
          ) {
            blnValid = true;
            break;
          }
        }

        if (!blnValid) {
          alert(
            'Sorry, ' +
              sFileName +
              ' is invalid, allowed extensions are: ' +
              _validFileExtensions.join(', ')
          );
          return false;
        }
      }
    }
  }

  return true;
});
function isEllipsisActive(el) {
  return el.scrollWidth !== el.offsetWidth
    ? el.scrollWidth > el.offsetWidth
    : checkRanges(el); // Blink and Webkit browsers do floor scrollWidth
}

function checkRanges(el) {
  const range = new Range();
  range.selectNodeContents(el);

  const range_rect = range.getBoundingClientRect();
  const el_rect = el.getBoundingClientRect();
  // assumes ltr direction
  return range_rect.right > el_rect.right;
}
var updateFileName = function (sFilename) {
  var div = document.getElementById('grid_div');
  var span = Array.from(div.querySelectorAll('span'));
  var org = sFilename;
  var split = sFilename.split('\\');
  //console.log(span);
  //console.log(split[split.length - 1]);
  sFilename = split[split.length - 1];
  //console.log(sFilename);
  try {
    span.forEach(function (el, idx, ar) {
      //console.log(idx);
      var file_split = sFilename.split('.');
      var [file_name, ext, final_name] = [
        file_split[0],
        file_split[file_split.length - 1],
        sFilename,
      ];
      console.log([file_name, ext]);
      el.textContent = final_name;
      var displayWidth = el.getBoundingClientRect().width;
      var offset = el.offsetWidth;
      var scrollwidth = el.scrollWidth;
      //console.log([displayWidth, offset, scrollwidth]);
      console.log([isEllipsisActive(el), file_name.length]);
      while (isEllipsisActive(el) && final_name.length > 5) {
        file_name = file_name.substring(0, file_name.length - 1);
        //final_name = file_name + ' ... ' + ext;
        el.textContent = file_name + ' ... ' + ext;
        console.log(file_name);
      }
      //el.textContent = final_name;
    });
  } catch (err) {
    console.log(err.message);
  } finally {
    var fileName = Uploader.value.split('/').pop().split('\\').pop();
    console.log(fileName);
  }
};

var file = {
  name: 'demo',
};
let index = file.name.lastIndexOf('.');
let after = index && file.name.slice(index + 1) ? !0 : !1;
console.log(index > -1);
let text = document.getElementById('myBtn').innerText;
console.log(text);
document.getElementById('demo').innerHTML = text;

var words = {
  regex_Space_Split: /\s+/gi,
  regex_Space_Add: /\.([A-z]+\s)/g,

  count: function () {
    let DOM = document.getElementById('section');
    let DOM_TEXT = DOM.textContent;
    console.log(
      DOM_TEXT.replace(this.regex_Space_Split, ' ')
        .replace(this.regex_Space_Add, '. $1')
        .split(' ')
        .filter(Boolean)
    );
    let word_ct = DOM_TEXT.trim()
      .replace(this.regex_Space_Split, ' ')
      .replace(this.regex_Space_Add, '. $1')
      .split(' ')
      .length.toLocaleString('en-IN');
    return word_ct;
  },
};

//console.log(words.count());
