

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
var img = new Image();
var sticker= new Image();
let produit_id = new URLSearchParams(window.location.search).get("id")










window.onload = function () {
    // GET THE IMAGE.

    let produit_id = new URLSearchParams(window.location.search).get("id")
    if (produit_id == 1){
        img.src = gantes._img;
        document.getElementById("nomarticle").innerHTML = gantes._typeproduit;
        document.getElementById("prixarticle").innerHTML= gantes._prixtxt;
    
    }else if (produit_id == 2){
        img.src = sacfrappe._img;
        document.getElementById("nomarticle").innerHTML = sacfrappe._typeproduit;
        document.getElementById("prixarticle").innerHTML = sacfrappe._prixtxt;
    
    
    }else if (produit_id == 3){
        img.src = punching._img;
        document.getElementById("nomarticle").innerHTML = punching._typeproduit;
        document.getElementById("prixarticle").innerHTML = punching._prixtxt;
    
    
    }


    // WAIT TILL IMAGE IS LOADED.
    img.onload = function () {
        fill_canvas(img);       // FILL THE CANVAS WITH THE IMAGE.
    }

    function fill_canvas(img) {
        // CREATE CANVAS CONTEXT.
        let canvas = document.getElementById('c');
        let ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
    }

}











function render() {
    var hue = +rHue.value; 
    
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(img, 0, 0, c.width, c.height);
  
   

    // adjust hue
    ctx.globalCompositeOperation = "hue";
    ctx.fillStyle = "hsl(" + hue + ",1%, 50%)";
    ctx.fillRect(0, 0, c.width, c.height);


    // clip
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(img, 0, 0, c.width, c.height);
  
    // reset comp. mode to default
    ctx.globalCompositeOperation = "source-over";
  }
  
  rHue.oninput = render;
  console.log(rHue.value)
  if (produit_id == 1){
    gantes._couleur = rHue.value
}else if (produit_id == 2){
    sacfrappe._couleur = rHue.value

}else if (produit_id == 3){
    punching._couleur = rHue.value
}
console.log(gantes._couleur, sacfrappe._couleur, punching._couleur)
















const uploader = document.querySelector('#uploader')
uploader.addEventListener('change',(e)=>{
    console.log('upload')
    var myFile = uploader.files[0];
    sticker.src = URL.createObjectURL(myFile)
    ctx.drawImage(sticker,10,10)

})




















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

