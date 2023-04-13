function resposta(option){
    let resposta1 = document.getElementById('resp-1')
    let resposta2 = document.getElementById('resp-2')
    let resposta3 = document.getElementById('resp-3')

    if(option === 1){
        resposta1.style.backgroundColor = 'green'
        resposta1.style.color = 'white'
    }
    else if(option === 2){
        resposta2.style.color = 'white'
        resposta2.style.backgroundColor = 'red'
    }
    else{
        resposta3.style.color = 'white'
        resposta3.style.backgroundColor = 'red'
    }
    setTimeout(function() {
        resposta1.style.backgroundColor = "";
        resposta1.style.color = '' 
        resposta2.style.backgroundColor = "";
        resposta2.style.color = ''
        resposta3.style.backgroundColor = "";
        resposta3.style.color = ''  // redefina a cor aqui
      }, 1500);
}

function resposta2(option){
    let resposta1 = document.getElementById('resp-1')
    let resposta2 = document.getElementById('resp-2')
    let resposta3 = document.getElementById('resp-3')

    if(option === 1){
        resposta1.style.backgroundColor = 'red'
        resposta1.style.color = 'white'
    }
    else if(option === 2){
        resposta2.style.color = 'white'
        resposta2.style.backgroundColor = 'green'
    }
    else{
        resposta3.style.color = 'white'
        resposta3.style.backgroundColor = 'red'
    }
    setTimeout(function() {
        resposta1.style.backgroundColor = "";
        resposta1.style.color = '' 
        resposta2.style.backgroundColor = "";
        resposta2.style.color = ''
        resposta3.style.backgroundColor = "";
        resposta3.style.color = ''  // redefina a cor aqui
      }, 1500);
}

