$(function()
	{	
		var ex = $('.ex1');
		
		$('.ev1').click(function()
			{
			 	ex.hide('slow');
				// 'fast' desaparee rápido
			//	ex.hide(5000);
			});

		$('.ev2').click(function()
			{
			 	ex.show('slow');
				// 'fast' desaparee rápido
			//	ex.hide(5000);
			});
		
		//enquanto o hide() OCULTA e o show() MOSTRA
		//o toggle() altera entre os dois, com o mesmo botão
		//se tiver oculto ele mostra, se estiver a mostra ele esconde
		$('.ev3').click(function()
			{
				ex.toggle('slow');
			});

		$('.ev4').keyup(function()
		{   $('.ev4')
				.css("font-family","arial black")
				.css("text-transform","uppercase");

			var texto = $(this).val();
			if(texto == 'hide')
			{
				ex.hide('slow');
			}else if(texto == 'show')
			{
				ex.show('slow');
			}else if(texto == 'toggle')
			{
				ex.toggle(3000);
				
			}

		});
			
	});