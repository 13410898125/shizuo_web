<template>
  <div class="root">
    <div class="content">
      <div class="img_list_left">
        <div class="produce_img" v-for="(item, index) in img_list" :key="index">
          <img :src="item" style="width: 100%" />
        </div>
      </div>
      <div class="content_box_right">
        <h1 class="produce_title">{{ product.productName }}</h1>
        <div class="produce_sub_title">{{ product.productTag }}</div>
        <div class="produce_price">¥{{ product.productPrice }}</div>
        <div class="size_box">
          <div class="size_title">
            <div>选择尺码</div>
            <div style="margin-left: auto; margin-right: 25px; color: #757575">
              尺码表
            </div>
          </div>
          <div class="size_list">
            <div
              class="size_item"
              v-for="(item, index) in size_list"
              :key="index"
              :class="{ size_item_click: selectItemVal == item.size }"
              @click="change_select(item.size)"
            >
              {{ item.size }}
            </div>
          </div>
        </div>
        <div class="button_group">
          <button class="shop_cart_btn" @click="addcart">加入购物车</button>
          <button class="star_btn" @click="goto_cart">去购物车查看</button>
        </div>
        <div class="content_notice">此产品不参与网站促销活动和折扣优惠活动</div>
        <p class="content_description">
          {{ product.productDescription }}
        </p>
        <p class="content_description">
          价格说明（此说明仅当出现价格比较时有效)
          划线价格：划线的价格可能是商品的专柜价吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。未划线价格：未划线的价格是商品在本平台上的销售标价，具体的成交价格可能因顾客使用优惠券、礼品卡等情况发生变化，最终以订单结算页价格为准。
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content_description {
  margin-top: 40px;
  line-height: 1.75;
  padding: 0 5%;
  font-weight: 400;
}
.content_notice {
  margin-top: 30px;
  font-size: medium;
  color: #aaa;
  width: 100%;
  text-align: center;
}
.star_btn {
  margin-top: 20px;
  width: 100%;
  height: 60px;
  border-radius: 50px;
  font-size: large;
  border: 1px solid grey;
  background-color: white;
}
.shop_cart_btn {
  width: 100%;
  height: 60px;
  border-radius: 50px;
  color: white;
  font-size: large;
  font-weight: bold;
  background-color: #000;
}
.button_group {
  margin-top: 40px;
}
.size_item_click {
  background-color: gray;
  color: white;
  font-weight: bold;
}
.size_item {
  width: calc((100% - 50px) / 5);
  height: 50px;
  border: 1px solid #e1e1e1e1;
  border-radius: 5px;
  margin-right: 5px;
  text-align: center;
  line-height: 50px;
  margin-top: 10px;
}
.size_item:hover {
  border: 1px solid black;
}
.size_item:nth-child(5n) {
  margin-right: 0;
}
.size_list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.size_title {
  display: flex;
  width: 100%;
}
.size_box {
  margin-top: 24px;
  width: 100%;
}
.produce_price {
  line-height: 50px;
  font-weight: 500;
}
.produce_sub_title {
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
}
.produce_title {
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.007em;
  font-size: 28px;
}
.produce_img {
  width: calc((100% - 20px) / 2);
  margin-top: 10px;
  background-color: #fff;
}
.produce_img:nth-child(2n) {
  margin-left: 20px;
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
  height: 1000px;
  /* background-color: rgb(251, 248, 248); */
}
.content {
  width: 100%;
  margin: auto;
  display: flex;
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
import qs from "qs";
import axios from "axios";
export default {
  name: "ProduceView",
  data: function () {
    return {
      product: {},
      size_list: [
        {
          size: "37.5",
          display: true,
        },
        {
          size: "38",
          display: true,
        },
        {
          size: "38.5",
          display: true,
        },
        {
          size: "39",
          display: true,
        },
        {
          size: "39.5",
          display: true,
        },
        {
          size: "40",
          display: true,
        },
        {
          size: "40.5",
          display: false,
        },
        {
          size: "41",
          display: true,
        },
        {
          size: "42",
          display: true,
        },
        {
          size: "42.5",
          display: true,
        },
      ],
      img_list: [],
      selectItemVal: 40,
    };
  },
  methods: {
    change_select(e) {
      this.selectItemVal = e;
    },
    addcart() {
      console.log(this.product);
      axios({
        method: "post",
        url: "/api/cart/save",
        data: {
          userId: "c263d924-b19e-4dbb-9f49-159c9e392724",
          productId: this.product.productId,
          num: "3",
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
        this.$alert("添加成功", "消息提示", {
          confirmButtonText: "确定",
        });
      });
    },
    goto_cart() {
      this.$router.push("/shopcart");
    },
  },
  mounted() {
    console.log(this.$store.state.productId);
    let that = this;
    axios
      .get("http://124.71.80.246/product/item/" + this.$store.state.productId)
      .then((res) => {
        console.log(res.data);
        that.product = res.data;
        let imgs = res.data.productImgurl;
        console.log(imgs);
        that.img_list = imgs.split("##");
      });
  },
};
</script>
