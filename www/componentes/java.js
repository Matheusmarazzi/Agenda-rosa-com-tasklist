    //------------------------------------------------------- declaração de variaveis
    if(localStorage.getItem('tasks') != 'null'){
    var tasklist = JSON.parse(localStorage.getItem('tasks'));
    }
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const janeiro = 31;
    const fevereiro = 28;
    const marco = 31;
    const abril = 30;
    const maio = 31;
    const junho = 30;
    const julho = 31;
    const agosto = 31;
    const setembro = 30;
    const outubro = 31;
    const novembro = 30;
    const dezembro = 31;
    const semana = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
    diaSemana = 6;
    // ----------------------------------------------iniciar no mes atual--------------------------------------
    switch (currentMonth) {
  case 1:
    window.location.href= "#janeiro";
    break;
  case 2:
    window.location.href= "#fevereiro";
    break;
  case 3:
     window.location.href= "#marco";
    break;
  case 4:
    window.location.href= "#abril";
    break;
  case 5:
    window.location.href= "#maio";
    break;
  case 6:
    window.location.href= "#junho";
    break;
  case 7:
    window.location.href= "#julho";
    break;
     case 8:
    window.location.href= "#agosto";
    break;
     case 9:
    window.location.href= "#setembro";
    break;
     case 10:
    window.location.href= "#outubro";;
    break;
     case 11:
    window.location.href= "#novembro";
    break;
     case 12:
    window.location.href= "#dezembro";
    break;

}
    // window.location.href= "#agosto";
    // ---------------------------------------------------------listagem
        for(i=1; i<=janeiro; i++){
            


            $("#janeiro").append('<h1 id="'+i+'janeiro">'+i+'  '+semana[diaSemana]+'</h1>');        
            diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=fevereiro; i++){
                $("#fevereiro").append('<h1 id="'+i+'fevereiro">'+i+'  '+semana[diaSemana]+'</h1><div id="'+i+'fevereiros class="col-8"></div>');
                
                
                diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=marco; i++){
                $("#marco").append('<h1 id="'+i+'marco">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=abril; i++){
                $("#abril").append('<h1 id="'+i+'abril">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=maio; i++){
                $("#maio").append('<h1 id="'+i+'maio">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=junho; i++){
                $("#junho").append('<h1 id="'+i+'junho">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=julho; i++){
                $("#julho").append('<h1 id="'+i+'julho">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=agosto; i++){
            $("#agosto").append('<h1 id="'+i+'agosto">'+i+'  '+semana[diaSemana]+'</h1>');




                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=setembro; i++){
                $("#setembro").append('<h1 id="'+i+'setembro">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=outubro; i++){
                $("#outubro").append('<h1 id="'+i+'outubro">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=novembro; i++){
                $("#novembro").append('<h1 id="'+i+'novemnbro">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }
        for(i=1;i<=dezembro; i++){
                $("#dezembro").append('<h1 id="'+i+'dezembro">'+i+'  '+semana[diaSemana]+'</h1>');
                    diaSemana++;
            if (diaSemana > 6){
                diaSemana = 0;
            }
        }