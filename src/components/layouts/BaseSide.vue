<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon><Home /></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><About /></el-icon>
      <template #title>About</template>
    </el-menu-item>
    <el-menu-item>
      <button @click="toggleDark()" 
              class="border-none w-full bg-transparent cursor-pointer" 
              style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { toggleDark } from '~/composables';
import { ref } from 'vue'
import {
  House as Home,
  InfoFilled as About
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

