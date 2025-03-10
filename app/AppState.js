import { Notes } from './models/Notes.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /**@type {Notes[]} */
  noteFiles = [
    new Notes({
      title: 'Test note 1',
      content: 'alskjdf;laksjdfl;kjasdf',
      color: '54f399'
    }),
    new Notes({
      title: 'Test note 2',
      content: 'qoiwueropqiwuerpoqwuier',
      color: '00ff00'
    }),
    new Notes({
      title: 'Test note 3',
      content: ',mzxnv,.zmxncv.z,xmncv.znascdvfgh',
      color: '000000'
    }),
  ]

  /**@type {Notes} */
  activeNoteFile = null


}

export const AppState = createObservableProxy(new ObservableAppState())