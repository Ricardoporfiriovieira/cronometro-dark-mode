function meuRelogio(){
    const iniciar = document.querySelector( '.iniciar');
    const relogio = document.querySelector('.relogio');

    let timer;
    let segundos = 0;
    let clicou = false;

    const container = document.querySelector('.container');
    const botao = document.querySelectorAll('button');

    /** ali em cima apenas selecionei os elementos e declarei as variáveis que irei usar */

    document.addEventListener('click', function(e){ //capturando o evento de click
        const event = e.target; //capturando o evento de click

        if(event.classList.contains('iniciar')){  //função para quando clicar em um elemento com a classe .iniciar
            iniciar.innerHTML = 'Iniciar';
            if(clicou === false){
                clicou = true;
                relogio.classList.remove('pausado');
                timer = setInterval(function(){
                    segundos++;
                    atualizaHora(segundos);
                }, 1000);
            }
        }

        if(event.classList.contains('pausar')){ //função para quando clicar em um elemento com a classe .parar
            iniciar.innerHTML = 'Retomar';
            setTimeout(function(){
                clicou = false;
                relogio.classList.add('pausado');
                clearInterval(timer, 0.1)
            });
        }

        if(event.classList.contains('zerar')){ //função para quando clicar em um elemento com a classe .zerar
            setTimeout(function(){

                clicou = false;
                relogio.classList.remove('pausado');
                clearInterval(timer, 1)
            });
            segundos = 0;
            atualizaHora(segundos);
        }

        if(event.classList.contains('checkbox')){ //função para quando clicar em um elemento com a classe .checkbox para ativar o darkmode
            document.body.classList.toggle('dark')
            container.classList.toggle('dark');
            
            
            for(let i in botao){
                botao[i].classList.toggle('dark');
            }
        }
    })

    function atualizaHora(milisegundos){ //função que conta o tempo através dos segundos quando clica o botão iniciar
        let data =  new Date(milisegundos * 1000);
        relogio.innerHTML = (data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        }));
    }
}

meuRelogio();







