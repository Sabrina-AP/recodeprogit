function exibir_categoria(categorias){
    let elementos = document.getElementsByClassName('celula');
    for(let i=0; i<elementos.length; i++){
        if (categorias == elementos[i].id)
            elementos[i].style="display: inline-block";
        else
            elementos[i].style="display:none";
    }
};

let exibir_tudo = () => {
    let elementos = document.getElementsByClassName('celula');
    for(let i=0; i<elementos.length; i++){
        elementos[i].style="display:inline-block";
    }
};

let ampliar = (imagens) => {
    if (imagens.width==53)
        imagens.width=(imagens.width)*2
    else 
        imagens.width/=2;
};