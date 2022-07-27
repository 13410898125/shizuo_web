<template>
  <div class="root">
    <div class="content">
      <h3 class="order_title">订单</h3>
      <!-- <div class="line-all-y"></div> -->
      <div
        class="order"
        v-for="(item, index) in order_list"
        :key="index"
        :data-productid="item.orderId"
      >
        <div style="display: flex">
          <div>订单ID: {{ item.orderId }}</div>
          <div style="margin-left: auto">时间: {{ item.orderTime }}</div>
        </div>

        <div style="width: 95%; margin-left: 5%">
          <div
            v-for="(item1, index1) in item.orderItems"
            :key="index1"
            style="
              display: flex;
              margin-top: 5px;
              margin-bottom: 10px;
              border-bottom: 1px solid #eee;
            "
          >
            <img
              :src="item1.productImage"
              style="width: 200px; height: 200px"
            />
            <div>
              <div
                style="
                  font-size: 24px;
                  font-weight: 500;
                  margin-top: 20px;
                  margin-left: 15px;
                "
              >
                {{ item1.productName }}
              </div>
            </div>
            <div
              style="
                margin-left: auto;
                margin-top: 20px;
                margin-right: 20px;
                text-align: right;
              "
            >
              <div>¥ {{ item1.productPrice }}</div>
              <div>x {{ item1.num }}</div>
            </div>
          </div>
        </div>
        <div style="display: flex">
          <el-button
            type="primary"
            round
            style="margin-left: auto"
            @click="pay(item)"
            >支付</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.order {
  border-top: solid 2px rgb(202, 202, 202);
  width: 90%;
  margin-left: 5%;
  margin-bottom: 30px;
}
.name {
  width: 10%;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.userid {
  width: 25%;
  overflow: scroll;
}
.state {
  width: 10%;
  overflow: scroll;
}
.receiverinfo {
  width: 20%;
  overflow: scroll;
}
.money {
  width: 10%;
  overflow: scroll;
}
.id {
  width: 25%;
  overflow: scroll;
}
.order_item {
  display: flex;
  align-content: center;
  text-align: center;
}
.order_title {
  font-size: 26px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  margin: 8px 0;
}
.content_description {
  margin-top: 40px;
  line-height: 1.75;
  padding: 0 5%;
  font-weight: 400;
}
.line-all-y {
  width: 100%;
  height: 5px;
  border-bottom: solid rgb(231, 231, 231) 2px;
}
.content_notice {
  margin-top: 30px;
  font-size: medium;
  color: #aaa;
  width: 100%;
  text-align: center;
}

.img_list_left {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
}
.content_box_right {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 15px;
  width: 456px;
  flex-shrink: 0;
  width: 100%;
  height: 1000px;
}
.content {
  width: 100%;
  margin: auto;
  flex-flow: row nowrap;
  max-width: 1440px;
  background-color: rgba(255, 255, 255, 0.667);
}
.root {
  width: 100%;
  height: 100%;
  margin-top: 100px;
}
</style>
<script>
import axios from "axios";
export default {
  name: "ProduceView",
  data: function () {
    return {
      order_list: [],
    };
  },
  methods: {
    getTime(t) {
      var date = new Date(t);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D = date.getDate() + " ";
      let h = date.getHours() + ":";
      let m = date.getMinutes() + ":";
      let s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    pay(e) {
      console.log(e);
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
    console.log(this.$store.state.productId);
    // let that = this;
    axios
      .get("http://124.71.80.246/order/query?page=1&rows=5&userId=4")
      .then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.rows.length; i++) {
          res.data.rows[i].orderTime = this.getTime(res.data.rows[i].orderTime);
          console.log(res.data.rows[i].orderTime);
        }
        this.order_list = res.data.rows;
      });
  },
};
</script>
