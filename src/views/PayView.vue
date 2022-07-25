<template>
  <div class="root">
    <div class="content">
      <div class="content_left">
        <h3 class="shopcart_title">购物车</h3>
        <div class="line-all-y"></div>
        <div class="shopcart_list">
          <div
            v-for="(item, index) in shopcart_list"
            :key="index"
            class="shopcart_item"
          >
            <div class="left_img">
              <img :src="item.img" style="width: 100%; height: 100%" />
            </div>
            <div class="right_content">
              <div class="item_title">
                {{ item.title }}
              </div>
              <div class="item_subtitle">
                {{ item.subtitle }}
              </div>
              <div class="item_color">
                {{ item.color }}
              </div>
              <div class="item_other">
                尺码 {{ item.size }} 数量 {{ item.count }}
              </div>
              <div class="item_option">删除</div>
            </div>
            <div class="item_price">¥ 799</div>
          </div>
        </div>
      </div>
      <div class="content_right">
        <div class="right_title">摘要</div>
        <div class="right_describe">您有促销代码吗？</div>
        <div class="right_item">
          <div class="item_left">小计</div>
          <div class="item_right">￥749.00</div>
        </div>
        <div class="right_item">
          <div class="item_left">预计运费和手续费</div>
          <div class="item_right">￥0.00</div>
        </div>
        <div class="line-y"></div>
        <div class="right_item">
          <div class="item_left">总计</div>
          <div class="item_right">￥749.00</div>
        </div>
        <div class="line-y"></div>
        <div class="button_group">
          <button class="shop_cart_btn">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.item_option {
  margin-top: 50px;
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
  height: 50px;
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
  width: 33.33333%;
  background-color: #fff;
}
.content_left {
  width: 66.66667%;
  padding: 0 8px;
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
export default {
  name: "MeView",
  data: () => {
    return {
      shopcart_list: [
        {
          title: "Nike Dunk HI Retro",
          img: "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
          subtitle: "男子运动鞋",
          color: "白色/珍珠白/孔雀绿",
          size: "40.5",
          count: 1,
        },
        {
          title: "Nike Dunk HI Retro",
          img: "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
          subtitle: "男子运动鞋",
          color: "白色/珍珠白/孔雀绿",
          size: "40.5",
          count: 1,
        },
        {
          title: "Nike Dunk HI Retro",
          img: "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
          subtitle: "男子运动鞋",
          color: "白色/珍珠白/孔雀绿",
          size: "40.5",
          count: 1,
        },
        {
          title: "Nike Dunk HI Retro",
          img: "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
          subtitle: "男子运动鞋",
          color: "白色/珍珠白/孔雀绿",
          size: "40.5",
          count: 1,
        },
        {
          title: "Nike Dunk HI Retro",
          img: "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
          subtitle: "男子运动鞋",
          color: "白色/珍珠白/孔雀绿",
          size: "40.5",
          count: 1,
        },
      ],
    };
  },
};
</script>
