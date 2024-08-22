function showButton(){
    const button = document.getElementById("surprise-btn");
    setTimeout(()=>{
        button.style.display= "inline-block";
 },3000);
}
window.onload= showButton;








