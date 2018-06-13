<template>
  <div>
    <div class="header">
      <div class="logo">
        <a href="http://www.hnucm.edu.cn/" target="blanck">
          <img src="../assets/logo.png" style="width:700px;height:150px;">
        </a>
      </div>
      <div class="menu">
        <div class="items">
          <ul>
            <li :class="index == 1 ? 'item':''" @mouseover="index = 1" @mouseout="index = 0">
              <a>机构设置</a>
            </li>
            <li :class="index == 2 ? 'item':''" @mouseover="index = 2" @mouseout="index = 0">
              <a>工作动态</a>
            </li>
            <li :class="index == 3 ? 'item':''" @mouseover="index = 3" @mouseout="index = 0">
              <a>政策法规</a>
            </li>
            <li :class="index == 4 ? 'item':''" @mouseover="index = 4" @mouseout="index = 0">
              <a>安全知识</a>
            </li>
            <li :class="index == 5 ? 'item':''" @mouseover="index = 5" @mouseout="index = 0">
              <a>武装部工作</a>
            </li>
            <li :class="index == 6 ? 'item':''" @mouseover="index = 6" @mouseout="index = 0">
              <a>东塘保卫科</a>
            </li>
            <li :class="index == 7 ? 'item':''" @mouseover="index = 7" @mouseout="index = 0">
              <a>纠察队建设</a>
            </li>
          </ul>
        </div>
        <div class="other">
          电话：0731-88458110 88458014
        </div>
      </div>
    </div>
    <div class="banner">
        <div class="item1">
          <ul v-show="index == 1" @mouseover="index = 1" @mouseout="index = 0">
            <li>
              <a href="#">办公室</a>
            </li>
            <li>
              <a href="#">治安科</a>
            </li>
            <li>
              <a href="#">综治科</a>
            </li>
            <li>
              <a href="#">户政科</a>
            </li>
            <li>
              <a href="#">消防科</a>
            </li>
            <li>
              <a href="#">东塘保卫科</a>
            </li>
            <li>
              <a href="#">军事教研室</a>
            </li>
          </ul>
        </div>
        <div class="item2">
        </div>
        <div class="item3">
          <ul v-show="index == 3" @mouseover="index = 3" @mouseout="index = 0">
            <li>
              <a href="#">国家法律</a>
            </li>
            <li>
              <a href="#">学校规定</a>
            </li>
            <li>
              <a href="#">各类政策</a>
            </li>
          </ul>
        </div>
        <div class="item4">
          <ul v-show="index == 4" @mouseover="index = 4" @mouseout="index = 0">
            <li>
              <a href="#">防盗防诈骗</a>
            </li>
            <li>
              <a href="#">消防安全</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
          </ul>
        </div>
      <!-- <img src="../assets/home.jpg"> -->
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../assets/home.jpg">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main">
      <!-- <div class="main-block">
        <div class="title">
          <div class="label">最新发布</div>
          <div class="right">
            <img src="../assets/dots.jpg">
          </div>
        </div>
        <div class="subtitle">
          <div class="label">保卫处最新工作动态</div>
          <div class="right">
            <a href="#">
              <img src="../assets/more.jpg" style="height: 15px;width: 40px;">
            </a>
          </div>
        </div>
        <div class="body">
          <div class="left">
            <div class="block">
              <el-carousel height="300px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <img src="../assets/home.jpg" style="height: 300px">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="content">
            <ul>
              <li>
                <img src="../assets/arrow.jpg">
                <div class="content-title">
                  湖南中医药大学2017年消防安全培训议程
                </div>
                <div class="content-time">
                  2017-06-15
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
      <div class="main-block">
        <div class="title">
          <div class="label">通知公告</div>
          <div class="right">
            <img src="../assets/dots.jpg">
          </div>
        </div>
        <div class="subtitle">
          <div class="label">保卫处最新通知</div>
          <div class="right">
            <a href="#">
              <img src="../assets/more.jpg" style="height: 15px;width: 40px;">
            </a>
          </div>
        </div>
        <div class="body">
          <div class="content" style="padding-left:0px;width:50%">
            <ul>
              <li v-for="item in this.listLeft" v-bind:key="item">
                <img src="../assets/arrow.jpg">
                <div class="content-title" v-text="item.title">
                </div>
                <div class="content-time" v-text="item.update_time">
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <ul>
              <li v-for="item in this.listRight" v-bind:key="item">
                <img src="../assets/arrow.jpg">
                <div class="content-title" v-text="item.title">
                </div>
                <div class="content-time" v-text="item.update_time">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-block">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in blockBannerList" :key="item">
            <img :src="item.subimg" height="400px">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="main-block">
        <el-card class="box-card">
          <div class="card-title">
            <img class="point" src="../assets/point.png">
            <div class="name">政法工作</div>
            <img class="more" src="../assets/more.jpg">
          </div>
          <div>
            <ul>
              <ol v-for="item in this.blockObj[1]" v-bind:key="item">
                <a href="#" v-text="item.title"></a>
              </ol>
            </ul>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-left:4%;margin-right:5%">
          <div class="card-title">
            <img class="point" src="../assets/point.png">
            <div class="name">安全知识</div>
            <img class="more" src="../assets/more.jpg">
          </div>
          <div>
            <ul>
              <ol v-for="item in this.blockObj[2]" v-bind:key="item">
                <a href="#" v-text="item.title"></a>
              </ol>
            </ul>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="card-title">
            <img class="point" src="../assets/point.png">
            <div class="name">武装部工作</div>
            <img class="more" src="../assets/more.jpg">
          </div>
          <div>
            <ul>
              <ol v-for="item in this.blockObj[3]" v-bind:key="item">
                <a href="#" v-text="item.title"></a>
              </ol>
            </ul>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="card-title">
            <img class="point" src="../assets/point.png">
            <div class="name">东塘保卫科</div>
            <img class="more" src="../assets/more.jpg">
          </div>
          <div>
            <ul>
              <ol v-for="item in this.blockObj[4]" v-bind:key="item">
                <a href="#" v-text="item.title"></a>
              </ol>
            </ul>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-left:4%;margin-right:5%">
          <div class="card-title">
            <img class="point" src="../assets/point.png">
            <div class="name">失物招领</div>
            <img class="more" src="../assets/more.jpg">
          </div>
          <div>
            <ul>
              <ol v-for="item in this.blockObj[5]" v-bind:key="item">
                <a href="#" v-text="item.title"></a>
              </ol>
            </ul>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="card-title">
            <img class="point" src="../assets/point.png">
            <div class="name">下载专区</div>
            <img class="more" src="../assets/more.jpg">
          </div>
          <div>
            <ul>
              <ol v-for="item in fileBlock" v-bind:key="item">
                <a :href="item.url" v-text="item.name"></a>
              </ol>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
    <div class="footer">
      <div class="images">
        <div class="head">
          <!-- <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg"> -->
          <div class="links">
            <div class="link"><a href="http://www.hnucm.edu.cn/" target="blanck">湖南中医药大学主站</a></div>
            <div class="link"><a href="https://www.gfbzb.gov.cn/" target="blanck">大学生预征网</a></div>
            <div class="link"><a href="https://www.gfbzb.gov.cn/ssts/query.action?ssdm=430000&item=GZDT" target="blanck">湖南省征兵网</a></div>
          </div>
            <div class="instruc">
            <div>版权所有：湖南中医药大学 保卫处 武装部</div>
            <div>地址：湖南省长沙市含浦科教园区</div>
            <div>邮编：410208</div>
            <div>湘ICP备05002960号</div>
          </div>
        </div>
        <div class="code">
          <img src="../assets/code.jpg" style="height:100px;width:100px;">
          <!-- <div class="code-name">湖南中医药大学安全卫士</div> -->
        </div>
      </div>
    </div>
    <div class="fixed-menu">
      <ul class="fx-ul">
          <li class="fx-shop">
              <a class="iconfont" href="#" target="_blank">
                <img src="../assets/message.png" style="height: 30px;width:30px;">
              </a>
              <div class="title">留言</div>
          </li>
          <li class="fx-top">.
              <a class="iconfont" href="#">
                <img src="../assets/top.png" style="height: 30px;width:30px">
              </a>
              <div class="title">回到顶部</div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getHome, getBlock, getFileBlock, listBlockBanner } from '@/api/home'

