<!--
 * @Date: 2020-05-07 21:19:16
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-07 23:08:14
 -->
<template>
  <div>
    <img class="back" src="../assets/back.png" />
    <div class="mask"></div>
    <div class="top">
      <el-button class="list-btn" @click="isDrawerShow = true" type="primary">资料列表</el-button>
    </div>
    <el-drawer
      class="list-container"
      :visible.sync="isDrawerShow"
      :with-header="false"
      size="37%">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>英译汉</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(item, index) in enList" :key="index" :index="`1-${index}`">
              <div>
                <a :href="item.url" target="_blank">{{item.name}}</a>
                <span class="code">提取码：{{item.code}}</span>
              </div>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>汉译英</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(item, index) in cnList" :key="index" :index="`1-${index}`">
              <a :href="item.url" target="_blank">{{item.name}}</a>
              <span class="code">提取码：{{item.code}}</span>
              </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-drawer>
    <div class="search-container">
      <el-select v-model="value" class="search-input" filterable placeholder="">
        <el-option
          v-for="item in options"
          :key="item.name"
          :label="item.name"
          :value="item.name"
        >
          <div>
            <a :href="item.url" target="_blank">{{item.name}}</a>
            <span class="code">提取码：{{item.code}}</span>
          </div>
        </el-option>
      </el-select>
      <el-button class="search-btn" type="primary">搜 索</el-button>
    </div>
  </div>
</template>

<script>
import { EnList, CnList } from '../config.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      isDrawerShow: false,
      enList: EnList,
      cnList: CnList,
      options: EnList.concat(CnList),
      value: ''
    }
  },
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .back, .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }
  .mask {
    z-index: -1;
    background: rgba(0, 0, 0, .3)
  }
  .top {
    height: 60px;
    width: 100%;
    /* background: #fff; */
    /* padding: 0 50px; */
  }
  .logo {
    width: 60px;
    float: left;
    margin-left: 50px;
  }
  .list-btn {
    float: right;
    margin-right: 50px;
    margin-top: 20px;
    cursor: pointer;
  }
  .list-container {
    text-align: left;
  }
  .list-container ::v-deep .el-drawer__body {
    overflow: scroll !important;
  }
  .code {
    float: right;
    display: inline-block;
    width: 22%;
  }
  .search-container {
    height: 100px;
    width: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
  }
  .search-container ::v-deep .el-input__inner {
    height: 50px;
  }
  .search-btn {
    height: 50px;
  }
  .search-input {
    width: 38%;
  }
</style>
