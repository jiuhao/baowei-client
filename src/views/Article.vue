<template>
  <div>
    <div class="header">
      <div class="logo">
        <a>
          <img src="../assets/logo.png">
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
    </div>
    <div class="main">
    </div>
    <div class="footer">
      <div class="images">
        <div class="head">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <img src="../assets/code.jpg">
          <div class="links">
            <div class="link"><a href="www.baidu.com">湖南中医药大学主站</a></div>
            <div class="link"><a href="//www.baidu.com">大学生预征网</a></div>
            <div class="link"><a href="www.baidu.com">湖南省征兵网</a></div>
            <div class="link"><a href="www.baidu.com">百度</a></div>
          </div>
            <div class="instruc">
            <div>版权所有：湖南中医药大学 保卫处 武装部</div>
            <div>地址：湖南省长沙市含浦科教园区</div>
            <div>邮编：410208</div>
            <div>湘ICP备05002960号</div>
          </div>
        </div>
        <div class="code">
          <img src="../assets/code.jpg" style="height:150px;width:150px;">
          <div class="code-name">湖南中医药大学安全卫士</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      index: 0,
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 150px;
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
  margin-top: 5px;
}
.menu .other {
  float: right;
  text-align: center;
  line-height: 40px;
  display: block;
  margin-top: 10px;
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
  height: 45px;
  line-height: 45px;
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
.footer {
  width: 100%;
  height: 250px;
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
  padding-top: 20px;
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
</style>
