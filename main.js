$(document).ready(function(){
    
    // versão jquery - adicionar evento de click

    $('header button').click(function(){
        // faz com que o item apareça deslizando para baixo
        $('form').slideDown() 
    })

    $('#botao-cancelar').click(function(){
         // faz com que o item deapareça deslizando para cima
        $('form').slideUp()
    })

    //pela função on
                //nome do evento
    $('form').on('submit',function(e){
         //previne a atualizção da página
            e.preventDefault()

        //recupera o valor inserido
            const  enderecoDaImgNova = $("#endereco-de-img").val() 
        
        //insere o valor inserido no documento
            const novoItem = $("<li style='display: none' ></li>")

        //adiciona o elemto dentro da abertura do li
            $(`<img src="${enderecoDaImgNova}"/>`).appendTo(novoItem)
                    $(`
                <div class="overlay-imagem-limk">
                    <a href='${enderecoDaImgNova}' title="Veja em tamanho real" target="_blank">Veja em tamanho real</a>
                </div>    
            `).appendTo(novoItem)
            $(novoItem).appendTo('ul')

        //faz com que a img apareça
            $(novoItem).fadeIn(1000)

        //apaga o valor do input
            $('#endereco-de-img').val('')
        
    })

})