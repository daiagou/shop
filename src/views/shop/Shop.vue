<template>

        <yd-scrolltab>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <yd-list theme="4">
                    <yd-list-item v-for="item, key in list" :key="key">
                        <img slot="img" :src="item.img">
                        <!--<span slot="title">{{item.title}}</span>-->
                        <yd-list-other slot="other" style=" touch-action: none;">
                            <div>
                                <p >{{item.title}}</p>
                                <span class="list-price"><em>¥</em>{{item.price}}</span>
                                <yd-spinner height="0.5rem" width="0.5rem" button-style="circle" min="0" :val="item.id" v-model="item.num" :callback="test"></yd-spinner>
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



            <div style="position: fixed;bottom: 0.3rem;left: 48%;width: 1rem;height: 1rem;z-index: 1">
                <yd-badge type="danger">3</yd-badge>
            </div>



        </yd-scrolltab>





</template>
<script>

    import $ from "jquery";

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

            }
        },
        methods:{
            test(id,num){
                console.log(id);
                console.log(num);
                if(num==0){
                    delete this.formData[id];
                }else{
                    this.formData[id]=num;
                }
                console.log(JSON.stringify(this.formData) );
                console.log($.isEmptyObject(this.formData) );
            }
        }
    }
</script>
