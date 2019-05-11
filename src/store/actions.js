  import $ from 'jquery'
export default {
    //添加
    addList({state,commit},payload){
      //判断购物车中是否有指定的商品
      if(state.cartList[payload.id]){
        //有就++
        commit('addCount',payload.id)
      }else{
        //如果没有加入购物车
        payload.count=1;
        commit('pushList',payload)
      }
    },
    addList1({state,commit},payload){
      //判断购物车中是否有指定的商品
      if(state.cartList[payload.id]){
        //有就++
        commit('addCount',payload.id)
      }else{
        //如果没有加入购物车
        payload.count = 1;
        commit('pushList', payload);

          $('.addCart').click(function (e) {
            $(e.target).addClass('disabled').prop('disabled', true);
          })


        // $(".isClick,.addCart").addClass('disabled');
        // $(".isClick,.addCart").prop('disabled', true);


        // $('.isClick .addCart').attr("disabled",'disabled');
      }
    },
    subList({state,commit},payload){
      //让数量--
      if(state.cartList[payload.id].count===1){
        //如果当前数量为1，item.count=''
        payload.count='';
        // $('.addCart').click(function (e) {
        //   $(e.target).addClass('disabled').prop('disabled', true);
        // })
        //删除购物车中的商品
        commit('delCart',payload.id);
      }else{
        //如果大于1，则--
        commit('subCount',payload.id);
      }
    }
  }
