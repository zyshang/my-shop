import Vue from "vue";

export default {//修改购物车的方法
  //1、添加(payload:形参名，任意取，代表要添加的商品)
  pushList(state,payload){
    //添加属性
    //   state.cartList[payload.id]=payload;
    Vue.set(state.cartList,payload.id,payload);
  },
  //2、+
  addCount(state,id){
    state.cartList[id].count++;
  },
  //3、-
  subCount(state,id){
    state.cartList[id].count--;
  },
  //4、删除
  delCart(state,id){
    Vue.delete(state.cartList,id);
  },
  //5、清空
  clearCart(state){
    //先将所有的count置''
    for(var k in state.cartList){
      if(state.cartList.hasOwnProperty(k)){
        state.cartList[k].count='';
      }
    }
    state.cartList={};
  }
}
