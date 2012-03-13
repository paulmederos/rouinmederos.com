/* Author:
	Paul Mederos
*/

$('.content').hide();	
	
$(document).ready(function() {
	$('#wedding').show();
	$('#wedding-button').addClass('active');
    $('#funSlides').nivoSlider({
        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
        animSpeed: 500, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        borderRadius:	7,
        directionNav: false, // Next & Prev navigation
        controlNav: true, // 1,2,3... navigation
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        afterLoad: function(){} // Triggers when slider has loaded
    });
    
    $('.ss-base-body').css('background: none !important;');
});


// On a button click:
	// Hide the main content
	// Show corresponding content baed on button click
	// Remove the active class from previous button
	// Add the active class to new button
	// Change URL hash to clicked on button
	
$('nav a').on('click', function(e){
	e.preventDefault();
	$('.content').hide();
    $('.active').removeClass('active');
    var newContentPiece = $(this).attr('href')
	$(newContentPiece).fadeIn('slow');
	$(this).addClass('active');
	window.location.hash = this.hash; 
});	