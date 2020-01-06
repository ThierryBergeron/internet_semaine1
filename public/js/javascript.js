const toggleCss = () => {
    let stylesheet = document.styleSheets;
    let button = document.querySelector("#cssButton")
    if(stylesheet[0].disabled === true){
        stylesheet[0].disabled = false;
        button.innerHTML="Désactiver css"
    } 
    else {
        stylesheet[0].disabled = true;
        button.innerHTML="Activer css"
    }
}