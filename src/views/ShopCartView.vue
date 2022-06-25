<template>
  <div class="root">
    <div class="content">
      <div class="content_left">
        <h4 class="shopcart_title">购物车</h4>
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
              <div class="item_option">移至收藏 删除</div>
            </div>
            <div class="item_price">¥ 799</div>
          </div>
        </div>
      </div>
      <div class="content_right"></div>
    </div>
  </div>
</template>
<style>
.item_other {
  color: rgb(117, 117, 117);
}
.item_color {
  color: rgb(117, 117, 117);
}
.item_subtitle {
  color: rgb(117, 117, 117);
}
.item_title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
}
.right_content {
  flex-grow: 1;
}
.left_img {
  width: 180px;
  height: 180px;
  padding-right: 18px;
}
.shopcart_item {
  padding: 24px 8px;
  display: flex;
  border-bottom: 1px solid black;
}
.shopcart_list {
  margin-top: 30px;
}
.shopcart_title {
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
}
.content_right {
  width: 33.33333%;
}
.content_left {
  width: 66.66667%;
  padding: 0 8px;
}
.content {
  display: flex;
  margin: auto;
  max-width: 1100px;
  margin-top: 40px;
  height: 800px;
  background-color: rgb(251, 244, 244);
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
