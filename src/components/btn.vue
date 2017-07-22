<template>
  <div class="btn">
    <!--使用vuex-->
    <p>
      vuex流程：1.首先按组件进行分类，在module文件夹，文件夹里面的js文件内容就是各个组件的state,mutations,export进行输出；<br><br>
      2.之后建好actions.js  getters.js，actions.js是在触发事件后通过mapActions进入这里，定义函数，之后分发给相对应组建的mutations;getters.js是通过mapGetters读取各个组件的state;<br><br>
      3.在index.js里面建好store仓库,引入这些文件；<br><br>
      4.将index.js引入到main.js，子组件就可以使用vuex了,之后进行交互；<br><br>
      点击事件先进入actions文件，之后commit给modules文件夹下对应组件的mutations，在getters.js里面获取modules文件夹下的组件的state,vue文件可以通过mapGetters获取state.<br><br>
      如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。
    </p>
    <p>{{count1}}</p>
    <button @click="addCount1">+</button>
    <button @click="reduceCount1">-</button>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    count1: 'count1', // 映射 this.products 为 store.getters.allProducts
  }),
   methods:mapActions([
      'addCount1',
      'reduceCount1'
    ]) 
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
