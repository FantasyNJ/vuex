import { Module } from './module';
import { forEachValue } from "./util";

export class ModuleCollection {
  constructor(rawRootModule) {
    this.register([], rawRootModule)
  }

  register (path, rawModule, parentModule) {
    const newModule = new Module(rawModule)
    if (path.length === 0) {
      // root
      this.root = newModule
    } else {
      if (!parentModule._children){
        parentModule._children = {}
      }
      const moduleName = path[path.length - 1]
      parentModule._children[moduleName] = newModule
    }

    if (rawModule.modules) {
      forEachValue(rawModule.modules, key => this.register(path.concat(key), rawModule.modules[key], newModule))
    }
  }
}

function findParentModule(path, rootModule){
  return path.reduce((module, key) => module[key], rootModule)
}
