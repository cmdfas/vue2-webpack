<template>
  <div>
    <h1>hello vue webpack</h1>
    <img src="./assets/vue+webpack.png" width="200"/>
    <ul>
      <li>
        <router-link to="/foo">Go to Foo</router-link>
      </li>
      <li>
        <router-link to="/bar">Go to Bar</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <el-calendar v-model="value"></el-calendar>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>
  h1 {
    color: blue
  }
</style>
