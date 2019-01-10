<template>
  <yd-layout>


    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>




    <yd-tabbar slot="tabbar">


      <yd-tabbar-item title="首页" link="shop"  v-bind:active="$router.currentRoute.name=='Shop' ">
        <yd-icon name="home" slot="icon"  @click="itemClick('test')"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="shoppingCart" v-bind:active="$router.currentRoute.name=='ShoppingCart' ">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="me" v-bind:active="$router.currentRoute.name=='Me' ">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>

  </yd-layout>
</template>
<script>
    export default {

        methods:{
            itemClick(url){
                console.log(url);
            },

        }
    }




</script>
