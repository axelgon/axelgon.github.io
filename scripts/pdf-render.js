var PDFJS = require('pdfjs-dist');
var fs = require('fs');

var data = new Uint8Array(fs.readFileSync('/source/helloworld.pdf'));

PDFJS.getDocument(data).then(function (pdfDocument) {
  console.log('Number of pages: ' + pdfDocument.numPages);
  var canvas = document.querySelector('#resume');
  var context = canvas.getContext('2d');
  var viewport = page.getViewport(1);
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  // Render PDF page into canvas context
  var renderContext = {
    canvasContext: context,
    viewport: viewport
  };

  var renderTask = page.render(renderContext);
  renderTask.then(function () {
    console.log('Page rendered');
  });
});
