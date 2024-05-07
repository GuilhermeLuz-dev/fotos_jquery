$(document).ready(function () {
    $("header button").click(() => {
        $("form").slideDown();
    })
    $("#button_cancelar").click(() => {
        $("form").slideUp();
    })

    $("form").on("submit", (e) => {
        e.preventDefault();
        const endereco = $("#endereco").val();
        const novoItem = $("<li style='display:none'></li>");
        $(`<img src="${endereco}" rel="imagem">`).appendTo(novoItem)
        $(`<div class="overlay_img_link">
            <a herf="${endereco}" target="_blank" title="Veja a imagem em tamanho real">Veja a imagem em tamanho real</a>
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        novoItem.fadeIn(1000);
        $("#endereco").val('');
    })
})