<!--
 * @Author: PT
 * @Date: 2020-06-04 10:04:33
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 10:54:58
 * @Description: 测试文件
--> 
<template>
  <div class="test">
    <h1>test</h1>
    <el-button type="primary" @click="handleClick">按钮</el-button>
    <h2 class="h2">h2标签</h2>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name:'Test',
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted () {},

    methods: {
      handleClick () {
        console.log('点击', this.$test)
      }
    },

    watch: {}

  })

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