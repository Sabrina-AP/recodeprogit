module.exports = function (app){

    app.get('/produtos', function(req,res){
        var connection = app.app.config.database;

        var query = app.app.models.produtoModel;
        query.getConteudo(connection, 
            function(error, results, fields){
                console.log(error,results)
                res.render('pages/produtos', {dados:results});
        });
    });

}