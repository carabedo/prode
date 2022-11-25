
// selecciono el div con los iconos de los grupos
let grupo_activo = 0
menuGrupos=document.querySelector("#menu-grupos")
btnsGrupos=menuGrupos.querySelectorAll('li')
grupos_string=['A','B','C','D','E','F','G','H']
divPartidos=document.getElementsByClassName('partidos-container')[0].getElementsByClassName('partido')

// agrego un eventlistener a cada boton

for (let indexbtngrupo = 0; indexbtngrupo < 8 ; indexbtngrupo++) {
    btngrupo=btnsGrupos[indexbtngrupo]
    btngrupo.addEventListener('click',()=>activarGrupo(indexbtngrupo))
}

// funcion principal 

function activarGrupo(indexbtngrupo) {
    nombreGrupo=document.getElementsByClassName('nombre-grupo')
    // cambia grupo 
    btnsGrupos[grupo_activo].classList.toggle('active')
    grupo_activo=indexbtngrupo
    nombreGrupo[0].innerHTML=grupos_string[indexbtngrupo]
    btnsGrupos[grupo_activo].classList.toggle('active')
    // carga partidos
    cargaPartidos()

}


// carga partidos

function cargaPartidos(){
    grupo=grupos_string[grupo_activo]
    grupoPartidos=fixture.filter(item => item.group == grupo)  
    for (let i = 0; i < 6; i++) {
        t1=grupoPartidos[i].team_1
        t2=grupoPartidos[i].team_2
        divPartidos[i].getElementsByClassName('pais equipo1')[0].innerText=t1
        divPartidos[i].getElementsByClassName('pais equipo2')[0].innerText=t2
        time=grupoPartidos[i].datetime
        divTiempo=divPartidos[i].getElementsByClassName('status fecha-hora')[0]
        divTiempo.innerText=parsetime(time)

    }
    cargaPreds()
}




// parsea datime en algo mas legible
function parsetime(datetime) {
    var formato = {
        day: "2-digit",
        weekday: "short",
        month: "short",
        hour: "numeric",
        minute: "2-digit"
    }
    a = new Date(datetime)
    s = new Intl.DateTimeFormat("es-AR",formato).format(a)

    fecha = s.slice(0, 11)
    hora = s.slice(11, s.length);

    return fecha.concat(". / ").concat(hora).replace(",", ".").toUpperCase().concat(" Hs.")
}



function cargaPreds(){
    g=grupo_activo
    for (let i = 0; i < inputs.length; i++) {
        input=inputs[i]
        m=Math.ceil(Math.round((i+1)/2)-1)
        n=i%2
        input.value=preds[g][m][n]
    }    

}



// get id


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
userId=urlParams.get('id')
userName=urlParams.get('n')

console.log(userId)


// get Resultados, hay que moverlo a resultados.html

resName=urlParams.get('user')
console.log(resName)
let data 
let preds2

if (resName) {

console.log('fetch')


var raw = JSON.stringify({
  "name": resName
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://twekv6rsjueiprmp5sbwjcdiwy0nedzi.lambda-url.us-east-1.on.aws", requestOptions)
  .then(response => response.text())
  .then(result => data = parseFetch(result))
  .catch(error => console.log('error', error));


function parseFetch(data) {  
resultados=JSON.parse(data)
preds2=resultados['preds']
let newArr = [];
while(preds2.length) newArr.push(preds2.splice(0,12));

let Res = []

for (let i =0 ; i< 8; i++) {
let dummi = []    
while(newArr[i].length) dummi.push(newArr[i].splice(0,2));
Res.push(dummi)
preds = Res
cargaPreds(grupo_activo)
}
guardaBTN=document.querySelector("#btnGuardar")
guardaBTN.disabled=true
}
}

// update fixture
// para los iunputs que YA SE JUGARON class="full-group completed-match blocked"
// para los inputs que no se jugaron class="full-group completed-match"


// si el partido se jugo insertar este html:

finalHtml='<div class="resultado"><span class="penal"> </span> 1 &lt; <span>FINALIZADO</span> &gt; 2<span class="penal"> </span></div>'


// cargar resultados y cambiar los inputs

divsInput=document.querySelectorAll('input')


for (let x of Array.from(divsInput)
) {
    x.disabled=true
    x.classList.add('blocked')
}