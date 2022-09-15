
	function oProjektu(){
		 $("#oProjektu").slideToggle("slow");
	};
	function uputstvo(){
    $("#uputstvo1").slideToggle("slow");
  };

function otvoriUnos(){
	$("#input").slideToggle("slow");
};
  
function nova(){
    $("#input").slideToggle("slow");
  };
 /* function ime(){
  	
	ime = $('#ime').val();
	document.getElementById('imePrezime').value=ime;
  };*/
	

	function netacno(clicked_id) {
		$("#a").hide();
		$("#operator").hide();
		$("#b").hide();
		$("#prviOdg").hide();
		$("#drugiOdg").hide();
		$("#treciOdg").hide();
		$("#cetvrtiOdg").hide();
		$("#odustani").hide();
		$("#pomocPublike").hide();
		$("#pola").hide();
		$("#skala").hide();
		$("#imePrezime").show();
		ime();

	}
	var ime = '';
	var skor=0
	var trenutni_iznos=0
	var brojacPola = 0
	var brojacPublika = 0 
	var tacnihOdgovora = 0
	console.log(tacnihOdgovora);


	function pocetakIgre(){
	   $("#okvir").hide();
    $('#okvirPitanja').css({'display':'block','visibility':'visible'});
    $('#skala').css({'display':'block'});	
							

	
				
    			


	 				var A =  Math.floor((Math.random() * 9) + 1);
	 				//document.getElementById("a").value = A
					var B =  Math.floor((Math.random() * 9) + 1);
					//document.getElementById("b").value = B
					var operator=Math.floor((Math.random()*2)  + 1);
					var rezultat= 
				

					//var operator = operatorList[Math.floor(Math.random()*2)];
					//var rezultat = eval(A + operator + B);
					//operator = Math.floor((Math.random() * 4) + 1);
					document.getElementById('a').value=A;
					document.getElementById('b').value=B;
				    /* }else if (tacnihOdgovora>4 && tacnihOdgovora<9) {
				    	pocetakIgre();
					var A =  Math.floor((Math.random() * 50) + 1);
	 				document.getElementById("a").value = A
					var B =  Math.floor((Math.random() * 9) + 1);
					document.getElementById("b").value = B
					var operator=Math.floor((Math.random()*4)  + 1);
					var rezultat= 
					 listaR= [];
					document.getElementById('a').value=A;
					document.getElementById('b').value=B;

					} else if (tacnihOdgovora>9 && tacnihOdgovora<15) {
						pocetakIgre();
					var A =  Math.floor((Math.random() * 100) + 1);
	 				document.getElementById("a").value = A
					var B =  Math.floor((Math.random() * 30) + 1);
					document.getElementById("b").value = B
					var operator=Math.floor((Math.random()*4)  + 1);
					var rezultat= 
					 listaR= [];
					document.getElementById('a').value=A;
					document.getElementById('b').value=B;

				}*/



			function ubaciBrojeve(){
				while(tacnihOdgovora<15){
					var x1=Math.floor((Math.random()*4));
					var x2=Math.floor((Math.random()*4));
					var x3=Math.floor((Math.random()*4));
					var x4=Math.floor((Math.random()*4));
					if (x1!=x2 && x1!=x3 && x1!=x4 && x2!=x3 && x2!=x4 && x4!=x3) {break} }

					document.getElementById('prviOdg').value=listaNetacnihOdgovora[x1];
					document.getElementById('drugiOdg').value=listaNetacnihOdgovora[x2];
					document.getElementById('treciOdg').value=listaNetacnihOdgovora[x3];
					document.getElementById('cetvrtiOdg').value=listaNetacnihOdgovora[x4];				
			}
			if (operator==1){
				document.getElementById('operator').value='+';
				var prvi=A+B;
				var drugi=A+B+Math.floor((Math.random() * 3) + 1);
				var treci=A+B-Math.floor((Math.random() * 3) + 1);
				var cetvrti=A+B-Math.floor((Math.random() * 3) + 1);
				listaNetacnihOdgovora = [prvi,drugi,treci,cetvrti];
				ubaciBrojeve();
			} else if (operator==2){
				document.getElementById('operator').value='-';
				var prvi=A-B;
				var drugi=A-B+Math.floor((Math.random() * 3) + 1);
				var treci=A-B-Math.floor((Math.random() * 3) + 1);
				var cetvrti=A-B+Math.floor((Math.random() * 3) + 1);
				listaNetacnihOdgovora = [prvi,drugi,treci,cetvrti];
				ubaciBrojeve();

			} else if (operator==3){
				document.getElementById('operator').value='*';
				var prvi=A*B;
				var drugi=A*B+Math.floor((Math.random() * 3) + 1);
				var treci=A*B-Math.floor((Math.random() * 3) + 1);
				var cetvrti=A*B+Math.floor((Math.random() * 3) + 1);
				listaNetacnihOdgovora = [prvi,drugi,treci,cetvrti];
				ubaciBrojeve();
			} else if (operator==4){
				
				document.getElementById('operator').value='/';
				/*document.getElementById('a').value=A;
				document.getElementById('b').value=B;*/
				var prvi=A/B;
				var drugi=rezultat+Math.floor((Math.random() * 3) + 1);
				var treci=rezultat-Math.floor((Math.random() * 3) + 1);
				var cetvrti=rezultat+Math.floor((Math.random() * 3) + 1);
				listaNetacnihOdgovora = [prvi,drugi,treci,cetvrti];
				ubaciBrojeve();
			}
		}

	function odgovor(clicked_id){
		console.log(tacnihOdgovora);
		var id = clicked_id
		var operator = document.getElementById("operator").value
		var A = document.getElementById("a").value
		var B = document.getElementById("b").value		
		if (operator=="+") {
			var rez = parseInt(A)+parseInt(B)
		}
		else if (operator=="-") {
			var rez =parseInt(A)-parseInt(B)
		}
		else if (operator=="*") {
			var rez = parseInt(A)*parseInt(B)
		}
		else if (operator=="/") {
			var rez = parseInt(A)/parseInt(B)
		}
		if (rez==document.getElementById(id).value) {
			tacnihOdgovora++;
			pocetakIgre();
			bodovanje();
			console.log('taccan je');
		} else {
			netacno();
			console.log('netacno');
		};
	
		function bodovanje(){
					if (tacnihOdgovora==1) {
						var skor=100+"bodova"
						$("#bodovi1").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==2) {
						var skor=200+"bodova"
						$("#bodovi1").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi2").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==3) {
						var skor=300+"bodova"
						$("#bodovi2").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi3").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==4) {
						var skor=500+"bodova"
						$("#bodovi3").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi4").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==5) {
						var skor=1000+"bodova"
						$("#bodovi4").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi5").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==6) {
						var skor=2000+"bodova"
						$("#bodovi5").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi6").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==7) {
						var skor=4000+"bodova"
						$("#bodovi6").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi7").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==8) {
						var skor=8000+"bodova"
						$("#bodovi7").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi8").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==9) {
						var skor=16000+"bodova"
						$("#bodovi8").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi9").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==10) {
						var skor=32000+"bodova"
						$("#bodovi9").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi10").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==11) {
						var skor=64000+"bodova"
						$("#bodovi10").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi11").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==12) {
						var skor=125000+"bodova"
						$("#bodovi11").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi12").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==13) {
						var skor=250000+"bodova"
						$("#bodovi12").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi13").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==14) {
						var skor=500000+"bodova"
						$("#bodovi13").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi14").css("background-color",'#5cb85c')
					} else if (tacnihOdgovora==15) {
						var skor=1000000+"bodova"
						$("#bodovi14").css("background-color",'rgba(0,157,196,1)')
						$("#bodovi15").css("background-color",'#5cb85c')
					} 
				}

	}
	


					


		



	