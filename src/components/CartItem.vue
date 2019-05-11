<template>
  <tr>
    <td>{{ cartData.id}}</td>
    <td>{{ cartData.name}}</td>
    <td>{{ cartData.price}}</td>
    <td><div><button class="btn btn-info" @click="addList(cartData)">+</button><input class="text-center" type="text" style="width: 50px;height: 30px;" v-model=" cartData.count"/><button class="btn btn-warning" @click="subList(cartData)">-</button></div></td>
    <td>{{total}}</td>
    <td>
      <button class="btn  btn-primary" @click="delClick"><span class="glyphicon glyphicon-trash"></span></button>
    </td>
  </tr>
</template>

<script>
  import {mapActions} from 'vuex';
    export default {
        name: "CartItem",
        props:['cartData'],
      computed:{
          total(){
            return this.cartData.price*this.cartData.count;
          }
      },
      methods:{
        ...mapActions([
          'addList','subList'
        ]),
        delClick(){
          this.cartData.count='';
          this.$store.commit('delCart',this.cartData.id);
        }
      }
    }
</script>

<style scoped>

</style>
