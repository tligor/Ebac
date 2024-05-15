$(document).ready(function(){
$('#phone').mask('(00) 00000-0000', {placeholder: "(00) 00000-0000"});
$('#mail').mask("A", {
	translation: {
		"A": { pattern: /[\w@\-.+]/, recursive: true }
	}
});
})

function opa(){
    this.alert('Você não enviou, mas valeu a tentativa')
}