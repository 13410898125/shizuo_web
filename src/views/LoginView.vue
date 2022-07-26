<template>
  <div class="root">
    <div class="login_box">
      <div class="logo">
        <svg
          style="width: 80px; height: 80px"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Nike</title>
          <path
            d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"
          />
        </svg>
        <div class="login_title">登陆NIKE账号</div>
      </div>
      <div class="input_group">
        <div class="info_input">
          <el-input placeholder="邮箱" v-model="email">
            <template slot="prepend"></template>
          </el-input>
        </div>
        <div class="info_input">
          <el-input
            placeholder="请输入密码"
            v-model="passwd"
            show-password
          ></el-input>
        </div>
        <div class="forget_pwd_tip">忘记密码？</div>
      </div>
      <div class="btn_box">
        <button class="login_btn" @click="login">登陆</button>
      </div>
    </div>
  </div>
</template>
<style>
.login_btn {
  width: 100%;
  height: 40px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #000;
}
.btn_box {
  width: 300px;
  margin: auto;
  margin-top: 20px;
}
.forget_pwd_tip {
  font-size: small;
  text-align: right;
  color: gray;
  width: 300px;
  cursor: pointer;
  margin: auto;
  margin-top: 15px;
}

.info_input {
  margin: auto;
  margin-top: 20px;
  width: 300px;
}
.input_group {
  margin-top: 20px;
}
.login_title {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}
.logo {
  width: 100%;
  text-align: center;
}
.login_box {
  width: 500px;
  margin: auto;
  margin-top: 200px;
  /* background-color: #faa; */
  height: 500px;
}
.root {
  margin-top: 100px;
}
</style>
<script>
import qs from "qs";
import axios from "axios";
export default {
  name: "MeView",
  data: () => {
    return {
      email: " ",
      passwd: "",
    };
  },
  methods: {
    login() {
      axios({
        method: "post",
        url: "/api/user/login",
        data: {
          userName: this.email,
          userPassword: this.passwd,
        },
        transformRequest: [
          function (data) {
            // 将请求数据转换成功 formdata 接收格式
            return qs.stringify(data);
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => {
        console.log(res);
        this.$alert("登录成功", "消息提示", {
          confirmButtonText: "确定",
        });
      });
      // axios({
      //   method: "post",
      //   url: "/api/user/login",
      //   data: {
      //     userName: this.email,
      //     userPassword: this.passwd,
      //   },
      //   transformRequest: [
      //     function (data) {
      //       // 将请求数据转换成功 formdata 接收格式
      //       return stringify(data);
      //     },
      //   ],
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      // }).then((res) => {
      //   console.log(res.data);
      //   this.$alert("登录成功", "消息提示", {
      //     confirmButtonText: "确定",
      //   });
      // });
    },
  },
};
</script>
