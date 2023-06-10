class HashMap<V> {
  table: HashNode<V>[] = []
  newCap: number = 0
  size: number = 0
  newThr: number = 0
  readonly INIT_TABLE_CAPICATY = 16
  readonly LOAD_FACTOR = 0.75
  put(key: string, value: V) {
    const hashVal = this.hash(key)
    let nodePosition: number
    let oldHashNode: HashNode<V>
    let mdlHashNode: HashNode<V> | undefined
    if (this.table.length === 0) {
      this.resize()
    }
    if (!(oldHashNode = this.table[nodePosition = (hashVal & (this.newCap - 1))])) {
      this.table[nodePosition] = new HashNode(hashVal, key, value, undefined)
    } else {
      if (key === oldHashNode.key && hashVal === oldHashNode.hash) {
        oldHashNode.value = value
        return oldHashNode.value
      } else {
        while(true) {
          if (!(mdlHashNode = oldHashNode.next)) {
            if (oldHashNode.hash === hashVal && key === oldHashNode.key) {
              oldHashNode.value = value
            } else {
              oldHashNode.next = new HashNode(hashVal, key, value, undefined)
            }
            break
          }
          oldHashNode = mdlHashNode!
        }
      }
    }
    if (++this.size >= this.newThr) {
      this.resize()
    }
  }
  get(key: string) {
    let e: HashNode<V>
    const hashVal = this.hashCode(key)
    if (this.newCap > 0) {
      e = this.table[hashVal & (this.newCap - 1)]
      if (e.hash === hashVal && e.key === key) {
        return e.value
      } else {
        let mdlHashNode: HashNode<V> | undefined = e.next
        if (mdlHashNode) {
          do {
            if (mdlHashNode.key === key) {
              return mdlHashNode.value
            }
          } while ((mdlHashNode = mdlHashNode.next))
        }
      }
    }
  }
  hash(key: string) {
    const hash = this.hashCode(key)
    return hash ^ (hash >>> 16)
  }
  resize() {
    if (this.newCap === 0) {
      this.newCap = this.INIT_TABLE_CAPICATY
      this.newThr = this.INIT_TABLE_CAPICATY * this.LOAD_FACTOR
    } else if (this.newCap >= this.INIT_TABLE_CAPICATY) {
      this.newCap <<= 1
      this.newThr <<= 1
    }
  }
  hashCode(key: string) {
    let hash: number = 0
    for (let i = 0; i < key.length; i++) {
      hash = 31 * hash + key.charCodeAt(i)
    }
    return hash & 15
  }
}
class HashNode<V> {
  key!: string
  value!: V
  hash!: number
  next!: HashNode<V> | undefined
  constructor(hash: number, key: string, value: V, next?: HashNode<V>) {
    this.key = key
    this.value = value
    this.hash = hash
    this.next = next
  }
}
const hashmap = new HashMap()
export {}