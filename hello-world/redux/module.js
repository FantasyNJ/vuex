export class Module {
  constructor(rawModule){
    this._rawModule = rawModule
    this.state = rawModule.state || {}
    this.namespaced = !!rawModule.namespaced
  }
}
