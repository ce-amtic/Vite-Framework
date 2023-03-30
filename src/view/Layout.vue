<template>
  <div class="common-layout">
    <el-container>
      <el-header style="display: flex; 
      height: 100px;
      align-items: center; 
      justify-content: center;
      background-color: var(--ep-color-primary-light-7);">
      Header</el-header>
      <el-container>
        <el-aside style="display: flex;
        width: 200px;
        height: 500px; 
        align-items: center; 
        justify-content: center;
        background-color: var(--ep-color-primary-light-8)">
        Aside</el-aside>
        <el-container>
          <el-main style="display: flex; 
          align-items: center; 
          justify-content: center;
          background-color: var(--ep-color-primary-light-9)">
          Main</el-main>
          <el-footer style="display: flex; 
          align-items: center; 
          justify-content: center;
          background-color: var(--ep-color-primary-light-7);">
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
</style>