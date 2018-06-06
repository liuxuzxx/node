'use strict';

import Base from './base.js';

export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
      console.log('请求来临...');
      return this.display();
  }
}