
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


// inputs

// funcion auxiliar para armar una lista de listas
// necesito 6 listas de 8 valores

function nulos(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? ['',''] : nulos(dimensions.slice(1)));
    }

    return array;
}

preds=nulos([8,6])


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

function cargaPreds(){
    g=grupo_activo
    for (let i = 0; i < inputs.length; i++) {
        input=inputs[i]
        m=Math.ceil(Math.round((i+1)/2)-1)
        n=i%2
        input.value=preds[g][m][n]
    }    

}


// post preds

btnGuardar.addEventListener('click', sendProde)

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
    .then(response => console.log(response))
    .catch(error => console.log('error', error));
}

// relleno de 0 para testeo

function filltest(){
    preds=zeros([8,6])
    cargaPreds()
}

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? ['0','0'] : zeros(dimensions.slice(1)));
    }
    return array;
}

logo=document.querySelector("#appCabezal > h1 > span.logo")
logo.addEventListener('click',filltest)

// solo numeros y next focus

function checkNumAndFocus(e) {
    target = this
    a = "0123456789".includes(e.key);
    a ? setTimeout(()=>focusNext(e), 100) : e.preventDefault()
}


function focusNext(e) {
    ts = Array.from(document.querySelectorAll('input[type="tel"]'))
    a = ts.indexOf(e.target);
    a < ts.length - 1 ? ts[a + 1].focus() : document.querySelector("#btnGuardar").focus()
}

// le agrego los eventlistener del checknumber

for (let i = 0; i < inputs.length; i++) {
    input=inputs[i]
    input.addEventListener('keydown',checkNumAndFocus)
}

// + - 