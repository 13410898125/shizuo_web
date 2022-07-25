<template>
  <div class="root">
    <div class="content">
      <h3 class="order_title">订单</h3>
      <!-- <div class="line-all-y"></div> -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column>
          <img
            style="width: 100px; height: 100px"
            src="https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png"
          />
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {},
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
