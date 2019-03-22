import {ModuleCollection} from "./module-collection";
import { forEachValue, getParentModule } from "./util";

let Vue

export class Store {
  constructor(options = {}) {
    // 判断是否挂载到Vue上
    if (!Vue && window !== undefined && window.Vue) {
      Vue = window.Vue
    }

    const {
      strict = false
    } = options
    // instance
    const store = this
    this.strict = strict

    this._isCommitting = false
    this._modules = new ModuleCollection(options)
    this._actions = Object.create(null)
    this._mutations = Object.create(null)
    // 存所有module options 的 getters函数
    this._wrappedGetters = Object.create(null)

    this.getters = Object.create(null)

    installVm(this, this._modules.root)
    installModule(this, this._modules.root, [])

  }

  dispatch(_type, _commit) {

  }

  commit() {

  }
}

function installVm(store, rootModule) {

  let options = {
    data: {
      // $$开头只能在_data中访问到，不会挂载到vue的实例对象
      $$state: rootModule.state
    },
    computed: store._wrappedGetters
  }

  console.log(options, 'optionsoptionsoptions')

  store._vm = new Vue(options)

  // store.getters = store._vm
}

function installModule (store, module, path) {
  const { state } = module
  const rootModule = store._modules.root
  const isRoot = !path.length
  let moduleNamePath = ''

  // 判断是否是根module
  if (!isRoot) {
    const moduleName = path[path.length - 1]
    const parentModule = getParentModule(path.slice(0, -1), rootModule)
    parentModule.state[moduleName] = state
  }

  if (module.namespaced) {
    moduleNamePath = isRoot ? '' : path.join('/') + '/'
  }

  if (module._rawModule.getters) {
    forEachValue(module._rawModule.getters, key => {
      // Object.defineProperty(store.getters, moduleNamePath + key, {
      //   get (){
      //     return module._rawModule.getters[key](state, module._rawModule.getters)
      //   },
      //   enumerable: true
      // })
      store._wrappedGetters[moduleNamePath + key] = () => module._rawModule.getters[key](state, module._rawModule.getters)
    })
  }

  if (module._children) {
    forEachValue(module._children, key => installModule(store, module._children[key], path.concat(key)))
  }
}
