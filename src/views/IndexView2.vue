<template>
  <div class="root">
   
    <div class="notion_bar">
      <div class="notion_text">
        我们是高级软件实作小组，我们的作品前端采用vue框架，不兼容IE（用那玩意的程序员就是自暴自弃）
        拒绝996，宁躺勿卷！！！
      </div>
    </div>
    <div class="title_condition_bar">
      <div class="catalog_list">
        
      </div>
      
    </div>
    
  <div id="swiper">
    <div class="swiper">
      <div class="swiper-content">
        <div class="swiper-item" :style="{'transform':'translateX('+translate+'px)','transistion':tsion?'all 0.5s':'none'}">
          <img src="../assets/swiper/4.jpg" alt="">
          <img v-for='(item,index) in swiperImgSrc' :src="item" alt="" >
          <img src="../assets/swiper/1.jpg" alt="">
        </div>
      </div>
      <div  class="arrowhead-box" ref="swiper">
        <span @click="last"></span>
        <span @click="next"></span>
      </div>
      <div class="swiper-box" ref="swiper">
        <span v-for="(item,index) in swiperImgSrc"></span>

      </div>
    </div>
  </div>
  
    
    
  </div>

  
</template>
<style scoped>

span{
  margin: 0;
  padding: 0;
}

.swiper{
  height: 600px;
  width:1200px;
  background-color: #999;
  margin: 10px auto;
  box-shadow: 0 0 3pc rgba(0, 0, 0, 4);

}

.swiper-content{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.swiper-item{
  display: flex;
  height: 100%;
  width: 100%;
  transition: all 0.5s;
}

.swiper-item img{
  float: left;
  min-width: 1200px;
  min-height: 600px;
}

.arrowhead-box{
  position: absolute;
  float: left;
  width: 100%;
  height: 50px;
}

.arrowhead-box span{
  float: left;
  display: block;
  width: 60px;
  height: 60px;
  border-radius:50px ;
  /* background: url('../assets/swiper/last.png') no-repeat; */
  background-position: 6px 14px;
  cursor: pointer;
  opacity: 0.5;
}
.arrowhead-box span:nth-child(2){
  float: right;
  transform: rotate(180deg);
}

.arrowhead-box span:hover{
  opacity: 1;

}

.swiper-box{
  position: relative;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-box span{
  float: left;
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.5s;
}

.swiper-box span:nth-child(1){
  width: 100px;
}

.input_search {
  height: 30px;
  width: 200px;
  border-radius: 20px;
  box-shadow: 0;
  border: 0;
  margin-top: 9px;
  padding-left: 25px;
}
.search_right {
  width: 20%;
  padding-left: 30px;
}
.catalog_item {
  width: 100px;
  color: white;
  font-size: large;
  font-weight: 400;
  line-height: 50px;
}
.catalog_list {
  display: flex;
  width: 65%;
  margin-left: 10%;
}
.notion_text {
  width: 45%;
  height: 50px;
  margin: 20px auto;
  font-size: large;
  font-weight: 400;
  padding-top: 20px;
  line-height: 30px;
}

.produce_price {
  font-weight: 600;
  font-size: 20px;
  margin-left: 2px;
  line-height: 40px;
}
.produce_sub_title {
  padding-left: 2px;
  color: rgb(117, 117, 117);
  font-size: 16px;
}
.produce_title {
  padding-left: 2px;
  color: rgb(17, 17, 17);
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
}
.produce_content {
  width: 100%;
  padding-top: 10px;
}
.produce_img {
  width: 100%;
  /* width: 430px; */
  height: 474px;
}
.produce {
  width: 94%;
  margin-left: 3%;
  margin-top: 20px;
  height: 100%;
  /* background-color: #ffa; */
}
.produce_box {
  width: 33.3%;
  background-color: #fff;
}
.produce_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.content_right {
  width: 80%;
  padding: 0 30px;
  margin: 20px auto;
}

.content_box {
  width: 100%;
  display: flex;
  background-color: white;
}
.title_condition_bar {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: grey;
  position: sticky;
  top: 100px;
  z-index: 999;
}
.notion_bar {
  margin-top: 100px;
  width: 100%;
  height: 100px;
  box-shadow: rgb(229, 229, 229) 0px -1px 0px 0px inset;
  background: rgb(247, 247, 247) none repeat scroll 0% 0%;
}
.root {
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<script>
import MeViewVue from "./MeView.vue";

component:{
  MeViewVue;
}
const axios = require("axios");
export default {
  name: "IndexView",
  
  data: () => {
    return {
      swiperImgSrc:[require('../assets/swiper/1.jpg'),
        require('../assets/swiper/2.jpg'),
        require('../assets/swiper/3.jpg'),
        require('../assets/swiper/4.jpg'),],
      translateX:0,
      tsion:true,
      
      
      

    };
    
  },
  
  methods: {
    to_detail(item) {
      console.log(item.productId);
      this.$store.state.productId = item.productId;
      this.$router.push({
        path: "/produce",
      });
    },
    
    last(){
        this.translateX--;
        this.tsion=true;
        if(this.translateX<0){
          setTimeout(() => {
            this.tsion=false;
            this.translateX=this.swiperImgSrc.length-1;

          }, timeout);
        }
      },
      next(){
        this.translateX++;
        this.tsion=true;
        if(this.translateX>this.swiperImgSrc.length-1){
          setTimeout(() => {
            this.tsion=false;
            this.translateX=0;
            
          }, 3000);
        }
      },
      swiper(i){
        this.translateX=i;
      }, 
      

  },
  computed:{
        translate(){
          return -(this.translateX+1)*1200;
        }
      },
  watch:{
        translateX:{
          handler(val){
            let a=this.$refs.swiper.querySelectorAll('span');
            a.forEach(element => {
              element.style.width='12px';
            });
            if(this.translateX<0){
              val=this.swiperImgSrc.length-1;
            }
            if(this.translateX>this.swiperImgSrc.length-1){
              val=0;
            }
            a[val].style.width='100px'
          }
        }
      },
  mounted() {
    setInterval(()=>{
          this.next();
        },3000);
    let that = this;
   
  },
};
</script>
