import React from 'react';
import { View, Text, ScrollView} from 'react-native';

import styles from './styles';

const produtos = [
  {
    idproduto: 1,
    categorias: "Geladeiras",
    nome_produto: "Geladeira Side",
    descricao: "Geladeira Frost Free Brastemp Side Inverse 540 litros",
    preco_anterior: 6389,
    preco_atual: 5019,
    imagem: "geladeira_side.jpg"
  },
  {
    idproduto: 2,
    categorias: "Geladeiras",
    nome_produto: "Geladeira Branca",
    descricao: "Geladeira Frost Free Brastemp Branca 375 litros",
    preco_anterior: 2068.6,
    preco_atual: 1910.9,
    imagem: "geladeira_branca.jpg"
  },
  {
    idproduto: 3,
    categorias: "Geladeiras",
    nome_produto: "Geladeira Prata",
    descricao: "Geladeira Frost Free Consul Prata 340 litros",
    preco_anterior: 2199.9,
    preco_atual: 2069,
    imagem: "geladeira_prata.jpg"
  },
  {
    idproduto: 4,
    categorias: "Fogões",
    nome_produto: "Fogão Consul",
    descricao: "Fogão 4 Bocas Consul Inox com Mesa de Vidro",
    preco_anterior: 1209.9,
    preco_atual: 1129,
    imagem: "fogao_consul.jpg"
  },
  {
    idproduto: 5,
    categorias: "Fogões",
    nome_produto: "Fogão Atlas",
    descricao: "Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático",
    preco_anterior: 609.9,
    preco_atual: 519.7,
    imagem: "fogao_atlas.jpg"
  },
  {
    idproduto: 6,
    categorias: "Micro-ondas",
    nome_produto: "Micro-ondas Consul",
    descricao: "Micro-ondas Consul 32 Litros Inox 220V",
    preco_anterior: 580.9,
    preco_atual: 409.88,
    imagem: "microondas_consul.jpg"
  },
  {
    idproduto: 7,
    categorias: "Micro-ondas",
    nome_produto: "Micro-ondas Philco",
    descricao: "Microondas 25L Espelhado Philco 220V",
    preco_anterior: 508.7,
    preco_atual: 464.53,
    imagem: "microondas_philco.jpg"
  },
  {
    idproduto: 8,
    categorias: "Micro-ondas",
    nome_produto: "Micro-ondas Eletrolux",
    descricao: "Forno de Microondas Eletrolux 20L Branco",
    preco_anterior: 459.9,
    preco_atual: 436.05,
    imagem: "microondas_eletrolux.jpg"
  },
  {
    idproduto: 9,
    categorias: "Lava-louças",
    nome_produto: "Lava-louça Eletrolux",
    descricao: "Lava-Louça Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch",
    preco_anterior: 3599,
    preco_atual: 2799.9,
    imagem: "lavalouca_eletrolux.jpg"
  },
  {
    idproduto: 10,
    categorias: "Lava-louças",
    nome_produto: "Lava-louça Brastemp",
    descricao: "Lava Louça Compacta 8 Serviços Branca 127V Brastemp",
    preco_anterior: 1970.5,
    preco_atual: 1730.61,
    imagem: "lavalouca_brastemp.jpg"
  },
  {
    idproduto: 11,
    categorias: "Lavadoras",
    nome_produto: "Máquina Brastemp",
    descricao: "Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca",
    preco_anterior: 1699,
    preco_atual: 1214.1,
    imagem: "maquina_brastemp.jpg"
  },
  {
    idproduto: 12,
    categorias: "Lavadoras",
    nome_produto: "Máquina Philco",
    descricao: "Lavadora de Roupas Philco Inverter 12KG",
    preco_anterior: 2399.9,
    preco_atual: 2179.9,
    imagem: "maquina_philco.jpg"
  }
]  
export default function Produtos() {
    return(
     
        <View style={styles.fundo}>
            <title >Nossos Produtos</title>

            <Text style={styles.title}><h1 >Nossos Produtos</h1></Text>

        <View style={styles.title}>
          <title>Nossos Produtos</title>

            <View>
                {produtos.map((item) =>{
                    
                    return(
                      <ScrollView>
                          <View  style={styles.prod} key={item.idproduto} id={item.categorias}>
                              
                              <Text style={styles.nome}>
                                  <b>{item.nome_produto}</b> 
                              </Text>
                              <Text style={styles.descricao}>
                                  <b>Descrição:</b> {item.descricao}
                              </Text>
                              
                              
                              <Text style={styles.preco_anterior}>
                                <b>Preço: R${item.preco_atual}</b>
                              </Text>
                              
                          </View>
                          <hr />
                      </ScrollView>
                      
                    )    
                            
                })}
                
            </View>
           
        </View>
        
      </View>
    )
}
  