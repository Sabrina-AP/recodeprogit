import { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Pedidos() {

    const [pedidosc, setPedidosc] = useState([]);
    const [render, setRender] = useState(false);
    const [elementos, setElementos] = useState(false);
    
    useEffect(() => {
        async function fetchData(){
            const url = "http://localhost/projetobd/banco_dados/ClassPedidos1.php";
            const response = await fetch(url);
            setPedidosc(await response.json());
        }fetchData();    
    }, [render]);

    async function controleEnvio(event) {
        event.preventDefault();
        

        let formData = new FormData(event.target);
        
        const url = "http://localhost/projetobd/banco_dados/ClassPedidos.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setElementos(dados);
            setTimeout(() => {
                setElementos(false)
              }, 3000);
            
        });
    }
    

    return (
        
        <div >
            <title>Faça seu pedido</title>
            <h1>Cadastrar pedidos</h1>
            <hr />
         
            <div className="col-lg-8 mx-auto">
                <Form onSubmit={controleEnvio}>
                    
                    <Form.Group>
                        <Form.Label>Nome do cliente</Form.Label>
                        <Form.Control type="text" name="cliente" id="cliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control type="text" name="endereço" id="endereço" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" name="telefone" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome do produto:</Form.Label><br/>
                        <select className="col-lg" name="nome_produto" id="nome_produto">
                            <option value="">Escolha uma opção</option>
                            <option value="Geladeira 1">Geladeira Side</option>
                            <option value="Geladeira 2">Geladeira Branca</option>
                            <option value="Geladeira 3">Geladeira Prata</option>
                            <option value="Fogão 1">Fogão Consul</option>
                            <option value="Fogão 2">Fogão Atlas</option>
                            <option value="Micro-ondas 1">Micro-ondas Consul</option>
                            <option value="Micro-ondas 2">Micro-ondas Philco</option>
                            <option value="Micro-ondas 3">Micro-ondas Eletrolux</option>
                            <option value="Lava-louça 1">Lava-louça Eletrolux</option>
                            <option value="Lava-louça 2">Lava-louça Brastemp</option>
                            <option value="Lavadora de roupas 1">Lavadora de roupas Brastemp</option>
                            <option value="Lavadora de roupas 2">Lavadora de roupas Philco</option>

                        </select><br/><br/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor unitário:</Form.Label>
                        <Form.Control type="text" name="valor_unitario" id="valor_unitario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="number" name="quantidade" id="quantidade" />
                    </Form.Group>
            

                    <Button className="col-lg" variant="primary" name='concluir' type="submit">
                        Finalizar compra
                    </Button><br/><br/>
                    
                </Form>

                { 
                elementos && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                Agradecemos por comprar em nossas lojas!
                </div>
                }


                <div className="col-lg-8 mx-auto">
                    <div>
                        <div>
                            {pedidosc.map((item) =>{
                                    return(
                        
                                        <div className="col-lg-12" key={item.idcliente}>
                                            <div>
                                                <hr/>
                                                <hr/>
                                                Sr(a) {item.cliente}, o valor total da sua compra foi de: R$ {item.valor_total}
                                                <hr/>
                                                <hr/>
                                            </div><br/><br/>
                                        </div>
                                    )            
                            })}
                        </div><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}