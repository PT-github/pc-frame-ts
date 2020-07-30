/*
 * @Author: PT
 * @Date: 2020-07-30 08:31:35
 * @LastEditors: PT
 * @LastEditTime: 2020-07-30 10:40:30
 * @Description: file content
 */ 
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

@Component
export default class Test3 extends Vue {
  count:number = 0

  created ():void {
    console.log('created:::count:::', this.count)
  }

  mounted ():void {
    console.log('mounted:::count:::', this.count)
  }

  render (h: CreateElement) {
  return <div id="foo" onClick={this.increment}>【{
      this.getHtml(h)
    }】</div>
  }

  increment () {
    this.count++
  }

  getHtml (h: CreateElement) {
    return (<h1>{this.count}</h1>)
  }
}