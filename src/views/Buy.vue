<template>
    <div>
        <div class="head">
            <div class="boton">
                <div>
                    <a href="#">+Compra</a>
                </div>
                <div>
                    <a href="#">Listas</a>
                </div>
            </div>
            <h1> Compras </h1>

        </div>
        
        <BuyForm/>
    </div>
</template>


<script>

import BuyForm from '@/components/BuyForm.vue'

export default {
    name:'Buy',
    components: {
        BuyForm
    }
}
</script>

<style>

.boton div{
    display: inline-block;
    float: left;
}
.boton a{
    display: block;
    padding: 20px 10px 0px 20px;
}



</style>