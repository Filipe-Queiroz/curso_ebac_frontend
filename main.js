$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e){
        e.preventDefault();        
        const tarefaAdicionada = $('#tarefa-adicionada').val().trim();

        if (tarefaAdicionada) {
            const novoItem = $('<li class="tarefa-item"></li>').text(tarefaAdicionada);
            $('#lista-tarefas').append(novoItem);
            $('#tarefa-adicionada').val('');
        }
    });

    $('#lista-tarefas').on('click', '.tarefa-item', function() {
        $(this).toggleClass('concluida');
    });
});
