import Toast from "./Toast";

function createToast({Vue, message, propsData,onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
   return toast

}

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, ToastOptions) {
      if (currentToast) {
      currentToast.closeToast()
        currentToast = createToast({Vue, message, propsData:ToastOptions,onClose:()=>{
            currentToast=null
          }})
      } else {
        currentToast = createToast({Vue, message, propsData:ToastOptions,onClose:()=>{
          currentToast=null
          }})
      }

    }
  }
}