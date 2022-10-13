var sexe, ethnie;


function showmenu(){
    var navlinks = document.getElementById("navlinks");
    navlinks.style.right = "0";
    console.log("çamarche")
}

function hidemenu(){
    var navlinks = document.getElementById("navlinks");
    navlinks.style.right = "-200px";
}





fetch("header.html")
    .then(response => response.text())
    .then(response => {
        document.getElementById("header").innerHTML = response;
    })

fetch("footer.html")
    .then(response2 => response2.text())
    .then(response2 => {
        document.getElementById("footer").innerHTML = response2;
    })



let produit_id = new URLSearchParams(window.location.search).get("id")
if (produit_id == 1){
    document.getElementById("image").src = "gants.jpeg";
        document.getElementById("nomarticle").innerHTML = 'GANTS DE BOXE';
}else if (produit_id == 2){
    document.getElementById("image").src = "suuuu.jpg";
    document.getElementById("nomarticle").innerHTML = 'SAC DE FRAPPE';


}else if (produit_id == 3){
    document.getElementById("image").src = "pb.jpg";
    document.getElementById("nomarticle").innerHTML = 'PUNCHING BALL';


}










class Produits{
    constructor(type, taille, couleur) {
    this._typeproduit = type
    this._taille = taille
    this._couleur = couleur
    
    }

    }

function changesexe(jojo){
    sexe = jojo
        if (sexe == "rien"){
            document.getElementById("image").src = "gants.jpeg";
        }
        if (sexe == "homme" && ethnie == "arabe"){
            document.getElementById("image").src = "photos/yamenmalepb.png";
            console.log("tu as appuyé sur homme et arabe etais selectionné")
        }
        if (sexe == "femme" && ethnie == "mexicain"){
            document.getElementById("image").src = "photos/melfemalepb.png";
            console.log("tu as appuyé sur femme et mexicain etais selectionné")
        }
        if (sexe == "homme" && ethnie == "russe"){
            document.getElementById("image").src = "photos/ruskimalepb.png";
            console.log(sexe, ethnie)
        }
        if (sexe == "homme" && ethnie == "ptitarabe"){
            document.getElementById("image").src = "photos/anasmalepb.png";
        }
        if (sexe == "homme" && ethnie == "pakistanais"){
            document.getElementById("image").src = "photos/yamenmale.png";
        }
        if (sexe == "homme" && ethnie == "libanais"){
            document.getElementById("image").src = "photos/yamenmale.png";
        }
        if (sexe == "homme" && ethnie == "singe"){
            document.getElementById("image").src = "photos/paomalepb.png";
        }      
}



function changeimage(yeboy){
    ethnie = yeboy
    if (ethnie == "rien"){
        document.getElementById("image").src = "gants.jpeg";
    }
    if (sexe == "homme" && ethnie == "arabe"){
        document.getElementById("image").src = "photos/yamenmalepb.png";
        console.log("tu as appuyé sur homme et arabe etais selectionné")
    }
    if (sexe == "femme" && ethnie == "mexicain"){
        document.getElementById("image").src = "photos/melfemalepb.png";
        console.log("tu as appuyé sur femme et mexicain etais selectionné")
    }
    if (sexe == "homme" && ethnie == "russe"){
        document.getElementById("image").src = "photos/ruskimalepb.png";
        console.log(sexe, ethnie)
    }
    if (sexe == "homme" && ethnie == "ptitarabe"){
        document.getElementById("image").src = "photos/anasmalepb.png";
    }
    if (sexe == "homme" && ethnie == "pakistanais"){
        document.getElementById("image").src = "photos/yamenmale.png";
    }
    if (sexe == "homme" && ethnie == "libanais"){
        document.getElementById("image").src = "photos/yamenmale.png";
    }
    if (sexe == "homme" && ethnie == "singe"){
        document.getElementById("image").src = "photos/paomalepb.png";
    }      
}
