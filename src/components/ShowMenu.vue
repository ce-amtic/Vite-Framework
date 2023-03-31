<template>
  <div class="hidden-sm-and-up">
    <div v-if="isFold">
    <el-button type="" class="float-button"
      :icon="Menu" 
      circle 
      size="large"
      @click="toggleFold"
    /></div>
    <div v-else>
    <el-button class="float-button"
      :icon="FoldMenu" 
      circle 
      autofocus
      size="large"
      @click="toggleFold"
    /></div>
  </div>
</template>

<script lang="ts" setup>
import { isFold, toggleFold } from "~/composables"
import {
  Menu,
  Fold as FoldMenu,
} from '@element-plus/icons-vue'
</script>
  
<style scoped>
.float-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
}
</style>