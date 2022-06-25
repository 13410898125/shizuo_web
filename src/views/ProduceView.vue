<template>
  <div class="root">
    <div class="content">
      <div class="img_list_left">
        <div class="produce_img" v-for="(item, index) in img_list" :key="index">
          <img :src="item" style="width: 100%" />
        </div>
      </div>
      <div class="content_box_right">
        <h1 class="produce_title">Nike Air Force 1 '07 LX</h1>
        <div class="produce_sub_title">男子起绒圆领上衣</div>
        <div class="produce_price">¥699</div>
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
            >
              {{ item.size }}
            </div>
          </div>
        </div>
        <div class="button_group">
          <button class="shop_cart_btn">加入购物车</button>
          <button class="star_btn">加入购物车</button>
        </div>
        <div class="content_notice">此产品不参与网站促销活动和折扣优惠活动</div>
        <p class="content_description">
          LeBron XIX EP
          男/女篮球鞋助你在关键时刻和面临压力时一往无前。鞋款兼备Max Air x Zoom
          Air缓震系统和稳固贴合性能，借助勒布朗这类强劲球员的强大能量，制胜球场，所向披靡。舒适内靴巧搭精巧覆面设计，结合穿行其间的鞋带，有效减少双足在鞋内打滑。鞋舌和鞋口搭配气囊，帮助减轻鞋身重量，保持脚踝舒适贴合，赋予球员稳固脚感和十足信心，全力以赴应对挑战。
        </p>
        <p class="content_description">
          价格说明（此说明仅当出现价格比较时有效)
          划线价格：划线的价格可能是商品的专柜价吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。未划线价格：未划线的价格是商品在本平台上的销售标价，具体的成交价格可能因顾客使用优惠券、礼品卡等情况发生变化，最终以订单结算页价格为准。
        </p>
      </div>
    </div>
  </div>
</template>
<style>
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
export default {
  name: "ProduceView",
  data: () => {
    return {
      size_list: [
        {
          size: "35.5",
          display: true,
        },
        {
          size: "36",
          display: true,
        },
        {
          size: "37",
          display: true,
        },
        {
          size: "37.5",
          display: true,
        },
        {
          size: "38",
          display: true,
        },
        {
          size: "35.5",
          display: true,
        },
        {
          size: "35.5",
          display: true,
        },
        {
          size: "38.5",
          display: true,
        },
        {
          size: "35.5",
          display: true,
        },
        {
          size: "38",
          display: false,
        },
        {
          size: "40",
          display: true,
        },
        {
          size: "41",
          display: true,
        },
        {
          size: "42.5",
          display: true,
        },
      ],
      img_list: [
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1e295165-92d8-4627-9b0c-a2a32e269fad/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2ba14ff-7c3a-4d5b-88f8-4dd940665ebe/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bbeb32e9-31ee-46c8-9723-4b22184312dc/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a83634dc-931d-47ac-9880-23c48338ff45/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1d4fd627-ac2b-46cd-abef-5152ab42ea0b/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1d4fd627-ac2b-46cd-abef-5152ab42ea0b/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/502b2efd-9104-4400-898d-2c5a1b400ecb/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/995c18d7-3da0-4bbb-b3ee-7f97065dc4d8/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
        "https://static.nike.com.cn/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9a109b8f-ed45-469d-9474-8ffc8949263a/air-force-1-07-60-%E7%A9%BA%E5%86%9B%E4%B8%80%E5%8F%B7%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-kPsXF3.png",
      ],
    };
  },
};
</script>
