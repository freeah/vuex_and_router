<template>
  <div class="home">
      <h2>这是首页页面</h2>
      <p>
        路由流程：<br><br>
        1.在大型项目中，可以新建router文件夹，可以按照各个组件的路由进行划分，这个只写了一个router.js文件，里面首先引入各个组件<br><br>
        2.定义路由const routes，这里面路由可以嵌套<br><br>
        3.创建路由实例，并进行导出<br><br>
        4.在main.js中导入路由实例，各个组件就可以使用路由了
      </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