export default {
  name: 'Home',
  data () {
    return {
      index: 0,
      activeIndex: '1',
      activeIndex2: '1',
      listLeft: [],
      listRight: [],
      blockObj: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      },
      fileBlock: [],
      blockBannerList: []
    }
  },
  created () {
    this.getHome()
    this.getBlock()
    this.getFileBlock()
    this.listBlockBanner()
  },
  methods: {
    getHome () {
      this.listLoading = true
      getHome().then(response => {
        this.listLeft = []
        this.listRight = []
        let length = response.data.length
        for (let i = 0; i < length; i++) {
          if (i < 10) {
            this.listLeft.push(response.data[i])
          } else {
            this.listRight.push(response.data[i])
          }
        }
        this.listLoading = false
      })
    },
    getBlock () {
      this.listLoading = true
      getBlock().then(response => {
        this.blockObj = response.data
        this.listLoading = false
      })
    },
    getFileBlock () {
      this.listLoading = true
      getFileBlock().then(response => {
        this.fileBlock = response.data
        this.listLoading = false
      })
    },
    listBlockBanner () {
      this.listLoading = true
      listBlockBanner().then(response => {
        this.blockBannerList = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 200px;
  background: url(../assets/header-blue.png) repeat-x;
  z-index: 99;
}
.logo {
  margin: 0 auto;
  height: 100px;
  width: 83%;
}
.logo img {
  height: 120px;
}
ul {
    list-style:none; /* 去掉ul前面的符号 */
    margin: 0px; /* 与外界元素的距离为0 */
    padding: 0px; /* 与内部元素的距离为0 */
    width: auto; /* 宽度根据元素内容调整 */
}
.menu {
  font-size: 16px;
  clear: both;
  margin: 0 auto;
  height: 50px;
}
.menu .items {
  float: left;
  margin-left: 13%;
  height: 40px;
  margin-top: 50px;
}
.menu .other {
  float: right;
  text-align: center;
  line-height: 40px;
  display: block;
  margin-top: 55px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  padding: 0 20px;
  margin-right: 6%;
}
.items li {
  float: left;
  cursor: pointer;
}
.items a {
  width: 85px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  display: block;
  color: #fff;
  padding: 0 20px;
  font-size: 17px;
}
.items a:hover {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
}
.item {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
}
.item1 {
  position: absolute;
  float: left;
  width: 125px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  margin-left: 13%;
  color: #fff;
  font-size: 16px;
}
.item1 a {
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
  text-decoration:none;
}
.item1 li {
  padding: 4px 0px;
}
.item3 li {
  padding: 4px 0px;
}
.item4 li {
  padding: 4px 0px;
}
.item1 a:hover {
  padding-left: 30px;
  text-decoration:none;
}
.item3 a:hover {
  padding-left: 30px;
  text-decoration:none;
}
.item4 a:hover {
  padding-left: 30px;
  text-decoration:none;
}
.item3 {
  position: absolute;
  float: left;
  width: 125px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  color: #fff;
  font-size: 16px;
  margin-left: 30.45%;
}
.item3 a {
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
  text-decoration:none;
}
.item4 {
  position: absolute;
  float: left;
  width: 125px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  color: #fff;
  font-size: 16px;
  margin-left: 39.2%;
}
.item4 a {
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
  text-decoration:none;
}
.banner {
  clear: both;
  position: relative;
  z-index: 90;
  height: 400px;
  overflow: hidden
}
.banner img {
  width: 100%;
  height: 600px;
  margin-top: -180px;
}
.main {
  clear: both;
  margin: 0 auto;
  width: 83%;
  padding-bottom: 40px;
}
.main-block {
  padding-top: 40px;
  max-height: 500px;
  overflow: hidden;
}
.main-block .title {
  clear: both;
  line-height: 40px;
}
.main-block .subtitle {
  clear: both;
  line-height: 40px;
}
.main-block .title .label {
  font-size: 34px;
  float: left;
}
.main-block .title .right {
  float: right;
}
.main-block .subtitle .right {
  float: right;
}
.main-block .subtitle .label {
  color: #989393;
  font-size: 22px;
  float: left;
}
.body {
  clear: both;
}
.body .left{
  width: 50%;
  float: left;
}
.body .content{
  width: 47%;
  float: left;
  padding-left: 3%;
  font-size: 16px;
}
.content li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
}
.content img {
  float: left;
  padding-right: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.content .content-title {
  float: left
}
.content .content-time {
  float: right;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.box-card {
  float: left;
  width: 30%;
  height: 210px;
  margin-bottom: 50px;
}
.footer {
  width: 100%;
  overflow: hidden;
  background: url(../assets/header-blue.png) repeat-x;
  background-size:10px 400px;
  z-index: 99;
}
.footer .images {
  clear: both;
  margin: 0 auto;
  padding-left: 5%;
  padding-top: 20px;
}
.footer .images .head{
  float: left;
  width: 75%;
  overflow: hidden;
}
.footer .images .head img {
  border-radius:50%;
  height: 100px;
  width: 100px;
  padding: 20px 50px;
}
.code {
  width: 20%;
  float: right;
  padding-right: 1%;
  padding-top: 10px;
}
.code-name {
  color: #fff;
}
.links {
  clear: both;
  padding-top: 20px;
  padding-left: 3%;
}
.links a {
  float: left;
  color: #fff;
  padding: 0 20px;
  text-decoration:none;  /*鼠标放上去有下划线*/
}
.links a:hover{
 text-decoration:underline;  /*鼠标放上去有下划线*/
}
.instruc {
  clear: both;
  padding-top: 15px;
  padding-left: 3%;
}
.instruc div {
  float: left;
  color: #fff;
  padding: 0 20px;
}
.card-title .point {
  float: left;
}
.card-title .name {
  float: left;
  padding-left: 5%;
  font-size: 16px;
  font-weight: bold;
}
.card-title .more {
  float: right;
  height: 10px;
  width: 20px;
}
.box-card ul {
  clear: both;
  padding-top: 5px;
}
.box-card ul a {
  height: 25px;
  line-height: 25px;
  color: #1296db;
  text-decoration:none;  /*鼠标放上去有下划线*/
}
.box-card ul a:hover{
  text-decoration:underline;  /*鼠标放上去有下划线*/
}
* {
    margin:0;
    padding:0;
}
ul {
  list-style:none;
}
.fixed-menu {
    position:fixed;
    right:0px;
    top:50%;
    margin-top: 18%;
    width:60px;
    /* box-shadow:0px 0px 20px rgba(0,0,0,.3); */
    z-index:999;
}
.fx-ul li {
    position:relative;
    height:50px;
    line-height:50px;
    background-color: #ccc;
    border-bottom:1px solid #fff;
}
.fx-ul li a {
    position:absolute;
    left:0;
    top:0;
    z-index:2;
    color:#fff;
    display:block;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    -webkit-transition:all 0.6s;
    -ms-transition:all 0.6s;
    -moz-transition:all 0.6s;
    text-decoration:none;
    font-size:24px;
}
.title {
    position:absolute;
    left:0px;
    bottom:1px;
    color:#fff;
    width:80px;
    height:40px;
    line-height:40px;
    text-align:center;
    -webkit-transition:all 0.6s;
    -ms-transition:all 0.6s;
    -moz-transition:all 0.6s;
    background-color:#fff;
    box-shadow:0px 0px 10px rgba(0,0,0,.3);
    z-index:1;
    opacity:0;
}
.title:before {
    content:'';
    display:block;
    width:10px;
    height:10px;
    position:absolute;
    right:-5px;
    top:14px;
    background-color:#fff;
    transform:rotate(45deg);
}
.fx-ul li:hover .title {
    left:-88px;
    opacity:1;
}
.fx-ul li.fx-shop a {
    background-image:-webkit-linear-gradient(left,#f60,#ffb443);
    background-image:-moz-linear-gradient(left,#f60,#ffb443);
    background-image:-ms-linear-gradient(left,#f60,#ffb443);
}
.fx-ul li.fx-shop .title {
  background-color:#f60;
}
.fx-ul li.fx-shop .title:before {
  background-color:#f60;
}
.fx-ul li.fx-top a {
    background-image:-webkit-linear-gradient(left,#333,#666);
    background-image:-moz-linear-gradient(left,#333,#666);
    background-image:-ms-linear-gradient(left,#333,#666);
}
.fx-ul li.fx-top .title {
  background-color:#333;
}
.fx-ul li.fx-top .title:before {
  background-color:#333;
}
</style>
