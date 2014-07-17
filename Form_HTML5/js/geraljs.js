// JavaScript Document

function valida_email(email)
{
	var obj = eval("document.forms[0].email");
	var txt = obj.value;
	
	if ((txt.length != 0) && ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)))
	{
	document.getElementById("msgErro").innerHTML=('O Campo E-mail esta incorreto!');
	document.getElementById("email").style.backgroundColor="#FFAAAA";
	}
}

function limpa_msn_erro()
{
	var obj = eval("document.forms[0].email");
	
	document.getElementById("msgErro").innerHTML=('');
	document.getElementById("email").value='';
	document.getElementById("email").style.backgroundColor="#FFFFFF";
	
}

function limpar_dados()
{

	document.getElementById("homepage").value='';
	document.getElementById("search_dados").value='';
	document.getElementById("weeker").value='';
	document.getElementById("timer").value='';
	document.getElementById("botao_salvar").disabled=true;
}

function salvar_dados()//criar função de salvar homepage
{
	var obj = eval("document.forms[2].search_dados");
	var txt_search_dados = obj.value;
	
	var obj = eval("document.forms[2].homepage");
	var txt_homepage = obj.value;
	
	if((txt_search_dados.length != 0)&&(txt_homepage.length != 0))
	{
	document.getElementById("botao_salvar").disabled=false;		
	}
	else
	{
	document.getElementById("botao_salvar").disabled=true;
	}
}

function carrega_canvas()
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var grd=ctx.createLinearGradient(0,0,170,0);
	
	grd.addColorStop(0,"blue");
	grd.addColorStop(1,"white");	
	
	ctx.fillStyle=grd;
	ctx.fillRect(10,10,150,85);
	ctx.beginPath();
	
	ctx.arc(85,52,40,0,2*Math.PI);
	ctx.stroke();
	

	document.getElementById("botao_salvar").disabled=true;		

}


function troca_cor1()
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var grd=ctx.createLinearGradient(0,0,170,0);
	
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"snow");	
	
	ctx.fillStyle=grd;
	ctx.fillRect(10,10,150,85);
	ctx.beginPath();
	
	ctx.arc(85,52,40,0,2*Math.PI);
	ctx.stroke();
	
	document.getElementById("troca_cor1").disabled=true;
	document.getElementById("troca_cor2").disabled=false;
}

function troca_cor2()
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var grd=ctx.createLinearGradient(0,0,170,0);
	
	grd.addColorStop(0,"gold");
	grd.addColorStop(1,"silver");	
	
	ctx.fillStyle=grd;
	ctx.fillRect(10,10,150,85);
	ctx.beginPath();
	
	ctx.arc(85,52,40,0,2*Math.PI);
	ctx.stroke();
	
	document.getElementById("troca_cor1").disabled=false;
	document.getElementById("troca_cor2").disabled=true;
}




