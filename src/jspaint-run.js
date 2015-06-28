$(function(){
  "use strict";

  var canvasId = "jspaint-canvas",
      containerId = "jspaint-paint-area",
      size = window.location.toString().split('?')[1].split('=')[1],
      sizeX = size.split('x')[0],
      sizeY = size.split('x')[1],
      jspaint = null;

  (function (){
    $('#ToolSubMenuBar').hide();
    $('#jspaint-paint-area').css({
      width: sizeX, height: sizeY
    });
    jspaint = new JSPaint({$: jQuery, containerId: containerId, canvasId: canvasId, size: {X:sizeX, Y:sizeY}});

    $('.top-taker').TopTaker({'theme': 'dark'});
  })();

  $('#SpeedDotsFreeStyleTool')
    .bind('click', function(){
      $(this).trigger("start");
    })
    .bind('contextmenu', function(e){
      e.preventDefault();
      jspaint.Tools.stopSpeedDotsFreeStyleTool({tool: this});
      return false;
    })
    .bind('stop', function(){
      $(this).trigger("contextmenu");
    })
    .bind('start', function(){
      jspaint.Tools.startSpeedDotsFreeStyleTool({tool: this});
    });

  $('#CircleStampTool')
    .bind('click', function(){
      $(this).trigger('start');
    })
    .bind('start', function(){
      jspaint.Tools.startCircleStampTool({tool: this});
    })
    .bind('contextmenu', function(){
      $(this).trigger('stop');
    })
    .bind('stop', function(){
      jspaint.Tools.stopCircleStampTool({tool: this});
    });
});
