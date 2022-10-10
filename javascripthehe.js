var sexe, ethnie;
let produit_id = new URLSearchParams(window.location.search).get("id")
if (produit_id == 1){
    document.getElementById("image").src = "gants.jpeg";
}else if (produit_id == 2){
    document.getElementById("image").src = "suuuu.jpg";
}else if (produit_id == 3){
    document.getElementById("image").src = "pb.jpg";
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
