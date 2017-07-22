<template>
  <div id="app">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/news">新闻页</router-link></li>
    </ul>
    <router-view></router-view>
    <h2>我的购物车</h2>
    <products></products>
    <cart></cart>
    <!--使用vuex-->
    <!--对比使用vue和vuex的小应用-->
    <Btn></Btn>
    
  </div>
</template>

<script>
import products from './components/products.vue'
import cart from './components/cart.vue'
import Btn from './components/btn.vue'

export default {
  name: 'app',
  components:{
    products,
    cart,
    Btn
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
