 /*Futuras imagens que irie adicionar e controla por essas variáveis*/

let imagen = document.getElementById("ima");


/*Futuras imagens que irie adicionar e controla por essas funcions*/
let image = document.getElementById("image");
    function imagens(){
        let imag = document.getElementById("imag").style.display ="none";
        
        let image = document.getElementById("image").style.display ="flex";
    
    }
  /*fonction para controle de slide de imagens com a seta */
    function imageIma(){
        let imag = document.getElementById("imag").style.display ="none";
        let image = document.getElementById("image").style.display ="none";
        let imagen = document.getElementById("iima").style.display ="flex"; 
    }


      /*Bloco de Declarações de variávies da imagem, frase
       e a li da página principal*/ 
   let violencia,inclusao,inspiracao,knowon =document.querySelector("#VioLe","#know", "#WonIns","#IncluSion");
   let agreSSoes = document.querySelector("#vilence");
   

let  womaInpirar = document.querySelector("#insPira")

let inclurFemem = document.querySelector("#incluFeme")
let  knowomulher = document.querySelector("#learn")
let ReiSaLoMon = document.querySelector("#salomao")
let virsalo = document.querySelector("#fraseSalo")
let logarCadastro = document.querySelector("#logo")


 //Animamções da lista da página principal.
 // Todas às li irão receber a mesma função (function VioLenc())

   function VioLenc(){
    inspiracao = document.querySelector("#WonIns").animate(
      [
        {transform: "rotate(89170deg)", backgroundColor: "#ffff",
        borderStyle:"dotted, inset",
        borderColor:"#0f0",
        borderWidth: "1em",
        fontSize: "0.0em",
       opacity:"0.4",
      borderStyle:"groove",
     
      borderRadius:"100em",
       padding:"2%",
       width:"10%",
       },
       
{transform: "scale(0, 0)", backgroundColor: "#ffff",
fontSize: "0.5em",
borderStyle:"dotted",
opacity:"0.9",

borderColor:"#000",

padding:"1%",
width:"7%",}
     
       ],
     
     {
     duration: 3000,
     },


    );

   

    knowon = document.querySelector("#know").animate(
      [
        {transform: "rotate(89170deg)", 
        backgroundColor: "#ffff",
        borderStyle:"dotted, inset",
        borderColor:"#0f0",
        borderWidth: "1em",
        fontSize: "0.0em",
       opacity:"0.4",
      borderStyle:"groove",
     
      borderRadius:"100em",
       padding:"2%",
       width:"10%",
      },

{transform: "scale(0, 0)", backgroundColor: "#ffff",
fontSize: "0.5em",
borderStyle:"dotted",
opacity:"0.9",

borderColor:"#000",

padding:"1%",
width:"7%",}
     
       ],
     
     {
     duration: 4000,
     },

    );

    inclusao = document.querySelector("#IncluSion").animate(

      [
        {transform: "rotate(89170deg)", 
        backgroundColor: "#ffff",
        borderStyle:"dotted, inset",
        borderColor:"#0f0",
        borderWidth: "1em",
        fontSize: "0.0em",
       opacity:"0.4",
      borderStyle:"groove",
     
      borderRadius:"100em",
       padding:"2%",
       width:"10%",
       },

{transform: "scale(0, 0)",
 backgroundColor: "#ffff",
fontSize: "0.5em",
borderStyle:"dotted",
opacity:"0.9",

borderColor:"#000",

padding:"1%",
width:"7%",}
     
       ],
     
     {
     duration: 2000,
     },

     );

        
     
       //Animações da "li" com o ID "VioLE".
      violencia = document.querySelector("#VioLe").animate(
      
        [
         {transform: "rotate(89170deg)",
          backgroundColor: "#ffff",
         borderStyle:"dotted, inset",
         borderColor:"#0f0",
         borderWidth: "1em",
         fontSize: "0.0em",
        opacity:"0.4",
       borderStyle:"groove",
      
       borderRadius:"100em",
        padding:"2%",
        width:"10%",
        },

 {transform: "scale(0, 0)",
  backgroundColor: "#ffff",
 fontSize: "0.5em",
borderStyle:"dotted",
opacity:"0.9",

borderColor:"#000",

padding:"1%",
width:"7%",}
      
        ],
      
      {
      duration: 1000,
      },

      );
      //Estilização da "li" com o ID "know".
      know.style.backgroundColor ="pink"; 
   know.style.color ='wellow';
      know.style.paddingLeft ="2%";
      know.style.paddingTop ="2%";
      know.style.paddingBottom ="1";
      know.style.paddingRight ="2%";
      know.style.borderRadius ='100em';
      
      //Estilização da "li" com o ID "VioLe".
      VioLe.style.backgroundColor ="pink"; 
      VioLe.style.color ='wellow';
      VioLe.style.paddingLeft ="2%";
      VioLe.style.paddingTop ="1%";
      VioLe.style.paddingBottom ="1%";
      VioLe.style.paddingRight ="2%";
      VioLe.style.borderRadius ='100em';
    
       //Estilização da "li" com o ID "IncluSion".
 IncluSion.style.backgroundColor ="pink"; 
 IncluSion.style.color ='wellow'; 
 IncluSion.style.paddingLeft ="2%";
 IncluSion.style.paddingTop ="1%";
 IncluSion.style.paddingBottom ="1%";
 IncluSion.style.paddingRight ="2%";
 IncluSion.style.borderRadius ='100em'; 

  //Estilização da "li" com o ID "WonIns".
 WonIns.style.backgroundColor ="pink"; 
 WonIns.style.color ='wellow'; 
 WonIns.style.paddingLeft ="2%";
 WonIns.style.paddingTop ="1%";
 WonIns.style.paddingBottom ="1%";
 WonIns.style.paddingRight ="2%";
 WonIns.style.borderRadius ='100em'; 
 

}

violencia,inclusao,inspiracao,knowon.addEventListener("load", VioLenc());

/*animação da imagem da página principal*/
function LomoRei(){

ReiSaLoMon = document.querySelector("#salomao").animate(


  [
    {transform:"translateX(0%)",
   position: "fixed",
    width:"0%",
    height:"0",
   
  },
 
  
    {fontSize:"4em"},
  ],
  {
duration: 1000,
  }
);}


ReiSaLoMon.addEventListener('load', LomoRei());

function fraeisalo(){
  virsalo = document.querySelector("#fraseSalo").animate(
   
    
  [
    {fontSize:"0em"},
    {backgroundColor:" rgb(238, 42, 172) ",
    marginLeft:"-1%",
     transform: "scale(-30, 2)",
      color:"#000",
     opacity:"0.1",
  backgroundColor:"pink",

  },
  
 
   
  ],
  {
duration: 3300,
  }
);
}
virsalo.addEventListener("load", fraeisalo())
 


  var novoParagrafo = document.createElement("p");

var texto = document.creatTextNode('asdfasfasfasdfdfa');

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);
var body = document.querySelector('body');

body.appendChild(novoParagrafo);