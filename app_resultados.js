
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
    removeFinalizados()
    updateDivsGrupoActivo(arrayFinalizados)
}


// carga partidos

function cargaPartidos(){
    grupo=grupos_string[grupo_activo]
    grupoPartidos=fixture.filter(item => item.group == grupo)  
    for (let i = 0; i < 6; i++) {
        divPartidos[i].id=grupoPartidos[i]['match_id']
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

inputs=document.getElementsByTagName('input')


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



// get Resultados, hay que moverlo a resultados.html

resName=urlParams.get('user')
let data 
let preds2

if (resName) {



var raw = JSON.stringify({
  "name": resName
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};
//tiro predecciones
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

}
}

// update fixture
let update
var myHeaders = new Headers();

myHeaders.append("x-token", "36FE17A0-2E7B-456F-9855-124601188D55");
myHeaders.append("x-value", "f794a873-33e0-40d1-99d0-c06331a6d507");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let arrayFinalizados

fetch("https://x14blnzsqf.execute-api.us-east-2.amazonaws.com/prod/fixture", requestOptions)
  .then(response => response.text())
  .then(result => arrayFinalizados=getFinalizados(JSON.parse(result)))
  .then(arrayFinalizados => insertDivsGrupoActivo(arrayFinalizados))
  .catch(error => console.log('error', error));


// partidos terminados
function getFinalizados(update){ 
    arrayFinalizados=update.filter( (x)=> x['minutes_left_to_start_match']<0 )

    return arrayFinalizados
}

//


// para los iunputs que YA SE JUGARON class="full-group completed-match blocked"
// para los inputs que no se jugaron class="full-group completed-match"

// si el partido se jugo insertar ests 2 htmls en la primera carga:
function insertDivsGrupoActivo(arrayFinalizados){
    arrayFinalizadosGrupoActivo=arrayFinalizados.filter((x)=>x['group']==grupos_string[grupo_activo])

    for (let j=0;j<arrayFinalizadosGrupoActivo.length-1;j++) {
        partido=document.getElementById(arrayFinalizadosGrupoActivo[j]['match_id'])
        pronostico=partido.getElementsByClassName('pronostico')[0]
        goles1=arrayFinalizadosGrupoActivo[j]['goal_1_opta']
        goles2=arrayFinalizadosGrupoActivo[j]['goal_2_opta']
        pred=[parseInt(preds[grupo_activo][j][0]),parseInt(preds[grupo_activo][j][1])]
        resultado=[parseInt(goles1),parseInt(goles2)]

        puntos=calculoPuntaje(pred,resultado)
        puntosHtml='<div class="puntos mostrar izquierda">OBTUVISTE <br><span>'+puntos+'</span> PUNTOS</div>'

        finalHtml='<div class="status full_time"><div class="resultado"><span class="penal"> </span> '+ goles1 +'&lt; <span>FINALIZADO</span> &gt;' +goles2+ '<span class="penal"> </span></div></div>'
        nuevo_div=document.createElement('div')
        nuevo_div2=document.createElement('div')

        nuevo_div.innerHTML=puntosHtml
        nuevo_div2.innerHTML=finalHtml

        pronostico.prepend(nuevo_div)
        pronostico.append(nuevo_div2)
    }
}


function updateDivsGrupoActivo(arrayFinalizados){
    arrayFinalizadosGrupoActivo=arrayFinalizados.filter((x)=>x['group']==grupos_string[grupo_activo])

    for (let j=0;j<arrayFinalizadosGrupoActivo.length;j++) {
        partido=document.getElementById(arrayFinalizadosGrupoActivo[j]['match_id'])
        pronostico=partido.getElementsByClassName('pronostico')[0]
        goles1=arrayFinalizadosGrupoActivo[j]['goal_1_opta']
        goles2=arrayFinalizadosGrupoActivo[j]['goal_2_opta']
        pred=[parseInt(preds[grupo_activo][j][0]),parseInt(preds[grupo_activo][j][1])]
        resultado=[parseInt(goles1),parseInt(goles2)]

        puntos=calculoPuntaje(pred,resultado)
        puntosHtml='<div class="puntos mostrar izquierda">OBTUVISTE <br><span>'+puntos+'</span> PUNTOS</div>'


        finalHtml='<div class="status full_time"><div class="resultado"><span class="penal"> </span> '+ goles1 +'&lt; <span>FINALIZADO</span> &gt;' +goles2+ '<span class="penal"> </span></div></div>'
        nuevo_div=document.createElement('div')
        nuevo_div2=document.createElement('div')

        nuevo_div.innerHTML=puntosHtml
        nuevo_div2.innerHTML=finalHtml

        pronostico.prepend(nuevo_div)
        pronostico.append(nuevo_div2)
    }
}


function removeFinalizados(){
// importante que no sea live
ups=document.querySelectorAll('.puntos')
downs=document.querySelectorAll('.status.full_time')
for (k=0;k<ups.length;k++){
    ups[k].remove()
    downs[k].remove()
}
 
}


// puntaje

function calculoPuntaje(pred,resultado){

    if (arrayEquals(pred,resultado)){
        return 5
    }
    else if( (resultado[0] > resultado[1]) & (pred[0] > pred[1])){
        return 3
    }
    else if( (resultado[0] < resultado[1]) & (pred[0] < pred[1])){
        return 3
    }
    else if( (resultado[0] == resultado[1]) & (pred[0] == pred[1])){
        return 3
    }
    else {
        return 0
    }

}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
// cargar resultados y cambiar los inputs

divsInput=document.querySelectorAll('input')


for (let x of Array.from(divsInput)
) {
    x.disabled=true
    x.classList.add('blocked')
}