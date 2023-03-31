import { ref } from 'vue'

export const window = ref({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientWidth
  })
export const isFold = ref(window.value.width<700?true:false)
export const toggleFold = () =>{
    isFold.value =! isFold.value;
}