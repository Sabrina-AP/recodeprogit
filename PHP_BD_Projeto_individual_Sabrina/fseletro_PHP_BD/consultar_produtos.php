<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Consultar e exibir</title>
    </head>

    <body>
    
        <h1> Consulte os produtos </h1>
        <form method='post' name='consulta'>
            Nome do produto: <br> 
            <select name="nome_produto">
                <option value="Escolha um produto">Escolha um produto</option>
                <option value="Consultar Todos">Consultar Todos</option>
                <option value="1">Geladeira Side</option>
                <option value="2">Geladeira Branca</option>
                <option value="3">Geladeira Prata</option>
                <option value="4">Fogão Consul</option>
                <option value="5">Fogão Atlas</option>
                <option value="6">Micro-ondas Consul</option>
                <option value="7">Micro-ondas Philco</option>
                <option value="8">Micro-ondas Eletrolux</option>
                <option value="9">Lava-louça Eletrolux</option>
                <option value="10">Lava-louça Brastemp</option>
                <option value="11">Máquina Brastemp</option>
                <option value="12">Máquina Philco</option>
            </select>
            <br><br><br>
            <input type="submit" name="submit" value="Consultar"><br><br>
        </form>    
        <?php 
        //criando a conexão
            $servername = "localhost"; 
            $username = "root"; 
            $password = ""; 
            $database = "fseletro"; 
            $conn = mysqli_connect ($servername, $username, $password, $database); 

            if(!$conn){ 
                die("A conexão ao BD falhou: " .mysqli_connect_error()); 
            } 
            
            if(isset($_POST['nome_produto']) && (($_POST['nome_produto'])!=="Escolha um produto")){
                $nome_produto=$_POST['nome_produto'];
                if(($_POST['nome_produto'])==="Consultar Todos"){
                    $sql = "select nome_produto, descricao, preco, preco_venda, imagem from produto"; 
                }
                else{
                    $sql = "select nome_produto, descricao, preco, preco_venda, imagem from produto where idproduto=$nome_produto";
                }
                
                $result = mysqli_query($conn, $sql);  

                while ($row = mysqli_fetch_assoc($result)){
                    echo "Nome do produto: " . $row["nome_produto"] . 
                    "<br> Descrição: " . $row["descricao"] .
                    "<br> Preço anterior: " . $row["preco"] .
                    "<br> Preço venda: " . $row["preco_venda"] .
                    "<br> Imagem: " . $row["imagem"] . 
                    ".<hr>"; 
                } 
            }
            else{
                echo "Escolha um produto";
            }
        ?> 
            <br> <br> <a href="formulario_pedidos.php"> Ir para cadastro de pedido </a>     
            
            
    </body>
</html>
