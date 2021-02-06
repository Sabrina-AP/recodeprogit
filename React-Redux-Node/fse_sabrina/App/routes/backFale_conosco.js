module.exports = function (app){

    
    //app.get('/bfale_conosco', function(req,res){
       //res.render('/fale_conosco');
    //});
    
    
    app.post('/fale_conosco/envio', function(req,res){ //mesmo nome do action do formulario
        
        var conteudo = req.body;
     
        //var conteudo = req.body.nome;
       // var conteudo = req.body.mensagem;


        
        var connection = app.app.config.database;
      
        var mensagemModel = app.app.models.mensagemModel;

        mensagemModel.salvarConteudo(conteudo,  connection, function(error,results){
            console.log(error, results)
        });
        
        
        mensagemModel.getConteudo(connection, 
            function(error, results, fields){
                
                res.json(results);

                //resultsjson = JSON.parse(JSON.stringify(results))
                console.log(error,results)
               
                //res.render('pages/fale_conosco', {dados:resultsjson});
               
            }
        );
    });
    
}