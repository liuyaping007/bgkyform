import Vue from 'vue'
export const commfun = {
  getrefs_sys(controlID) {
    if (this.$refs[controlID] == null) {
      return
    }
    return this.$refs[controlID]
  },
  loadScript_sys(src) {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${src}"]`)
      if (existingScript) {
        if (existingScript.getAttribute('data-loaded') === 'true') {
          return resolve()
        }
        // 监听现有脚本的加载事件
        existingScript.addEventListener('load', resolve)
        existingScript.addEventListener('error', reject)
        return
      }
      const script = document.createElement('script')
      script.src = src
      script.type = 'text/javascript'
      script.async = false // 强制同步执行
      script.defer = false
      script.onload = resolve
      script.onerror = reject
      script.setAttribute('data-loading', 'true')
      let defineobj = window.define
      window.define = undefined
      script.onload = () => {
        window.define = defineobj
        script.setAttribute('data-loaded', 'true')
        script.removeAttribute('data-loading')
        resolve()
      }

      script.onerror = (err) => {
        script.removeAttribute('data-loading')
        reject(new Error(`Failed to load script ${src}`))
      }

      document.head.appendChild(script)
    })
  },
  loadArryScript_sys(scriptlists, callfun) {
    Promise.all([
      scriptlists.map((url) => {
        return loadScript(url)
      }),
    ])
      .then(() => {
        if (typeof callfun == 'function') {
          callfun()
        }
      })
      .catch((err) => {
        if (typeof callfun == 'function') {
          callfun(err)
        }
      })
  },
}

export function comminit() {
  for (let key in commfun) {
    Vue.prototype[key] = commfun[key]
  }
}
