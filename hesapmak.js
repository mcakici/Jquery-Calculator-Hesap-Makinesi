/**
* Mustafa Çakıcı
* By Wipau
* Version v1.1  2013
* mailto:glikoz@live.com
*/
var islem = new Array();
var operator = new Array();
var sonuc = 0;
var islendimi = false;

jQuery(document).ready(function(){
	$('#sayilar div,#operatorler div,#ustoperatorler div').mousedown(function() {
  		hareket($(this).attr('rel'));
	});
	$(document).bind('keydown', function (evt){
  		hareket(evt.keyCode);
  		return false;				
	});
});

function hareket(keyCode){
	
if(keyCode == 96){
	  $('#b0').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b0').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'0');
	}else if(keyCode == 97){
	  $('#b1').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b1').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'1');
	}else if(keyCode == 98){
      $('#b2').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b2').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'2');
	}else if(keyCode == 99){
      $('#b3').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b3').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'3');
	 }else if(keyCode == 100){
      $('#b4').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b4').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'4');
	}else if(keyCode == 101){
      $('#b5').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b5').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'5');
	 }else if(keyCode == 102){
      $('#b6').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b6').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'6');
	 }else if(keyCode == 103){
      $('#b7').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b7').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'7');
	  }else if(keyCode == 104){
      $('#b8').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b8').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'8');
	  }else if(keyCode == 105){
      $('#b9').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#b9').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'9');
	  }else if(keyCode == 110){
      $('#virgul').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#virgul').delay(200).animate({ backgroundColor: "#F3F3F3", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+'.');
  	  }else if(keyCode == "isaretdegis"){
		  
	  var girilendeger = $('#isl').text().split(" ");
	  if(operator.length > 0 && parseFloat(girilendeger[girilendeger.length-1]) > 0){
	  girilendeger[girilendeger.length-1] = -parseFloat(girilendeger[girilendeger.length-1]);
	  var yenideger = girilendeger.join(' ');
	  }else if(parseFloat(girilendeger[girilendeger.length-1]) > 0){
	  var yenideger = -parseFloat($('#isl').text());
	  }
	  $('#isl').text(yenideger);
	  
	  }else if(keyCode == 46){
      $('#reset').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#reset').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
	 	
		islem = new Array();
		operator = new Array();
		sonuc = 0;
		islendimi = false;
	  $('#isl').text('');
	  $('#islemsonuc').html('');
	  }	
	
	
	
var uzunluk = $('#isl').text().length;
var girilendeger = $('#isl').text().split(" ");

if(operator.length > 0 && parseFloat(girilendeger[girilendeger.length-1]) != 0){
if(girilendeger[girilendeger.length-1] == ""){ return false; }
var songirilendeger =  parseFloat(girilendeger[girilendeger.length-1]);

}else if(parseFloat(girilendeger[girilendeger.length-1]) != 0){
var songirilendeger =  parseFloat($('#isl').text());

}else{
var songirilendeger = 0;
return false;	
}
  
	  
	  if(keyCode == 13){
      $('#esittir').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#esittir').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );

	  islem[islem.length] = songirilendeger;  
		switch(operator[operator.length-1]){
			case "+": sonuc=sonuc+songirilendeger;  break;
			case "-": sonuc=(sonuc)-(songirilendeger);  break;
			case "/": if(sonuc == 0){ sonuc =  parseFloat(islem[islem.length-2]); }; sonuc=sonuc/songirilendeger;  break;
			case "x": sonuc=sonuc*songirilendeger;   break;  
			case "%": if(sonuc == 0){ sonuc =  parseFloat(islem[islem.length-2]); }; sonuc=(sonuc*songirilendeger)/100; break;  
			case "√": sonuc=Math.sqrt(songirilendeger);  break;  
			case "^": sonuc=Math.pow(sonuc,songirilendeger); break;  
		  } 
		 //songirilendeger = 0;
		islendimi = true;

	 
	  $('#islemsonuc').html(sonuc);
	  
	  }else if(keyCode == 107){
      $('#topla').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#topla').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+' + ');
	  operator[operator.length] = "+";

	  if(islendimi == true){ islendimi = false; return false;}	
	  
	  islem[islem.length] = songirilendeger;
	  if(operator.length != islem.length){ return false; }
	  sonuc=sonuc+songirilendeger;
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;

	  
	  }else if(keyCode == 109){
      $('#cikar').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#cikar').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+' - ');
	  operator[operator.length] = "-";
	  if(islendimi == true){ islendimi = false; return false;}	
	 
	  islem[islem.length] = songirilendeger;
	  if(operator.length != islem.length){ return false; }
	  if(islem.length <= 1){ if(sonuc == 0){ sonuc = islem[islem.length-1]; } return false; }
	  
	  sonuc=(sonuc)-(songirilendeger);
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;
	  
	  }else if(keyCode == 111){
      $('#bol').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#bol').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text()+' / ');
	  operator[operator.length] = "/";
	  if(islendimi == true){ islendimi = false; return false;}	
	  
	  islem[islem.length] = songirilendeger;
	  if(operator.length != islem.length){ return false; }
	  
	  //if(sonuc == 0){ sonuc =  parseFloat(islem[islem.length-1]); };
	  
	  sonuc=sonuc/songirilendeger;
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;

	  
	  }else if(keyCode == 106){
      $('#carp').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#carp').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
      $('#isl').text($('#isl').text()+' x ');
	  operator[operator.length] = "x";
	  if(islendimi == true){ islendimi = false; return false;}	
	  
	  
	  if(songirilendeger == 0){ songirilendeger = 1}else if(sonuc == 0){ sonuc = 1; };
	  islem[islem.length] = songirilendeger;
	  if(operator.length != islem.length){ return false; }
	  
	  if(songirilendeger != 0){
	  sonuc=sonuc*songirilendeger;
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;
	  }
	  
	  
	  }else if(keyCode == "yuzde"){
      $('#yuzde').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#yuzde').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
      $('#isl').text($('#isl').text()+' % ');
	  operator[operator.length] = "%";
	  if(islendimi == true){ islendimi = false; return false;}	
	  //if(songirilendeger == 0){ songirilendeger = 1}else if(sonuc == 0){ sonuc = 1; };
	  islem[islem.length] = songirilendeger;

      if(islem.length <= 1){ return false; }
	  if(operator.length != islem.length){ return false; }
	  
	  
	  if(songirilendeger != 0){
	  sonuc=(sonuc*songirilendeger)/100;
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;
	  }
	  
	  }else if(keyCode == "karekok"){
      $('#karekok').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#karekok').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
      $('#isl').text($('#isl').text()+' √ ');
	  operator[operator.length] = "√";
	  if(islendimi == true){ islendimi = false; return false;}	
	  
	  if(songirilendeger == 0){ songirilendeger = 1}else if(sonuc == 0){ sonuc = 1; };
	  
	  islem[islem.length] = songirilendeger;
	  
	  if(operator.length != islem.length){ return false; }
	  
	  
	  if(songirilendeger != 0){
	  sonuc=Math.sqrt(songirilendeger);
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;
	  }
	  
	  }else if(keyCode == "usbul"){
      $('#usbul').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#usbul').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
      $('#isl').text($('#isl').text()+' ^ ');
	  operator[operator.length] = "^";
	  if(islendimi == true){ islendimi = false; return false;}	
	  
	  if(sonuc == 0){ sonuc = songirilendeger; };
	  islem[islem.length] = songirilendeger;
	  
	  if(islem.length <= 1){ return false; }
	  if(operator.length != islem.length){ return false; }
	  
	  if(songirilendeger != 0){
		  
	  sonuc = Math.pow(sonuc,songirilendeger);
	  $('#islemsonuc').html(sonuc);
	  songirilendeger=0;
	  }
		    
	  
	  }else if(keyCode == 8){
      $('#clear').animate({  backgroundColor: "#AF2B26",	backgroundImage: 'linear-gradient(to bottom, #AF2B26 0px, #942422 100%)' }, 50 );
	  $('#clear').delay(200).animate({ backgroundColor: "#d9d9d9", backgroundImage: 'none' }, 50 );
	  $('#isl').text($('#isl').text().substr(0,uzunluk-1));

  }

/* CSS Bug Fix */
$('#sayilar div,#operatorler div,#ustoperatorler div').css("background-color", "");
}