

const functions = {
    activeLayer: (e, id)=>{

        const layer = document.getElementById(id)
        const navbar = document.getElementById("navbarMobile")
        const images = [document.getElementById("imgMainLogo"),document.getElementById("imgLayerLogo")]

        functions.executeLayerAnimation(layer,navbar,images,1);
    },

    executeLayerAnimation:(element,navbar,images,animationTime)=>{
        if(!element.classList.contains("layerActive")){
            //meteer animacion para parecer el display
            element.style.animation = `displayLayer ${animationTime}s ease`;
            element.classList.toggle("layerActive")
            navbar.classList.toggle("navbarLayer");
            images[0].style.display = "none";
            images[1].style.display = "block";

        }else{
            //meter animacion de salida del layer
            element.style.animation = `hideLayer ${animationTime}s ease`;
            setTimeout(()=>{

                //cambiar clases de navbar y layer
                element.classList.toggle("layerActive");
                navbar.classList.toggle("navbarLayer");
                images[0].style.display = "block";
                images[1].style.display = "none";

            },600);
        }

    }
}
export default functions;