<template>
  <div id="app" class="root">
    <div class="top_bar">
      <svg
        style="width: 35px; height: 35px; margin-left: 20px; margin-top: 3px"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Alfa Romeo</title>
        <path
          d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"
        />
      </svg>
      <svg
        style="width: 35px; height: 35px; margin-left: 20px; margin-top: 3px"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Air France</title>
        <!-- <path
          d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"
        /> -->
      </svg>
      <img
        src="https://img2.woyaogexing.com/2022/07/23/5e31ec180d994553!400x400.jpg"
        style="width: 35px; height: 35px; border-radius: 5px"
      />
      <div class="top_bar_right">
        <router-link to="/login">登录</router-link>|
        <router-link to="/register">注册</router-link>
      </div>
    </div>
    <div class="nav_bar">
      <svg
        style="width: 40px; height: 40px; margin-left: 20px; margin-top: 5px"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Nike</title>
        <!-- <path
          d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"
        /> -->
      </svg>
      <div class="router_box">
        <router-link class="router_item" to="/">首页</router-link>
        <router-link class="router_item" to="/shopcart">购物车</router-link>
        <router-link class="router_item" to="/order">订单</router-link>
        <router-link class="router_item" to="/me">限时秒杀</router-link>
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>
    
  </div>
</template>
<style>
.router_item {
  width: 200px;
  margin: 10px 25px;
  text-decoration: none;
  font-size: large;
  font-weight: bold;
  color: #111;
}
.router_box {
  width: 50%;
  margin: auto 100px;
}
.nav_bar {
  z-index: 999;
  display: flex;
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
}
.top_bar_right {
  margin-left: auto;
  margin-right: 30px;
  text-align: center;
  line-height: 40px;
}
.top_bar {
  position: fixed;
  top: 0;
  left: 0;
  background: #f5f5f5;
  color: #111;
  height: 40px;
  width: 100%;
  display: flex;
  z-index: 999;
}
.root {
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
