<script setup>
import {ref} from "vue"
import { Search } from '@element-plus/icons-vue'
const platInfoList = [
  {
    name: 'tencent',
    chName: 'QQ音乐',
    id: '0'
  },
  {
    name: 'netease',
    chName: '网易云音乐',
    id: '1'
  },
  {
    name: 'kugou',
    chName: '酷狗音乐',
    id: '2'
  },
  {
    name: 'xiami',
    chName: '虾米音乐',
    id: '3'
  },
  {
    name: 'baidu',
    chName: '百度音乐',
    id: '4'
  }
]

let search = ref("")
let key = ref(0)
let servePlat = ref('netease')

function runSearch() {
  key.value = new Date().getTime()
}
/*
type是搜索类型
playlist 歌单
song 单曲
album 专辑
search 关键词
artist 歌手
*/
</script>

<template>
  <el-form @submit.native.prevent>
    <el-form-item>
      <el-input 
        clearable 
        v-model="search" 
        placeholder="请输入搜索关键字" 
        style="width: 100%;" 
        :prefix-icon="Search"
        @keyup.enter.native="runSearch"
        />
    </el-form-item>
    <el-form-item label="选择搜索平台：">
      <el-radio-group v-model="servePlat" class="ml-4">
        <el-radio v-for="item in platInfoList" :label="item.name" :key="item.id" size="mini">{{ item.chName }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button @click="runSearch" type="primary" style="width:100%;">搜索</el-button>
    </el-form-item>
  </el-form>
  
  <br />
  
  
    
    <br />
  <meting-js
  :id="search"
  :server="servePlat"
  type="search"
  :key="key"
  autoplay="true"
  >
</meting-js>

<!-- fixed="true"
  autoplay="true"
  loop="all"
  order="random"
  preload="auto"
  list-folded="ture"
  list-max-height="500px"
  lrc-type="1" -->

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
