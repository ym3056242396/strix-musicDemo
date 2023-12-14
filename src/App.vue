<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

// 音乐平台列表
const musicInfoList = [
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
let musicIdSearch = ref('')
let musicKey = ref(0)
let musicDefaultChoice = ref('netease')

function queryMusicFun() {
  let musicDomRef = ref('metingDomRef')
  console.log(musicDomRef, '>>>>musicDomRef')
  musicKey.value = new Date().getTime()
}
// export default musicDemo({
//   setup() {
//     const musicDomRef = ref(metingDomRef)

//     const getMusicDomRef = () => {
//       console.log(musicDomRef.value.value)
//     }
//     //一定不要忘记在return中返回给外部
//     return {
//       musicDomRef
//     }
//   }
// })
</script>
<template>
  <el-form @submit.native.prevent>
    <el-form-item>
      <el-input
        clearable
        v-model="musicIdSearch"
        placeholder="请输入搜索关键字"
        style="width: 100%"
        :prefix-icon="Search"
        @keyup.enter.native="queryMusicFun"
      />
    </el-form-item>
    <el-form-item label="选择搜索平台：">
      <el-radio-group v-model="musicDefaultChoice" class="ml-4">
        <el-radio
          v-for="item in musicInfoList"
          :label="item.name"
          :key="item.id"
          size="mini"
          >{{ item.chName }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button @click="queryMusicFun" type="primary" style="width: 100%"
        >搜索</el-button
      >
    </el-form-item>
  </el-form>
  <br />

  <br />
  <meting-js
    ref="metingDomRef"
    :id="musicIdSearch"
    :server="musicDefaultChoice"
    type="musicIdSearch"
    :key="musicKey"
    autoplay="true"
  ></meting-js>
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
