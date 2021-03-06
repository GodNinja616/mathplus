(function(ext) {
  ext._shutdown = function() {};

  ext._getStatus = function() {
      return {status: 2, msg: 'Ready'};
  };

  ext.map = function(value,istart,istop,ostart,ostop) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  };

  ext.val = function(type) {
      if (type == "PI") {
          return Math.PI;
      } else if (type == "PHI") {
          return Math.PI/2;
      } else if (type == "2PI") {
          return Math.PI*2;
      }
  }

  var descriptor = {
      blocks: [
          ['r', 'Map- %n : %n : %n : %n : %n', 'map', 20, 1,0,5,20],
          ['r', 'Value- %m.type', 'val', "PI"],
          //['r', 'Noise- %n', 'noi', 3],
      ],
      menus: {
          type: ['PI', 'PHI', '2PI']
      }
  };

  ScratchExtensions.register('Math+', descriptor, ext);
})({});