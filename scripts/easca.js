$(document).ready(function () {
	let keyPressed;
		$('.btn-secondary').click(function(){
			keyPressed = (this.innerHTML);
			$('#output').append(keyPressed)
			var id = this.id
			if (id ==='return'){
				$('#output').empty();
			
			}
			// if (id === 'undo'){
			// 	let temp = document.getElementById('#output');
			// 	alert(temp)
			// }
		});
















});