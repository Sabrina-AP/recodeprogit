<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $database = "fseletro"; 
    $conn = mysqli_connect ($servername, $username, $password, $database); 

    if(!$conn){ 
        die("A conexão ao BD falhou: " .mysqli_connect_error()); 
    } 
?>

<!Doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Produtos</title>
        <link rel="stylesheet" href="./css/estilo.css">
        <script src="js/funcoes.js"></script>
    </head>

    <body>
        <?php include_once('menu.html')?>
        
        <main>
            <header>
                <h1>Produtos</h1>
            </header>
            <hr>
            
            <section class="categorias">
                <h3>Categorias</h3>
                    <ul>
                        <li onclick="exibir_tudo()"><a href="#">Todos (12)</a></li>
                        <li onclick="exibir_categoria('Geladeira')"><a href="#">Geladeiras (3)</a></li>
                        <li onclick="exibir_categoria('Fogão')"><a href="#">Fogões (2)</a></li>
                        <li onclick="exibir_categoria('Micro-ondas')"><a href="#">Micro-ondas (3)</a></li>
                        <li onclick="exibir_categoria('Máquina')"><a href="#">Lavadora de roupas (2)</a></li>
                        <li onclick="exibir_categoria('Lava-louça')"><a href="#">Lava-louças (2)</a></li>
                    </ul>
            </section>
            
               
            <section class="produtos">
                <?php
                    $sql = "select * from produto"; 
                    $result = $conn->query($sql);  

                    if ($result->num_rows>0){
                        while($rows=$result->fetch_assoc()){
                        
                ?>        


                    <div class="celula" id=<?php echo $rows["categoria"];?>>
                        <a href="#"><img src=<?php echo $rows["imagem"];?> width="53px" alt=<?php echo $rows["nome_produto"];?> onclick="ampliar(this)"></a>
                        <br>
                        <p class="sobre_o_produto"><?php echo $rows["descricao"];?></p>
                        <hr>
                        <p class="preco_anterior">R$<?php echo $rows["preco"];?></p>
                        <p class="preco_atual">R$ <?php echo $rows["preco_venda"];?></p>
                    </div>
                    
                
                <?php    
                        }       
                    } 
                    else{
                        echo "Nenhum produto cadastrado";
                    }   
                ?>
            </section>
        </main>

        <br><br><br><br>

        <footer class="rodape">
            <p id="cor_red">
                Formas de Pagamento:
            </p>
            <img width="30%" src="./imagens/pagamento.jpg" alt="Pagamento">
            <p id="recode">&copy; Recode Pro</p>
        </footer>
    </body>
</html>