/*
 * @Author: PT
 * @Date: 2020-07-29 17:31:31
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 17:49:21
 * @Description: file content
 */ 
import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $test: any
    $api: any
  }
}