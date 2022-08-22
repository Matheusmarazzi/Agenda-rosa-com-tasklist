var cds = localStorage.getItem("cd_dia");
var arrayTask = [];
if(localStorage.getItem("tasks") != null){
    arrayTask = JSON.parse(localStorage.getItem("tasks"));
}
$(document).on("click","#butao", function(){
    var tarefas = $('#tarefo').val();
    var tasklist ={cd: cds, tarefa: tarefas, status:'notCompleted'};
    arrayTask.push(tasklist);
    var taskJson = JSON.stringify(arrayTask);
    localStorage.setItem("tasks", taskJson);
    $('#tarefo').val('');
    atualizar();
    console.log(arrayTask);
    
    

});
function deletar(cd){
    arrayTask.splice(cd,1);
    var taskJson = JSON.stringify(arrayTask);
    localStorage.setItem("tasks", taskJson);
    atualizar();

}
$(document).on("click",".itens",function click(cd){
  let cod =cd.currentTarget.id;
    if(arrayTask[cod].status == 'completed'){
      arrayTask[cod].status = 'notCompleted';
      var taskJson = JSON.stringify(arrayTask);
      localStorage.setItem("tasks", taskJson);
      atualizar();
    }else{
      arrayTask[cod].status = 'completed';
      var taskJson = JSON.stringify(arrayTask);
      localStorage.setItem("tasks", taskJson);
      atualizar();
    }
    
        
    
    
        
});

function atualizar(){
    $('#tarefas').html('');
    for(i=0; i<arrayTask.length; i++){
        if(cds == arrayTask[i].cd){
            $('#tarefas').append('<p id="'+i+'" class="itens '+arrayTask[i].status+'">'+arrayTask[i].tarefa+'<span class="iconify delete" data-icon="bi:trash3" style="color: red;" data-width="30" data-height="30" onclick="deletar('+i+')"></span></p>');
        }
    }

}
$(document).ready( atualizar());

