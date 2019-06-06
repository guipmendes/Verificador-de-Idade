
function verifique(){
    
    var ano = document.querySelector("#ano")
    var result = document.querySelector('#resultado')
    var data = new Date()
    var anoatu = data.getFullYear()
    var idade = anoatu - (ano.value)
    var img = document.createElement('img')
    var genero = ''
    img.setAttribute('id','foto')

    if(ano.value.lenth==0 || (ano.value)>anoatu){
        result.innerHTML=`Ano unitlizado é invalido!`
    }else if(document.getElementsByName('sexo')[0].checked){
        
        result.innerHTML = `É um Homem e sua idade é ${idade}`
        document.body.style.background = 'blue'
        genero = 'homem'
    }else{
        result.innerHTML = `É uma Mulher e sua idade é ${idade}`
        document.body.style.background = 'pink'
        genero = 'mulher'
    }

    if(idade<3){
        img.setAttribute('src','imagens/bebe_'+genero+'.jpg')
    }else if(idade<10){
        img.setAttribute('src','imagens/crianca_'+genero+'.jpg')
    }else if(idade<18){
        img.setAttribute('src','imagens/jovem_'+genero+'.jpg')
    }else if(idade<60){
        img.setAttribute('src','imagens/adulto_'+genero+'.jpg')       
    }else{
        img.setAttribute('src','imagens/idoso_'+genero+'.jpg')
    }
    result.appendChild(img)
}