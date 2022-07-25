<template>
  <div class="root">
    <h2 style="width: 100%; text-align: center; line-height: 30px">
      NIKE 秒杀
    </h2>
    <img
      style="width: 1400px; margin-left: 50px"
      @click="open"
      src="https://www.nikestore.com.cn/nike-pim/2022-07-20/OOTD%20Daddy%20shoe-PC_44e5d141-7c34-44f1-9f30-8b3d61779955.png"
    />
    <div class="good_list">
      <div class="good_item"></div>
      <div class="good_item"></div>
      <div class="good_item"></div>
      <div class="good_item"></div>
    </div>
  </div>
</template>
<style>
.good_item {
  width: 20%;
  height: 300px;
  background-color: #faa;
}
.good_list {
  width: 96%;
  margin-left: 2%;
  margin-top: 30px;
  display: flex;
  height: 300px;
  justify-content: space-around;
}
.root {
  width: 1500px;
  margin: 100px auto;
}
</style>
<script>
export default {
  name: "MeView",
  methods: {
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
};
</script>
