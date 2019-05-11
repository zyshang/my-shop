<template>
  <div id="app">
      <ShopInfo></ShopInfo>
      <CartInfo></CartInfo>
    <p>
      <span class="h3">总数:{{totalCount}}</span>
      <span class="h3">总价:{{totalPrice}}</span>

      <button class="btn btn-danger pull-right" @click="clearClick">清空购物车</button>
    </p>
  </div>


</template>

<script>
  import ShopInfo from '@/components/ShopInfo'
  import CartInfo from '@/components/CartInfo'
  import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components:{//局部注册
    ShopInfo,
    CartInfo
  },
  computed:mapGetters(['totalCount','totalPrice']),
  // computed:mapGetters(['totalCount',' totalPrice']),
  methods:{
    clearClick() {
      this.$store.commit('clearCart', this.cartData);
    }
  }
}

</script>

<style>

</style>
