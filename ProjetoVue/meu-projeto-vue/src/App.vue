<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo de Filmes</h1>
      <br>
      <button onclick="trocarTela()">Catálago Livros</button>
    </header>
    <main>
      <div id="Filme">
        <CatalogoDeFilmes />
      </div>
      <div id="Livro" style="display: none;">
        <CatalogoDeLivros />
      </div>
    </main>
    <footer>
      <h1>Meu Footer do Catálogo de Filmes</h1>
    </footer>
  </div>
</template>
  
<script>

import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivros from "@/components/CatalogoDeLivros.vue";

export default {

  methods: {
    trocarTela() {
      var telaLivro = document.getElementById("Livro");
      var telaFilme = document.getElementById("Filme");
      if (telaLivro.style.display === "none") {
        telaFilme.style.display = "none";
        //this.filmes.push({ titulo: this.novoFilme, assistido: false });
        //this.novoFilme = "";
        telaLivro.style.display = "block";
      }
    },
  },
  components: {
    CatalogoDeFilmes,
    CatalogoDeLivros,
  },


};
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {

  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}

footer {

  background-color: #35495e;
  color: #fff;
  padding: 10px 0;

  position: absolute;
  bottom: 0;
  width: 99%;
  /* height: 2.5rem; */
}</style>