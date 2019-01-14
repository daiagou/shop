<template>
  <yd-layout>


    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>




    <yd-tabbar slot="tabbar" style="position:unset;">
      <yd-tabbar-item title="首页" link="shop"  v-bind:active="$router.currentRoute.name=='Shop' ">
        <yd-icon name="home" slot="icon" ></yd-icon>
      </yd-tabbar-item>

      <yd-tabbar-item title="购物车" link="shoppingCart" v-bind:active="$router.currentRoute.name=='ShoppingCart' ">
        <yd-badge type="danger">1</yd-badge>
        <yd-icon name="shopcart-outline" slot="icon">1212121</yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="me" v-bind:active="$router.currentRoute.name=='Me' ">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>





  </yd-layout>
</template>
<script>
    export default {

    }




</script>
