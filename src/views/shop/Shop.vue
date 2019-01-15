<template>

        <yd-scrolltab>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <yd-list theme="4">
                    <yd-list-item v-for="item, key in list" :key="key">
                        <img slot="img" :src="item.img">
                        <!--<span slot="title">{{item.title}}</span>-->
                        <yd-list-other slot="other" style=" touch-action: none;" >
                            <div style="text-align: center;width: 100%" >
                                <p >{{item.title}}</p>
                                <p class="list-price"><em>¥</em>{{item.price}}</p>
                                <yd-spinner height="0.5rem" width="0.5rem" button-style="circle" min="0" :val="item.id" v-model="item.num" :callback="test" @click="animation"></yd-spinner>
                            </div>
                        </yd-list-other>
                        <div></div>
                    </yd-list-item>
                </yd-list>
            </yd-scrolltab-panel>

            <yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
                <yd-list theme="4">
                    <yd-list-item v-for="item, key in list" :key="key">
                        <img slot="img" :src="item.img">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price"><em>¥</em>{{item.price}}</span>
                                <span class="list-del-price">¥{{item.w_price}}</span>
                            </div>
                            <div>content</div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
            </yd-scrolltab-panel>

            <yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
                <yd-list theme="4">
                    <yd-list-item v-for="item, key in list" :key="key">
                        <img slot="img" :src="item.img">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price"><em>¥</em>{{item.price}}</span>
                                <span class="list-del-price">¥{{item.w_price}}</span>
                            </div>
                            <div>content</div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
            </yd-scrolltab-panel>

            <!-- ... -->



            <div  style="position: fixed;bottom: 0.3rem;left: 49%;width: 1rem;height: 1rem;z-index: 1" @click="$router.push('shoppingCart')">
                <yd-badge id="badge" type="danger">3</yd-badge>
            </div>



        </yd-scrolltab>





</template>
<script>

    // let $ = require('jquery')
    // window.$ = $


    import $ from '../../common/js/jquery-vendor';
    import jqueryFly from '../../common/js/jquery.fly.min';

    export default {
        data() {
            return {
                list: [
                    {id:1,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题", price: 156.23, w_price: 89.36,num:0},
                    {id:2,img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题", price: 256.23, w_price: 89.36,num:1},
                    {id:3,img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题", price: 356.23, w_price: 89.36,num:2},
                    {id:4,img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题", price: 456.23, w_price: 89.36,num:3},
                    {id:5,img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题", price: 556.23, w_price: 89.36,num:0},
                    {id:6,img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题", price: 656.23, w_price: 89.36,num:0}
                ],
                spinner7:0,

                formData:{},

                x:0,
                y:0,

            }
        },
        methods:{

            pagex(e){
              console.log("e:"+e);
            },


            test(id,num){
                if(num==0){
                    delete this.formData[id];
                }else{
                    this.formData[id]=num;
                }
                this.animation();
            },
            animation(){
                if(!event){
                    return;//点击多了会有问题
                }
                let thisItem = $(event.currentTarget);
                let flyer = thisItem.clone().css({"background":"red", "width": "20px", "height": "20px","border-radius": "20px"});
                let offset = $('#badge').offset();
                flyer.fly({
                    start: {
                        // left: 250,  //开始位置（必填）#fly元素会被设置成position: fixed
                        // top: 200,  //开始位置（必填）
                        left:event.targetTouches[0].clientX,  //开始位置（必填）#fly元素会被设置成position: fixed
                        top:event.targetTouches[0].clientY,  //开始位置（必填）
                    },
                    end: {
                        // left: 200, //结束位置（必填）
                        // top: 580,  //结束位置（必填）
                        left: offset.left ,
                        top: offset.top ,
                        // width: 100, //结束时高度
                        // height: 100, //结束时高度
                        // bottom: 1,
                    },
                    autoPlay: true, //是否直接运动,默认true
                    speed: 1.1, //越大越快，默认1.2
                    vertex_Rtop: 100, //运动轨迹最高点top值，默认20
                    onEnd: function () {
                        flyer.remove();
                    } //结束回调
                });
            }

        }
    }
</script>
