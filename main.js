document.addEventListener("DOMContentLoaded", (e) => {
	document.querySelector('.change_sity').addEventListener('click', (e) =>{
		document.getElementById('search-form').classList.add('search-form_show');
	})

	document.querySelector('.switch_input').addEventListener('click', (e) =>{
		document.getElementById('search-form').classList.remove('search-form_show');
	})	
	
});


function switch_units(){		

	let temp = document.querySelector('.temp_value').innerText;
	let wind = document.querySelector('.wind_speed_value').innerText;
	let pressue = document.querySelector('.pressue_value').innerText;

	if (document.querySelector('.switch_input').checked ) {
		
		let Far = temp * 9 / 5 + 32;			
		document.querySelector('.temp_value').innerText = Math.round(Far);
		
		
		let Mile = wind*2.2369;
		document.querySelector('.wind_speed_value').innerText = Math.round(Mile * 100) / 100;
		document.querySelector('.wind_speed_units').innerHTML = ' миль/ч';

		let mmMercPilor = pressue*1.33;
		document.querySelector('.pressue_value').innerText = Math.round(mmMercPilor);
		document.querySelector('.pressue_units').innerHTML = ' гПа';

		

	} else {		
		let Cel = (temp - 32) * 5 / 9;
		document.querySelector('.temp_value').innerText = Math.round(Cel);
		
		let Metr = wind/2.2369;
		document.querySelector('.wind_speed_value').innerText = Math.round(Metr);
		document.querySelector('.wind_speed_units').innerHTML = ' м/с';

		let GigaPasckal = pressue/1.33;
		document.querySelector('.pressue_value').innerText = Math.round(GigaPasckal);
		document.querySelector('.pressue_units').innerHTML = ' мм рт. ст.';

	}
	
	}
