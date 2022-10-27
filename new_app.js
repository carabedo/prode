
parsetime = function(datetime) {
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



menuGrupos=document.querySelector("#menu-grupos")



for (let btngrupo of menuGrupos.querySelectorAll('li')) {
    btngrupo.addEventListener('click',()=>logGrupo(btngrupo))
}


function logGrupo(grupo) {
    console.log(grupo.innerText)
}






nombreGrupo=document.getElementsByClassName('nombre-grupo')

function selectGroup(grupo){
    return fixture.filter(item => item.group == grupo)
}


function getGrupoStr(){
    botonActivo=document.getElementsByClassName('router-link-exact-active active')[1]
    return botonActivo.innerText
}


function getGrupo(){
    grupoStr=getGrupoStr()
    nombreGrupo[0].innerHTML=grupoStr
    grupoPartidos=selectGroup(grupoStr)
  
    containerPartidos=document.getElementsByClassName('partidos-container')[0].getElementsByClassName('partido')

    for (let i = 0; i < containerPartidos.length; i++) {
        t1=grupoPartidos[i].team_1
        t2=grupoPartidos[i].team_2
        containerPartidos[i].getElementsByClassName('pais equipo1')[0].innerText=t1
        containerPartidos[i].getElementsByClassName('pais equipo2')[0].innerText=t2
        time=grupoPartidos[i].datetime
        divTiempo=containerPartidos[i].getElementsByClassName('status fecha-hora')[0]
        divTiempo.innerText=parsetime(time)
    }



}

function addlistener(){
    menuGrupos=document.querySelector('#menu-grupos')
    menuGrupos.addEventListener('click', getGrupo)

}

addlistener()





btnguardado='<div class="guardar"><button id="btnGuardar" class="active"> Guardar pronóstico </button></div>'
nuevo_div=document.createElement('div')
nuevo_div.innerHTML=btnguardado
div=document.getElementsByClassName('partidos-container')[0]
div.append(nuevo_div)



btnGuardar.addEventListener('click', sendProde)

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? ['',''] : zeros(dimensions.slice(1)));
    }

    return array;
}

preds=zeros([8,6])

inputs=document.getElementsByTagName('input')



for (let i = 0; i < inputs.length; i++) {
    input=inputs[i]
    input.addEventListener('input',() => guardaPred(i))
}

function guardaPred(i){
    g=grupo_activo
    //console.log(i,inputs[i].value)
    m=Math.ceil(Math.round((i+1)/2)-1)
    n=i%2
    //console.log(m,n)
    preds[g][m][n]=inputs[i].value

}

let grupo_activo
grupo_activo=0

gruposlis=document.getElementById('menu-grupos').getElementsByTagName('li')

for (let i = 0; i < gruposlis.length; i++) {
    grupo=gruposlis[i]
    grupo.addEventListener('click',() => renderPred(i))
}

function renderPred(g){
    grupo_activo=g
    for (let i = 0; i < inputs.length; i++) {
        input=inputs[i]
        m=Math.ceil(Math.round((i+1)/2)-1)
        n=i%2
        input.value=preds[g][m][n]
    }    

}


function sendProde(){
    if (checkPreds(preds)) {
    id=prompt('mail?')
    postAPI(preds,id)
    }
    else {
    console.log('')
    }
}



function checkPreds(preds){
    flatpreds=preds.flat().flat()
    flatpreds.filter(item => item !='')
    if (flatpreds.filter(item => item !='').length != flatpreds.length) {
        alert('faltan partidos')
        return false
    } else {
        return true
    }
}


function postAPI(preds,id){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        id: id ,
        preds : preds.flat().flat()
    });
    
    var requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://nqsv0uq9y2.execute-api.us-east-1.amazonaws.com/default/postProde", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}