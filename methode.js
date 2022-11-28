let coco = document.getElementsByTagName('td');
let para = document.querySelector('p');
let commence = document.getElementById('recommence');
let p = 0;

for(let i = 0; i < coco.length; i++) {
    coco[i].addEventListener("click", function () {
        if(p > 87) {
            para.innerText = "partie perdu";
            para.style.color = "red";
        } else if(p > 84) {
            para.innerText = "partie gagné";
            para.style.color = "green";
        } else if(coco[i].className === 'mine') {
            let photo = document.createElement('img');
            photo.src = "https://media.senscritique.com/media/000000110556/source_big/Demineur.png";
            photo.alt = "photo d'une mine";
            photo.style.height = 30 + "px";
            photo.style.width = 30 + "px";
            photo.style.marginTop = 5 + "px";
            coco[i].append(photo);
            coco[i].style.backgroundColor = "ghostwhite";
            coco[i].style.boxShadow = "none";
            para.innerText = "partie perdu";
            para.style.color = "red";
            p = p + 90;
        } else {
            if(coco[i].className === 'un') {
                coco[i].innerText = "1";
                coco[i].style.color = "blue";
                coco[i].style.backgroundColor = "ghostwhite";
                coco[i].style.boxShadow = "none";
                p = p + 1;
            } else if(coco[i].className === 'deux') {
                coco[i].innerText = "2";
                coco[i].style.color = "green";
                coco[i].style.backgroundColor = "ghostwhite";
                coco[i].style.boxShadow = "none";
                p = p + 1;
            } else if(coco[i].className === 'trois') {
                coco[i].innerText = "3";
                coco[i].style.color = "red";
                coco[i].style.backgroundColor = "ghostwhite";
                coco[i].style.boxShadow = "none";
                p = p + 1;
            } else {
                coco[i].style.backgroundColor = "ghostwhite";
                coco[i].style.boxShadow = "none";
                p = p + 1;
            }
        }
    })
}

commence.addEventListener("click", function () {
    p = 0;
    para.innerText = "Démineur";
    para.style.color = "blue";
    for(let i = 0; i < coco.length; i++) {
        coco[i].innerText = "";
        coco[i].style.backgroundColor = "lightgrey";
        coco[i].style.boxShadow = "5px 5px gray inset, -5px -5px whitesmoke inset";
    }
})