<template>
  <el-divider />
  <!--p>© {{ footerMsg.date }} {{ footerMsg.name }}</p-->
  <p>
    Developed by 
    <a :href="footerMsg.link" target="_blank"> {{ footerMsg.name }} </a>
  </p>
  <p>
    Powered by 
    <a :href="footerMsg.origin" target="_blank"> {{ footerMsg.credit }} </a>
  </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const date = new Date()
const footerMsg = ref({
  date: date.getUTCFullYear(),
  link: 'https://github.com/ce-amtic/',
  name: 'Developers',
  origin: 'https://element-plus.org/',
  credit: 'Element+'
})

const getLink = () => {footerMsg.value.link}
</script>

<style scoped>
</style>