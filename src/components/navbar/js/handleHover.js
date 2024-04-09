
const hoverFunctions = {
    displayMenuExtended: (e)=>{
        const extendeds = document.querySelector(".extended");
        
        extendeds.style.display = "none";
        const target = e.target.classList[0];
        console.log(e.target);
        e.target.style.border = "#afafa solid 2px";
        console.log(e.target.style.border)
        document.getElementById(target).style.display = "flex";
    }   
}


export default hoverFunctions;