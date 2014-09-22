var Portfolio = {
	
	initEvents: function(){
		Portfolio.navs();
		Portfolio.loadHome();
		Portfolio.loadWork();
		Portfolio.loadAbout();
		Portfolio.loadContact();
	}, 

	navs: function(){
		$('nav a p').click(function(){
			$('nav a p').removeClass('selected');
			$(this).addClass('selected'); 
		});
	},

	loadHome: function(){
		$('.home').click(function(){
			$('#portfolio').hide();
			$('#about').hide();
			$('#contact').hide();
			$('#homePic').show();
		});
	},

	loadWork: function(){
		$('.work').click(function(){
			$('#homePic').hide();
			$('#about').hide();
			$('#contact').hide();
			$('#portfolio').show();
			console.log('2');
		});
	},

	loadAbout: function(){
		$('.about').click(function(){
			$('#homePic').hide();
			$('#portfolio').hide();
			$('#contact').hide();
			$('#about').show();
		});
	},

	loadContact: function(){
		$('.contact').click(function(){
			$('#homePic').hide();
			$('#portfolio').hide();
			$('#about').hide();
			$('#contact').show();
		});
	},

	initialize: function(){
		Portfolio.initEvents();
	}
}

$(document).ready(Portfolio.initialize);
