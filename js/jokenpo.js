//funções:
function jogar(){
    
    //checa se foi selecionada uma das opções do formulário:
    if(
    document.getElementById('pedra').checked == false &&
    document.getElementById('papel').checked == false &&
    document.getElementById('tesoura').checked == false
    ){  
        $('#exampleModal').modal()
        $('#ganhou').hide()
        document.getElementById('placar').innerHTML = 'Selecione uma Opção!'
    }else{
        $('#exampleModal').modal()
        $('#ganhou').fadeIn()
        //pedra = 0, papel = 1, tesoura = 2
        var imagemSorteio = Math.floor(Math.random() * 3)

        switch(imagemSorteio){
            case 0:
                document.getElementById("pc").src="imagens/pcpedra.png"
                break

            case 1:
                document.getElementById("pc").src="imagens/pcpapel.png"
                break
                
            case 2:
                document.getElementById("pc").src="imagens/pctesoura.png"
                break
        }

        //validação de quem ganhou:

        if((document.getElementById("pedra").checked == true && imagemSorteio == 0) ||
        (document.getElementById("papel").checked == true && imagemSorteio == 1)||
        (document.getElementById("tesoura").checked == true && imagemSorteio == 2)
        ){
            document.getElementById('placar').innerHTML = 'Empate'
            document.getElementById('ganhou').src="imagens/source.gif"

        }else if((document.getElementById("pedra").checked == true && imagemSorteio == 1) ||
        (document.getElementById("papel").checked == true && imagemSorteio == 2)||
        (document.getElementById("tesoura").checked == true && imagemSorteio == 0)
        ){
            document.getElementById("placar").innerHTML = 'Computador Ganhou!'
            document.getElementById("ganhou").src="imagens/loser.gif"
        }else{
            document.getElementById('placar').innerHTML = 'Você Ganhou!'
            document.getElementById("ganhou").src="imagens/tenor.gif"
        }
    }
}

function resetar(){
    document.getElementById('pc').src="imagens/pc.png"
    document.getElementById('placar').innerHTML = " "
    document.getElementById("ganhou").src="#"
}