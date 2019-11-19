<template>
  <div class="buy">
    <div>
      <label for="modelo">Modelo: {{celular}} </label>
      <input type="text" v:model="modelox" >
    </div>
    <p> {{ celular }} </p>

    <button >Add</button>
    


  </div>
  
</template>

<script>

import {mapState} from 'vuex';

  export default {
    name: "BuyForm",
    computed: {
      ...mapState(['celular'])
    }
        
  }

</script>

<style>
h5{
    text-align: left;
}
  .form {
    border: solid 1px red;
    display: block;
    float: left;
  }

  .form div {
    padding: 15px;
  }

  .buy {
    display: inline-block;
    float: left;
    margin: 30px;
  }

  .lista{
    float: right;
  }
</style>
