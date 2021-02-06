function exibir_todos() {
    let elementos = document.getElementsByClassName('celula');
    for(let i=0; i<12; i++){
        elementos[0].children[0].children[i].style="display:inline-block";
    }
}

function exibir_categorias(categorias) {
    let elementos = document.getElementsByClassName('celula');
    for(let i = 0; i < 12; i++){
        if (categorias === elementos[0].children[0].children[i].id)
            elementos[0].children[0].children[i].style="display: inline-block";
            
        else{
            elementos[0].children[0].children[i].style="display:none";
        }
        //console.log(elementos)
    }
}

const aumentar = (image) => {
    if (image.style.width === "106px") {
        image.style.width = "53px";
    }
    else {
        image.style.width = "106px";
    }
}

const diminuir = (image) => {
    if (image.style.width === "53px") {
        image.style.width = "106px";
    }
    else {
        image.style.width = "53px";
    }
}
 