$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#texto-tarefa').val();
        const linkTarefa = $(`<a href="">${nomeTarefa}</a>`);
        console.log(nomeTarefa);
        const novaTarefa = $('<li></li>');
        linkTarefa.appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#texto-tarefa').val('');

        linkTarefa.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('risca-texto');
        })

    })
})