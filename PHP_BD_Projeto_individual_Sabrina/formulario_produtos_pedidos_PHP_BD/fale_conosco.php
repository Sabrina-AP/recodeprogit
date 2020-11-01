<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $database = "fseletro"; 
    $conn = mysqli_connect ($servername, $username, $password, $database); 

    if(!$conn){ 
        die("A conexão ao BD falhou: " .mysqli_connect_error());
    } 

    if (isset($_POST['nome']) && isset($_POST['mensagem'])){
        $nome=  $_POST['nome'];
        $mensagem= $_POST['mensagem'];
        
        
        $sql= "insert into comentario (nome, mensagem) values ('$nome', '$mensagem')";
        $result = $conn->query($sql);  
    }
?>

<!Doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Contato - Full Stack Eletro</title>
        <link rel="stylesheet" href="./css/estilo.css">
    </head>

    <body>       
        <?php include_once('menu.html')?>

        <main>
            <header>
                <h1>Fale Conosco</h1>
            </header>
            <hr>


            <section class="contato">
                <div class="linha1ecol1">
                    <img width="45px" src="./imagens/email.jpg" alt="Email">contato@fullstackeletro.com
                </div>
                    
                <div class="linha1ecol2">
                    <img width="45px" src="./imagens/whatsapp.jpg" alt="Whatsapp">(11) 99999-9999
                </div>
            </section>

            
            <form method="post">
                <h4>Nome:</h4>
                <input type="text" name="nome" style="width: 500px;">
                <h4>Mensagem:</h4>
                <textarea name="mensagem" style="width: 500px;"></textarea>
                <br>
                <input type="submit" value="Enviar">
                <br><br>
            </form>



            <?php
                $sql = "select * from comentario"; 
                $result = $conn->query($sql);  

                if ($result->num_rows>0){
                    while($rows=$result->fetch_assoc()){
                        echo "Data: ", $rows['data'], "<br>";
                        echo "Nome: ", $rows['nome'], "<br>";
                        echo "Mensagem: ", $rows['mensagem'], "<br>";
                        echo "<hr>";
                    }       
                } 
                else{
                    echo "Nenhum comentário ainda!";
                }   
            ?>

        </main>

        <br><br><br>

        <footer class="rodape">
            <p id="cor_red">
                Formas de Pagamento:
            </p>
            <img width="30%" src="./imagens/pagamento.jpg" alt="Pagamento">
            <p id="recode">&copy; Recode Pro</p>
        </footer>
    </body>
</html>