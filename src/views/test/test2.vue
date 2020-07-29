<!--
 * @Author: PT
 * @Date: 2020-07-29 11:01:06
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 17:47:45
 * @Description: file content
--> 
<template>
  <div class="test">
    <h1>test222</h1>
    <el-button
      type="primary"
      @click="handleClick"
    >按钮222</el-button>
    <h2 class="h2">h2标签</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0;

  // Methods will be component methods
  increment () {
    this.count++
  }

  decrement () {
    this.count--
  }

  handleClick () {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    console.log(this.$route)
    setTimeout(() => {
      loading.close()
      console.log(this.$api)
    }, 2000)
  }
}
</script>
<style lang='scss' scoped>
.test {
  border: 1px solid red;
  color: $color;
}
</style>
<style lang='less' scoped>
.test {
  .h2 {
    color: @color;
  }
}
</style>