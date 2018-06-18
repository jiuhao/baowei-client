<template>
  <div>
    <div class="header">
      <div class="logo">
        <a href="#/">
          <img src="../assets/logo.png" style="width:700px;height:150px;">
        </a>
        <a href="http://www.hnucm.edu.cn/" target="blanck" style="position:absolute;top:100px;right:100px;color:#fff;font-size:16px">
        湖南中医药大学主站
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
        <div class="item5">
          <ul v-show="index == 5" @mouseover="index = 5" @mouseout="index = 0">
            <li>
              <a href="#">学生军训</a>
            </li>
            <li>
              <a href="#">大学生征兵</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="main">
      <ul style="padding:20px 0px">
          <li class="list-item" v-for="item in fileList" v-bind:key="item" style="clear:both;padding:10px 0px">
              <a :href="item.url">
                <div style="float:left:color:#000" v-text="item.name"></div>
                <div v-text="item.create_time" style="float:right;color:#000"></div>
              </a>
          </li>
      </ul>
      <div v-show="!listLoading" class="pagination-container" align="center">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page.sync="page"
                        :page-sizes="[10, 20, 30, 50]" :page-size="size"
                        layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="footer">
      <div class="images">
        <div class="head">
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
              <a class="iconfont" @click="dialogVisible = true">
                <img src="../assets/message.png" style="height: 25px;width:25px;">
              </a>
              <div class="title">留言</div>
          </li>
          <li class="fx-top">.
              <a class="iconfont" href="#">
                <img src="../assets/top.png" style="height: 25px;width:25px">
              </a>
              <div class="title">回到顶部</div>
          </li>
      </ul>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitMessage">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { listFile, submitMessage } from '@/api/home'

export default {
  name: 'FileList',
  data () {
    return {
      index: 0,
      activeIndex: '1',
      activeIndex2: '1',
      dialogVisible: false,
      fileList: [],
      page: 1,
      size: 20,
      total: 0,
      form: {
        message: '填写留言'
      }
    }
  },
  created () {
    this.listFile()
  },
  methods: {
    listFile () {
      this.listLoading = true
      const param = {
        page: this.page,
        size: this.size
      }
      listFile(param).then(response => {
        this.fileList = response.data.list
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleSizeChange (val) {
      this.size = val
      this.listFile()
    },
    handleCurrentChange (val) {
      this.page = val
      this.listFile()
    },
    submitMessage () {
      this.dialogVisible = false
      submitMessage({
        content: this.form.message
      }).then(response => {

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
.item5 li {
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
.item5 a:hover {
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
.item5 {
  position: absolute;
  float: left;
  width: 125px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  color: #fff;
  font-size: 16px;
  margin-left: 47.9%;
}
.item5 a {
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
  text-decoration:none;
}

.main {
  clear: both;
  margin: 0 auto;
  width: 83%;
  min-height: 800px;
  padding-bottom: 40px;
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
    margin-top: 17%;
    width:60px;
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
.iconfont {
  cursor: pointer;
}
</style>
