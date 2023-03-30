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
    <el-menu-item index="/instance">
      <el-icon><About /></el-icon>
      <template #title>About</template>
    </el-menu-item>
    <el-menu-item index="/layout" disabled>
      <el-icon><Layout /></el-icon>
      <template #title>Layout</template>
    </el-menu-item>
    <el-menu-item index="/worship">
      <el-icon><Worship /></el-icon>
      <template #title>STO sls Orz</template>
    </el-menu-item>
    <el-menu-item>
      <button @click="toggleDark()" 
              class="border-none w-full bg-transparent cursor-pointer" 
              style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>

  <!--el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu-->
</template>

<script lang="ts" setup>
import { toggleDark } from '~/composables';
import { ref } from 'vue'
import {
  House as Home,
  InfoFilled as About,
  Grid as Layout,
  Avatar as Worship
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

