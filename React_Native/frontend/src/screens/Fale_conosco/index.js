import React from 'react';
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity} from 'react-native';

import {useState, useEffect} from 'react';  
import styles from './styles';


export default function Fale_conosco(){
  
  const [mensagens, setMensagens ] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState(false);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  

  useEffect(() => {
      async function fetchData(){
        const url = "http://localhost:3333/fale_conosco";
        const response = await fetch(url);
        setMensagens(await response.json());
      }fetchData();    
  }, [render]);

  
  async function envioMensagem(event) {
      event.preventDefault();
  
      const data = {
        nome: nome, 
        mensagem: mensagem,
      }      

      const url = "http://localhost:3333/fale_conosco/envio";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify(data)

      }).then((response) => response.json()).then((dados) => {
        setMsg(dados);
      });
      setRender(!render);
      setTimeout(() => {
        setMsg(false);
        setRender(true);
      }, 3000);
      setNome('');
      setMensagem('');
  }
  
  return(
    
      <SafeAreaView style={styles.fundo}>


                
        <View >
          <View style={styles.titulo}>
              <Text style={styles.texttitle}>Fale Conosco</Text>
          </View>
          
        
          <main>
          

            <hr/>
            <View>  
            
              
                <View style={styles.box}>
                    <View>
                      <Text style={styles.contato} >Nossos contatos:</Text>
                    </View>
                  <br/>
                    <Image style={styles.img} source={require('../../../assets/email.jpg')}/>
                    <View>
                      <Text style={styles.contato} >contato@fullstackeletrosabrina.com</Text>
                    </View>
                    <br/> <br />
                    <Image style={styles.img} source={require('../../../assets/whatsapp.jpg')}/>
                    <View>
                      <Text style={styles.contato}>(11) 98888-8888</Text>
                    </View>
                </View>
        
            </View>
            <hr/>

            <br/>

            <hr/> <hr/>
            <View>
              <View onSubmit={envioMensagem}>
          
                    <View>
                      <Text style={styles.category}>Nome:</Text>
                    </View>
                    <View>
                      <TextInput style={styles.name} name="nome" id="nome" value={nome} onChange={event => setNome(event.target.value)} type="text" placeholder="digite seu nome..." />
                    </  View>
                    <br/>
                    <View>
                      <Text style={styles.category}>Mensagem:</Text>
                    </View>
                    
                    <View >  
                      <TextInput multiline={true} style={styles.coment} name="mensagem" id="mensagem" value={mensagem} onChange={event => setMensagem(event.target.value)} type="text" placeholder="digite sua mensagem..."></TextInput>
                    </View>  
                    <br/>
                    <TouchableOpacity style={styles.btn}  onPress={envioMensagem}>
                        <Text style={styles.send}>Enviar</Text>
                    </TouchableOpacity>
              
              </View>  
            </View>
            <hr/>
            { 
              msg && <View style={styles.msg} role="alert">
                Obrigada por sua mensagem!
              </View>
            }
            <hr/>
            <br/>


            <hr/>
            <View>
              <View>
                  <View style={styles.mensage}>
                      
                      {mensagens.map((item) =>{
                          return(
              
                              <View>
                                
                                  <Text style={styles.msgtext}>
                                      Data: {item.data}
                                  </Text>
                                  <Text style={styles.msgtext}>
                                      Cliente {item.nome} disse: {item.mensagem}
                                  </Text>
                                  <br />
                              </View>
                          )            
                      })}
                  </View>
                  <hr/>
              </View>
            </View>
            <hr/>
          </main>
        </View>
      
            
      </SafeAreaView>
    
  );
}

