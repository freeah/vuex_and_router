<template>
  <div class="products">
    <table>
      <caption>产品列表</caption>
      <thead>
        <tr>
          <th>产品名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" >
          <td>{{p.title}}</td>
          <td>{{p.price}}</td>
          <td>{{p.inventory}}</td>
          <td>
              <!-- disabled 需要动态绑定 产品的数量为0是为 true -->
              <button :disabled="!p.inventory" @click="addToCart(p)"> 
                购买
              </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts', // 映射 this.products 为 store.getters.allProducts
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {  //实例创建完成之后被调用
    this.$store.dispatch('getAllProducts')  //在actions.js
    console.dir(this.products)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
table {
  width: 600px;
  margin: 50px auto;
  line-height: 30px;
}

button{
  padding: 5px 10px;
}
</style>
