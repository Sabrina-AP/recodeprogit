<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Formulário para cadastro de pedido</title>
    </head>

    <body style="text-align:center"> 

        <h2> Cadastro de pedido</h2>

        <form method='post' name='pedidos'> 
            Nome do cliente: <br> 
            <input type="text" name="cliente"><br> 
            Endereço: <br> 
            <input type="text" name="endereço"><br> 
            Telefone: <br> 
            <input type="number" name="telefone"><br> 
            Nome do produto: <br> 
            <select name="nome_produto">
                <option value="">Escolha um produto</option>
                <option value="Geladeira Side">Geladeira Side</option>
                <option value="Geladeira Branca">Geladeira Branca</option>
                <option value="Geladeira Prata">Geladeira Prata</option>
                <option value="Fogão Consul">Fogão Consul</option>
                <option value="Fogão Atlas">Fogão Atlas</option>
                <option value="Micro-ondas Consul">Micro-ondas Consul</option>
                <option value="Micro-ondas Philco">Micro-ondas Philco</option>
                <option value="Micro-ondas Eletrolux">Micro-ondas Eletrolux</option>
                <option value="Lava-louça Eletrolux">Lava-louça Eletrolux</option>
                <option value="Lava-louça Brastemp">Lava-louça Brastemp</option>
                <option value="Máquina Brastemp">Máquina Brastemp</option>
                <option value="Máquina Philco">Máquina Philco</option>
            </select><br>    
            Valor unitário:<br> 
            <input type="float" name="valor_unitario"><br>  
            Quantidade:<br> 
            <input type="number" name="quantidade"><br><br>
            
            <input type="submit" name="submit" value="Cadastrar pedido"><br><br>
            <input type="reset" name="submit" value="Deletar dados"><br><br>
        </form> 
        
    
        <?php 
           $servername = "localhost"; 
           $username = "root"; 
           $password = ""; 
           $database = "fseletro"; 
           $conn = mysqli_connect($servername, $username, $password, $database); 

           if(isset($_POST['cliente']) && isset($_POST['endereço']) && ($_POST['telefone']!=="") && isset($_POST['nome_produto'])  && (($_POST['nome_produto'])!=="") && ($_POST['valor_unitario']!=="") && ($_POST['quantidade']!=="")){
               
                $cliente =$_POST['cliente']; 
                $endereço=$_POST['endereço']; 
                $telefone =$_POST['telefone']; 
                $nome_produto =$_POST['nome_produto'];
                $valor_unitario =$_POST['valor_unitario'];  
                $quantidade =$_POST['quantidade'];  
               
                $sql = "insert into pedidos (cliente, endereço, telefone, nome_produto, valor_unitario, quantidade, valor_total) values ('$cliente', '$endereço', '$telefone', '$nome_produto', '$valor_unitario', '$quantidade', $valor_unitario*$quantidade)"; 
                $result = mysqli_query($conn, $sql);

                if($result){ 
                    echo "Dados inseridos com Sucesso!"; 
                }
                else{ 
                    echo "Dados Não Inseridos!";
                } 
            }
            else{
                echo "Todos os campos precisam ser preenchidos, obrigada!";
            }  
        ?>    
            <br> <br> <a href="consultar_produtos.php"> Ir para consulta de produtos </a>

    </body>
</html>