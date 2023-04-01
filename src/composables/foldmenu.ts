import { ref } from 'vue'

export const window = ref({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientWidth
})

export const isFold = ref(window.value.width<768?true:false)
export const toggleFold = () => {
  isFold.value =! isFold.value;
}

export const isCollapse = ref(true)
export const toggleCollapse = () => {
  isCollapse.value =! isCollapse.value;
}