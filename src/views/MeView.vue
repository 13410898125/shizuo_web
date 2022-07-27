<template>
  <div class="root">
    <!-- <h2 style="width: 100%; text-align: center; line-height: 30px">
      NIKE 秒杀
    </h2> -->
    <img
      style="width: 1400px; margin-left: 50px"
      @click="open"
      src="https://www.nikestore.com.cn/nike-pim/2022-07-20/OOTD%20Daddy%20shoe-PC_44e5d141-7c34-44f1-9f30-8b3d61779955.png"
    />
    <div style="text-align: center; font-size: larger; font-weight: bolder">
      抢购专区
    </div>
    <div class="good_list">
      <div v-for="(item, index) in flash_list" :key="index">
        <img
          :src="item.productImgurl"
          style="width: 100%; height: 300px; overflow-y: hidden"
        />
        <div>
          <div>{{ item.productName }}</div>
          <div>{{ item.productTag }}</div>
          <div style="display: flex">
            <div style="text-decoration: line-through">
              原价¥{{ item.productPrice }}
            </div>
            <div style="font-weight: bold; margin-left: 10px; color: #f00">
              秒杀价¥{{ item.salePrice }}
            </div>
          </div>

          <div style="font-size: small; color: #888; display: flex">
            <div>还剩{{ item.productStock }}</div>
            <div style="margin-left: auto">限抢{{ item.saleLimit }}</div>
          </div>
        </div>
        <button class="shop_cart_btn" @click="flash(item)">立即秒杀</button>
        <!-- <el-image
          :src="item.productImgurl"
          style="width: 100%; height: 300px"
          fit="cover"
        /> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.shop_cart_btn {
  width: 90%;
  margin-left: 5%;
  height: 40px;
  border-radius: 25px;
  color: white;
  font-size: medium;
  border: none;
  margin-top: 8px;
  background-color: rgb(217, 54, 54);
}
.good_item {
  width: 30%;
  height: 300px;
  background-color: #faa;
}
.good_list {
  margin-bottom: 100px;
  width: 96%;
  margin-left: 2%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.root {
  width: 1500px;
  margin: 100px auto;
}
</style>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "MeView",
  data() {
    return {
      flash_list: [],
    };
  },
  methods: {
    flash(e) {
      console.log(e);
      if (e == null) {
        return;
      }
      axios({
        method: "post",
        url: "http://124.71.80.246/flash/saleFlash",
        data: {
          userId: "c263d924-b19e-4dbb-9f49-159c9e392724",
          productId: e.productId,
          orderReceiveinfo: "华南师范大学",
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
        if (res.data.code == 203) {
          this.$alert("秒杀活动还未启动，请等待", "消息提示", {
            confirmButtonText: "确定",
          });
        } else if (res.data.code == 204) {
          this.$alert("已经秒杀成功了，不能重复秒杀", "消息提示", {
            confirmButtonText: "确定",
          });
        } else if (res.data.code == 205) {
          this.$alert("该商品的秒杀活动已经结束了,再看看其他商品吧", {
            confirmButtonText: "确定",
          });
        } else if (res.data.code == 206) {
          this.$alert("秒杀失败，再来一遍吧", {
            confirmButtonText: "确定",
          });
        } else {
          this.$alert("抢购成功", "消息提示", {
            confirmButtonText: "确定",
          });
        }
      });
    },
    open() {
      this.$prompt("请输入支付密码", "提示", {
        confirmButtonText: "确认支付",
        cancelButtonText: "取消",
        inputType: "password",
        center: true,
        roundButton: true,
        inputErrorMessage: "支付密码不正确",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "支付成功: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "支付失败",
          });
        });
    },
  },
  mounted() {
    axios.get("http://124.71.80.246/flash/query?page=1&rows=5").then((res) => {
      console.log(res.data);
      this.flash_list = res.data.rows;
    });
  },
};
</script>
