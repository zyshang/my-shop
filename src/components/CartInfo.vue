<template>
  <div>
    <h4><strong>购物车信息</strong></h4>
    <table class="table text-center table-bordered">
      <thead>
      <tr>
        <th class="text-center">ID</th>
        <th class="text-center">名称</th>
        <th class="text-center">价格</th>
        <th class="text-center">数量</th>
        <th class="text-center">小计</th>
        <th class="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
          <tr is="CartItem" v-for="(d,k) in cartList"  :key="k" :cartData="d"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import CartItem from './CartItem'
  import {mapState} from 'vuex'
  export default {
    name:"CartInfo",
    components:{
      CartItem
    },
    //获取容器中的状态
    computed:{ //使用辅助函数自动生成计算属性
      ...mapState(['cartList'])
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
