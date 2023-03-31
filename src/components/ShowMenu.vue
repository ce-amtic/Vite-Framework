<template>
  <div class="hidden-sm-and-up">
    <div v-if="isFold">
      <el-button class="float-button"
        type="primary"
        circle 
        size="large"
        @click="toggleFold"
      ><el-icon><Menu /></el-icon></el-button>
    </div>
    <div v-else>
      <el-button class="float-button"
        type="primary"
        circle 
        autofocus
        size="large"
        @click="toggleFold"
      ><el-icon><FoldMenu /></el-icon></el-button>
    </div>
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
  height: 50px;
  width: 50px;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  font-size: 18px;
}
</style>