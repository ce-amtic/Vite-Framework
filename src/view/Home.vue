<template>
  <div>
    <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
  </div>
  <div class="main-paragraph">
    <pre>Framework:
src/
  assets/ -------------- stores images that need process
  components/ ---------- stores SPAs that work as a component of some pages
  router/ -------------- define routes and export router
  styles/
  view/ ---------------- stores independent pages
  App.vue -------------- main layout
  main.ts -------------- define app behavior</pre>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-paragraph {
  font: consolas;
  font-size: 18px;
  text-align: left;
  margin: auto;
  width: 600px;
	height: 350px;
  top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.element-plus-logo {
  width: 50%;
}
</style>