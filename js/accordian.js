const acc = document.getElementsByClassName("accord-btn");



function setAllPanelOff(x){
    
    for(let j=0;j<acc.length;j++){
        let  panel = acc[j].nextElementSibling;
        panel.style.display = "none";
    }
}
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    setAllPanelOff(acc[i])
    let panel = this.nextElementSibling;
   
    panel.style.display="block"
  });
}