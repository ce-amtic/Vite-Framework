<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <a class="logo-box" href="/">
      <img alt="logo" class="logo" src="../../assets/logo.png" width="10%"/>
    </a>
    <div class="title">
      <p>{{ appTitle }}</p>
    </div>
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
import { toggleDark } from '~/composables';
const appTitle = "Vite Framework Based on Element+"
const appTitleCN = "基于 Element+ 的 Vite 框架"
</script>

<style scoped>
.el-menu-demo {
  height: 60px;
  display: flex;
}
.title {
  width: auto;
  padding-left: 20px;
  line-height: 100%;
  align-items: center;
  font-size: 20px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.logo-box {
  width: 10%;
  padding-left: 20px;
}
.logo {
  width: 100%
}
.header-button {
  align-items: right;
}
</style>