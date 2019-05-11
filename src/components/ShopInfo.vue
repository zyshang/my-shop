<template>
  <div>
    <h2 class="text-center">商品信息</h2>
      <table class="table text-center table-bordered">
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">名称</th>
            <th class="text-center">价格</th>
            <th class="text-center">数量</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(d,i) in shopList" :key="i">
              <td>{{d.id}}</td>
              <td>{{d.name}}</td>
              <td>{{d.price}}</td>
              <td><div><button class="btn btn-info" @click="add(d)">+</button><input class="text-center" type="text" style="width: 50px;height: 30px;" v-model="d.count"/><button class="btn btn-warning"  @click="sub(d)">-</button></div></td>
              <td>
                <button class="addCart btn btn-info"  @click="add1(d)">加入购物车</button>
              </td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

  import {mapActions} from 'vuex';
export default {
  name:"ShopInfo",
  methods:{
    // add(item){
    //   //参数：待添加和操作的商品
    //   this.$store.dispatch('addList',item);
    // }
    // sub(item){
    //   //让数量--
    //   //如果当前数量为1，item.count=''
    //   //删除购物车中的商品
    //   this.$store.dispatch('subList',item);
    //   //如果大于1，则--
    // },
    ...mapActions({
      add:'addList',
      add1:'addList1',
      sub:'subList'
    })
  },
  data(){
    return{
      shopList:[
        {
          id:1,
          name:"鱼香肉丝",
          price:12,
          count:""
        },
        {
          id:2,
          name:"辣子鸡",
          price:14,
          count:""
        },
        {
          id:3,
          name:"青椒炒蛋",
          price:10,
          count:""
        },
        {
          id:4,
          name:"酸菜鱼",
          price:15,
          count:""
        },
        {
          id:5,
          name:"米饭",
          price:1,
          count:""
        }
      ]
    }
  }
}

 // var  a=document.getElementsByClassName("classB").innerHTML="<button>+</button>"
  // $('.classB').innerHTML="45";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
