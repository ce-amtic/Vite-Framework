<template>
  <h1>Home</h1>
  <p>
    <a href="https://cn.vuejs.org/guide/introduction.html" target="_blank">Vue.js</a> | 
    <a href="https://element-plus.org/zh-CN/" target="_blank">Element+</a> | 
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview" target="_blank">JavaScript</a> |
    <a href="https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html" target="_blank">TypeScript</a>
  </p>
  <div class="framework">
    <pre>Framework:
      
src/
  assets/ -------------- stores images that need process
  components/ ---------- stores SPAs that work as a component of some pages
    layouts/
      BaseHeader.vue --- define header
      BaseSide.vue ----- define vertical navigate bar
      BaseFooter.vue --- define footer
    HelloWorld.vue ----- example usage of basic Element+ components
  composables/
    dark.ts
    index.ts
  router/
    index.ts ----------- define routes & export router
  styles/
    element/
      dark.scss -------- import dark theme
      index.scss
    index.scss
  view/
    *.vue -------------- define pages
  App.vue -------------- main layout
  main.ts -------------- define app behavior</pre>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.framework {
  font: consolas;
  font-size: 18px;
  text-align: left;
  margin: auto;
  width: 600px;
  top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>