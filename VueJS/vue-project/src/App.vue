<script setup>
import { reactive } from "vue";

  const nome = ''
  const obj = {
    nome: 'Igor',
    filme: 'DeadPool'
  }
  function dizOi(nome){
    return `${nome} diz Oi`;
  }

  const imagens = {
  imagemCoringa: 'https://rollingstone.com.br/media/_versions/coringa-instagram-fotos-novas-1-grande_widelg.jpg',
  imagemDDPool: 'https://t2.tudocdn.net/213478?w=646&h=284'
  }


  const btndisabled = true;

  const gostaDoBatman = false;
  const gostaDoDeadpool = true;
  const estaAutorizado = true;

  // let contador = 0;
  const estado = reactive({
    contador: 0
  });

  function incrementar(){
    estado.contador++;
  }
  function decrementar(){
    estado.contador--;
  }
  function alteraEmail(e){
    estado.email = e.target.value;
  }
</script>

<template>
  <h1>{{ dizOi('Calvo') }}</h1>
  <img v-if="gostaDoBatman" :src="imagens.imagemCoringa" alt="">
  <img v-else-if="!gostaDoDeadpool" :src="imagens.imagemDDPool" alt="">
  <h2 v-else>Não curte heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="btndisabled">Enviar mensagem</button>

  <br>
  <hr>

{{ estado.contador }}

<button @click="incrementar" type="button">+</button>
<button @click="decrementar" type="button">-</button>

<br>
<hr>

{{ estado.email}}<br>

<input type="email" @keyup="alteraEmail">

</template>

<style scoped>
  img{
    max-width: 200px;
  }
</style>
