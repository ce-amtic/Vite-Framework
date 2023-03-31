<template>
  <div v-if="window.width<700">
    <transition name="el-fade-in-linear">
      <div v-if="isFold">
      <el-button class="float-button"
        :icon="Menu" 
        circle 
        size="large"
        @click="toggleFold"
      /></div>
      <div v-else>
      <el-button class="float-button"
        :icon="FoldMenu" 
        circle 
        size="large"
        @click="toggleFold"
      /></div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { window, isFold, toggleFold } from "~/composables"
import {
  Menu,
  Fold as FoldMenu,
} from '@element-plus/icons-vue'
</script>
  
<style>
.float-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
}
</style>