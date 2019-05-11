  export default {//定义依赖数据
    totalCount({cartList}){
      var sum=0;
      for(var k in cartList){
        if(cartList.hasOwnProperty(k)){
          sum+=cartList[k].count;
        }
      }
      return sum;
    },
    totalPrice({cartList}){
      var sum=0;
      for(var k in cartList){
        if(cartList.hasOwnProperty(k)){
          sum+=cartList[k].count*cartList[k].price;
        }
      }
      return sum;
    }
  }
