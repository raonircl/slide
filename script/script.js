"use strict"
    const contImg = [
        { "id": "1", "url":"./img/1.jpg" },
        { "id": "2", "url":"./img/2.jpg" },
        { "id": "3", "url":"./img/3.jpg" },
        { "id": "4", "url":"./img/4.jpg" },
    ]
    //(.imagens) para chamar uma classe (#imagens) para chamar um id
    const contItems = document.querySelector("#imagens")

    const loadcontImg = (contImg, container) => {
        contImg.forEach(image => {
            container.innerHTML += `
                <div class="contItems">
                    <img src="${image.url}">
                </div>
            `
        });
    }  
    loadcontImg(contImg, contItems);
    let items = document.querySelectorAll(".contItems");

    const voltar = () => {
        contItems.appendChild(items[0]);
            items = document.querySelectorAll(".contItems");
                document.getElementById("corpo").style.background = ("green")
                //document.body.style.backgroundImage = url.image("contItems");
}
    const proximo = () => {
    const lastItem = items[items.length - 1];
        contItems.insertBefore( lastItem, items[0] );
            items = document.querySelectorAll(".contItems");
            //document.body.style.backgroundImage=imageUrl=(".contItems");
            //document.getElementById("corpo").style.background = ".contItems"
            document.getElementById("corpo").style.background = ("black")
            //document.getElementById("corpo").style.color = "black"
}
    document.querySelector('#voltar').addEventListener('click', voltar);
    document.querySelector('#proximo').addEventListener('click', proximo);