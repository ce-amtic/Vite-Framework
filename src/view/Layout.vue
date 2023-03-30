<template>
  <div class="common-layout">
    <el-container>
      <el-header style="display: flex; 
      height: 100px;
      align-items: center; 
      justify-content: center;
      background-color: rgb(198, 226, 255);">
      Header</el-header>
      <el-container>
        <el-aside style="display: flex;
        width: 200px;
        height: 500px; 
        align-items: center; 
        justify-content: center;
        background-color: rgb(217, 236, 255)">
        Aside</el-aside>
        <el-container>
          <el-main style="display: flex; 
          align-items: center; 
          justify-content: center;
          background-color: rgb(236, 245, 255)">
          Main</el-main>
          <el-footer style="display: flex; 
          align-items: center; 
          justify-content: center;
          background-color: rgb(198, 226, 255);">
          Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
  
<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.element-plus-logo {
  width: 50%;
}
.header {
  background-color: rgb(198, 226, 255);
}
.aside {
  background-color: rgb(217, 236, 255);
}
.main {
  background-color: rgb(236, 245, 255);
}
</style>