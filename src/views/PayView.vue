<template>
  <div class="root">
    <h3 class="shopcart_title">购物车</h3>
    <div class="line-all-y"></div>
    <div class="content">
      <div class="content_left">
        <div class="shopcart_list">
          <div
            v-for="(item, index) in shopcart_list"
            :key="index"
            class="shopcart_item"
          >
            <div class="left_img">
              <img :src="item.productImage" style="width: 100%; height: 100%" />
            </div>
            <div class="right_content">
              <div class="item_title">
                {{ item.productName }}
              </div>
              <div class="item_subtitle">
                {{ item.subtitle }}
              </div>
              <div class="item_color">
                {{ item.color }}
              </div>
              <div class="item_other">尺码 41 | 数量 {{ item.num }}</div>
            </div>
            <div class="item_price">¥ {{ item.productPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_right">
      <div class="right_title">订单</div>
      <div class="right_describe">
        <div v-if="receive.name" class="receive_info">
          <div>收货人： {{ receive.name }}</div>
          <div>电话号码：{{ receive.phone }}</div>
          <div>收获地址：{{ receive.address }}</div>
          <el-button type="text" @click="dialogFormVisible = true">
            修改
          </el-button>
        </div>
        <el-button type="text" @click="dialogFormVisible = true" v-else>
          编辑您的收件信息
        </el-button>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="receive">
          <el-form-item label="收件人" :label-width="formLabelWidth">
            <el-input v-model="receive.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="receive.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="收件地址" :label-width="formLabelWidth">
            <el-input v-model="receive.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add_receive">确 定</el-button>
        </div>
      </el-dialog>
      <div class="right_item">
        <div class="item_left">小计</div>
        <div class="item_right">￥{{ totalprice }}.00</div>
      </div>
      <div class="right_item">
        <div class="item_left">预计运费和手续费</div>
        <div class="item_right">￥0.00</div>
      </div>
      <div class="line-y"></div>
      <div class="right_item">
        <div class="item_left">总计</div>
        <div class="item_right">￥{{ totalprice }}.00</div>
      </div>
      <div class="line-y"></div>
      <div class="button_group">
        <button class="shop_cart_btn" @click="pay">结算</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.receive_info {
  color: #444;
  font-size: small;
}
.item_option {
  margin-top: 55px;
  cursor: pointer;
  text-decoration: solid;
}
.shop_cart_btn {
  width: 90%;
  margin-left: 5%;
  height: 60px;
  border-radius: 50px;
  color: white;
  font-size: medium;
  background-color: #000;
}
.button_group {
  margin-top: 40px;
}
.line-all-y {
  width: 98%;
  height: 5px;
  margin-left: 1%;
  border-bottom: solid rgb(231, 231, 231) 2px;
}
.line-y {
  width: 94%;
  height: 10px;
  margin-left: 3%;
  border-bottom: solid rgb(231, 231, 231) 2px;
}
.item_right {
  width: 20%;
  text-align: right;
}
.item_left {
  width: 60%;
}
.right_item {
  line-height: 38px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 0 10px;
}
.right_describe {
  padding: 0 10px;
  /* height: 50px; */
}
.right_title {
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  font-weight: 500px;
  color: #333;
  padding: 0 10px;
}
.item_other {
  color: rgb(117, 117, 117);
  line-height: 1.5;
}
.item_color {
  color: rgb(117, 117, 117);
  line-height: 1.5;
}
.item_subtitle {
  color: rgb(117, 117, 117);
  line-height: 1.5;
}
.item_title {
  font-size: 17px;
  line-height: 24px;
  margin-block: 10px;
}
.right_content {
  flex-grow: 1;
}
.left_img {
  width: 200px;
  height: 200px;
  padding-right: 18px;
}
.shopcart_item {
  padding: 24px 8px;
  display: flex;
  border-bottom: 1px solid rgb(227, 227, 227);
}
.shopcart_list {
  margin-top: 30px;
}
.shopcart_title {
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 22px;
}
.content_right {
  width: 60%;
  margin-top: 50px;
  margin-bottom: 200px;
  margin-left: 20%;
  background-color: #fff;
}
::-webkit-scrollbar {
  display: none;
}
.content_left {
  width: 80%;
  margin-left: 10%;
  padding: 0 8px;
  overflow: scroll;
}
.content {
  display: flex;
  margin: auto;
  max-width: 1500px;
}
.root {
  margin-top: 100px;
}
</style>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "MeView",
  data: () => {
    return {
      has_good: false,
      totalprice: 0,
      formLabelWidth: "80px",
      dialogFormVisible: false,
      receive: {
        name: "",
        phone: "",
        address: "",
      },
      shopcart_list: [
        // {
        //   title: "Nike Dunk HI Retro",
        //   img: "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        //   subtitle: "男子运动鞋",
        //   color: "白色/珍珠白/孔雀绿",
        //   size: "40.5",
        //   count: 1,
        // },
      ],
    };
  },
  methods: {
    add_receive() {
      this.dialogFormVisible = false;
      console.log(this.receive);
    },
    pay() {
      var cart_str = "";
      var list = this.shopcart_list;
      for (let i = 0; i < list.length; i++) {
        cart_str +=
          list[i].productId +
          "##" +
          list[i].productPrice +
          "##" +
          list[i].num +
          "##";
      }
      if (cart_str.length != 0) {
        cart_str = cart_str.substr(0, cart_str.length - 2);
      }
      console.log(cart_str);
      axios({
        method: "post",
        url: "http://124.71.80.246/order/save",
        data: {
          userId: "c263d924-b19e-4dbb-9f49-159c9e392724",
          carts: cart_str,
          orderReceiverinfo: "华南师范大学南海校区",
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
        axios
          .get(
            "http://124.71.80.246/cart/clear?userId=" +
              "c263d924-b19e-4dbb-9f49-159c9e392724"
          )
          .then((res) => {
            console.log("clear cart: ", res.data);
          });
        console.log(res);
        this.$alert("创建成功", "创建订单", {
          confirmButtonText: "确定",
        }).then(() => {
          // location.reload();
          this.$router.go(-1);
        });
      });
    },
  },
  mounted() {
    axios
      .get("/api/cart/query?userId=c263d924-b19e-4dbb-9f49-159c9e392724")
      .then((res) => {
        console.log(res.data);
        this.shopcart_list = res.data.rows;
        let sum = 0;
        for (let i = 0; i < res.data.rows.length; i++) {
          sum += res.data.rows[i].num * res.data.rows[i].productPrice;
        }
        this.totalprice = sum;
        if (sum != 0) {
          this.has_good = true;
        } else {
          this.has_good = false;
        }
        console.log(this.shopcart_list);
      });
  },
};
</script>
