import { Doctype } from '@ceramicnetwork/ceramic-common'

import { DoctypeProxy } from './doctypes'
import { IDX } from './index'
import { DocID, Entry, RootIndexContent } from './types'
export class RootIndex {
  _idx: IDX
  _didCache: Record<string, DocID | null> = {}
  _proxy: DoctypeProxy

  constructor(idx: IDX) {
    this._idx = idx
    this._proxy = new DoctypeProxy(this._getOrCreateOwnDoc.bind(this))
  }

  async getIndex(did: string): Promise<RootIndexContent | null> {
    const rootDoc =
      this._idx.authenticated && did === this._idx.id
        ? await this._proxy.get()
        : await this._getDoc(did)
    return (rootDoc?.content as RootIndexContent) ?? null
  }

  async get(definitionId: DocID, did: string): Promise<Entry | null> {
    const index = await this.getIndex(did)
    return index?.[definitionId] ?? null
  }

  async set(definitionId: DocID, entry: Entry): Promise<void> {
    await this._proxy.changeContent<RootIndexContent>(content => {
      return { ...content, [definitionId]: entry }
    })
  }

  async remove(definitionId: DocID): Promise<void> {
    await this._proxy.changeContent<RootIndexContent>(({ [definitionId]: _remove, ...content }) => {
      return content
    })
  }

  async _getOrCreateOwnDoc(): Promise<Doctype> {
    const doc = await this._getDoc(this._idx.id)
    // Note: doc ?? (await this._createOwnDoc()) gets wrongly compiled to: doc ? Promise.resolve(this._createOwnDoc()) : doc
    return doc ? doc : await this._createOwnDoc()
  }

  async _getDoc(did: string): Promise<Doctype | null> {
    let rootId
    rootId = this._didCache[did]
    if (rootId === null) {
      return null
    }
    if (rootId == null) {
      rootId = await this._idx.getIDXDocID(did)
      this._didCache[did] = rootId
    }
    return rootId == null ? null : await this._idx.loadDocument(rootId)
  }

  async _createOwnDoc(): Promise<Doctype> {
    const doctype = await this._idx.createDocument(
      {},
      { schema: this._idx._schemas.RootIndex, tags: ['RootIndex'] }
    )
    this._didCache[this._idx.id] = doctype.id
    return doctype
  }
}