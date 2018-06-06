'use strict'

import Base from './base.js';

export default class extends Base{
    init(http){
        super.init(http);
        this._method = '_method';
    };

    indexAction(){
        console.log('请求到了这个Sticky-Notes的Index的Action');
        return this.display();
    };

    notesAction(){
        console.log('Notes的列表数据信息');
        return this.display();
    }
}