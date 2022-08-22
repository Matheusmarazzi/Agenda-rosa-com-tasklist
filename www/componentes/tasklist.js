// This is a JavaScript file
var cd;
$(document).on("click",".col-12", function(id){
    console.log(id.target.id);
     cd = id.target.id
localStorage.setItem('cd_dia', cd);
window.location.href = 'task.html';
});
$(document).on("click","#voltar", function(){
window.location.href = 'index.html';
});


