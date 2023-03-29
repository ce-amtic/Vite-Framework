<script lang="ts" setup>
import { toggleDark } from '~/composables';
</script>

<template>
  <el-menu 
    :default-active="$route.path"
    router
    class="el-menu-demo" 
    mode="horizontal">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
    <el-menu-item h="full">
      <button @click="toggleDark()" 
              class="border-none w-full bg-transparent cursor-pointer" 
              style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
