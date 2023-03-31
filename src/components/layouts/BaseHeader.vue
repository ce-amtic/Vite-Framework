<template>
  <el-menu class="hidden-sm-and-down" mode="horizontal">
    <a class="logo-box" href="">
      <img alt="logo" class="logo" src="../../assets/logo.png" width="10%"/>
    </a>
    <div class="title">
      <p>{{ appTitle }}</p>
    </div>
  </el-menu> 
  <el-menu class="hidden-sm-and-up" mode="horizontal">
    <a class="logo-box-sm" href="/">
      <img alt="logo" class="logo" src="../../assets/logo-s.png" width="10%"/>
    </a>
    <p>{{ appTitleShorten }}</p>
  </el-menu> 

  <!--el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu-->
</template>

<script lang="ts" setup>
const appTitle = "Vite Framework Based on Element+"
const appTitleShorten = "Vite Framework"
</script>

<style scoped>
.hidden-sm-and-down {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: var(--ep-text-color-disabled) 0px -2px 10px;
  z-index: 10;
}
.hidden-sm-and-up {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: auto;
  box-shadow: var(--ep-text-color-disabled) 0px 0px 10px;
  z-index: 10;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.title {
  padding-left: 20px;
  line-height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.logo-box {
  height: 100%;
  width: auto;
  padding-left: 20px;
}
.logo-box-sm {
  height: 100%;
  padding: 0;
}
.logo {
  height: 100%;
  width: auto;
}
</style>