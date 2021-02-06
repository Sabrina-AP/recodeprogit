module.exports = function(){

    this.getConteudo = function (connection, callback){
        connection.query("SELECT * FROM comentario",callback);
    }

    
    this.salvarConteudo = function (conteudo, connection, callback){
        connection.query("INSERT INTO comentario set ?", conteudo);
        
    }
    
    return this;
}