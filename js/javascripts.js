$( document ).on( "pageinit", "#index", function() {
	$("#form_login").submit(function(event) {
		var form_user	= $("#form_user").val();
		var form_senha	= $("#form_senha").val();
		var dados = {
			"form_user" : form_user,
			"form_senha" : form_senha
		};
		$.post("login.php", dados, function(resultado) {
			resultado = jQuery.parseJSON(resultado);
			if (resultado.status == "ok") {
				$.mobile.changePage("inicio.php", {transition: "flip"});
			} else {
				alert(resultado.mensagem);	
			}
		});
		event.preventDefault();
	});
});

$( document ).on( "pageinit", "#ambientes", function() {
	$( document ).on( "swipeleft", "#ambientes", function( e ) {
		// We check if there is no open panel on the page because otherwise
		// a swipe to close the left panel would also open the right panel (and v.v.).
		// We do this by checking the data that the framework stores on the page element (panel: open).
		if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swipeleft"  ) {
				$( "#painel_menu" ).panel( "open" );
			}
		}
	});
			
	$( ".teste_slider" ).on( 'slidestop', function(event) {
		alert(this.value);
		$("#executar_comando").load("comando.php", { form_id_comando : this.value, form_executar : 1 });
		event.preventDefault();
		return false;	
	});
			
	$( ".teste_checkbox" ).on( 'tap', function(event) {
		alert('oi...');
		$("#executar_comando").load("comando.php", { form_id_comando : this.value, form_executar : 1 });
		event.preventDefault();
		return false;	
	});
			
	$( ".cenario" ).on( 'tap', function(event) {
		alert(this);
		$("#executar").load("cenario.php", { form_id_cenario : this.value, form_executar : 1 });
		event.preventDefault();
		return false;	
	});				
});
