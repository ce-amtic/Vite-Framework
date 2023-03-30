<template>
  <el-config-provider namespace="ep" class="main-container">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
        <el-container>
          <el-main> <RouterView></RouterView> </el-main>
          <el-footer class="el-footer-demo" 
                     style="height: auto; align-items: center;"> <BaseFooter /> </el-footer>
        </el-container>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  flex-grow: 1;
  color: var(--ep-text-color-primary);
}
.el-footer-demo{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>