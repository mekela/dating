$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//dropdown
	$( ".top-panel__filter-trigger" ).click(function() {
		$( ".top-panel__filter-drop" ).slideToggle( "slow");
	});
	$( ".messages__open-drop" ).click(function() {
		$( this ).next('.messages__drop').slideToggle( "slow");
		$( this ).toggleClass('active'); 
	});
	$( ".bottom-panel__trigger" ).click(function() {
		$('.bottom-panel__drop').hide();
		$( this ).next('.bottom-panel__drop').slideToggle( "slow");
		$( this ).toggleClass('active');
	});
	$( ".dropup" ).click(function() {
		$( this ).next().slideToggle( "fast");
		$( this ).toggleClass('active');
	});
	$( ".js-open-form" ).click(function() {
		$( '.topics-write-details' ).toggle('fast'); 
	});
	$( ".js-modal-bottom" ).click(function() {
		$( '.topics-form-details__overlay' ).toggle('fast');
		$( '.topics-form-details' ).toggle('fast');
	});
	$( ".topics-form-details__overlay" ).click(function() {
		$( '.topics-form-details__overlay' ).toggle('fast');
		$( '.topics-form-details' ).toggle('fast');
	});

	//tab
	$('.buy-coin__tab-nav a, .tabs-nav a, .edit-profile__tab-nav a').click(function(event){
		event.preventDefault();
		$('.buy-coin__tab-nav a, .tabs-nav a, .edit-profile__tab-nav a').removeClass('active');
		$(this).addClass('active');
		$('.buy-coin__tab, .dating-request__tab, .edit-profile__tab-item').hide();
		$($(this).attr('href')).show();
	});

	//accordeon
	$( ".help__trigger" ).click(function() {
		$( this ).next('.help__content').slideToggle( "slow");
	});

	//scroll
	$('.jscroll').jscroll({
		loadingHtml: '<img src="img/icons/fancybox_loading@2x.gif" alt="Loading" /> Loading...'
	});


});


//menu
$(document).on('touchstart', function(e)
{
	var container = $(".bottom-panel__drop");

	// if the target of the click isn't the container nor a descendant of the container
	if (!container.is(e.target) && container.has(e.target).length === 0)
	{
		container.hide();
	}
});
