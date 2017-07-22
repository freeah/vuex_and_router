<template>
  <div class="news">
    <h2>这是新闻页页面</h2>
    <ul>
      <li><router-link to="/news/newdetial">新闻详情页</router-link></li>
    </ul>
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
