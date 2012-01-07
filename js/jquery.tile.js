(function( $ ) {
  $.fn.tile = function(options) {
  
  	var settings = $.extend( {
  		'perspective':	400,
  		'degree' : 	10,
  		'inverse' :	false
  	}, options);
        
        return this
        .wrap('<div style="-webkit-perspective: ' + settings.perspective + ';" />')
        .mousemove(function(e){
        
        	var x 		= e.offsetX;
		var y 		= e.offsetY;
		var width 	= $(this).width();
		var height 	= $(this).height();
		
		cx = Math.ceil(width / 2.0);
	        cy = Math.ceil(height / 2.0);
	        dx = x - cx;
	        dy = y - cy;
	        
	        var mul = 1;
	        if(settings.inverse) mul = -1;
	
	        tiltx = (dy / cy) * mul;
	        tilty = - (dx / cx) * mul;
	        radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
	        degree = (radius * settings.degree);
	
	        $(this).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        
        })
        .mouseout(function(){
        	$(this).css('-webkit-transform','rotate3d( 0, 0, 0, 0deg)');
        });
  };
})( jQuery );