<template>

        <yd-scrolltab>
            <yd-scrolltab-panel :label="key" icon="demo-icons-category1"  v-for="(value, key) in listData">
                <yd-list theme="4">
                    <yd-list-item v-for="item, key1 in value">
                        <img slot="img" :src="item.picUrl" @click="showDetailDialog(item)">
                        <!--<span slot="title">{{item.title}}</span>-->
                        <yd-list-other slot="other" style=" touch-action: none;" >
                            <div style="text-align: center;width: 100%" >
                                <p >{{item.goodsName}}</p>
                                <p class="list-price"><em>¥</em>{{item.price}}</p>
                                <yd-spinner height="0.5rem" width="0.5rem" button-style="circle" min="0" :val="item.id" v-model="item.goodsCount" :callback="goodsCountChange" ></yd-spinner>
                            </div>
                        </yd-list-other>
                        <div></div>
                    </yd-list-item>
                </yd-list>
            </yd-scrolltab-panel>

            <!--<yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>-->
                <!--<yd-list theme="4">-->
                    <!--<yd-list-item v-for="item, key in list" :key="key">-->
                        <!--<img slot="img" :src="item.img">-->
                        <!--<span slot="title">{{item.title}}</span>-->
                        <!--<yd-list-other slot="other">-->
                            <!--<div>-->
                                <!--<span class="list-price"><em>¥</em>{{item.price}}</span>-->
                                <!--<span class="list-del-price">¥{{item.w_price}}</span>-->
                            <!--</div>-->
                            <!--<div>content</div>-->
                        <!--</yd-list-other>-->
                    <!--</yd-list-item>-->
                <!--</yd-list>-->
            <!--</yd-scrolltab-panel>-->

            <!--<yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">-->
                <!--<yd-list theme="4">-->
                    <!--<yd-list-item v-for="item, key in list" :key="key">-->
                        <!--<img slot="img" :src="item.img">-->
                        <!--<span slot="title">{{item.title}}</span>-->
                        <!--<yd-list-other slot="other">-->
                            <!--<div>-->
                                <!--<span class="list-price"><em>¥</em>{{item.price}}</span>-->
                                <!--<span class="list-del-price">¥{{item.w_price}}</span>-->
                            <!--</div>-->
                            <!--<div>content</div>-->
                        <!--</yd-list-other>-->
                    <!--</yd-list-item>-->
                <!--</yd-list>-->
            <!--</yd-scrolltab-panel>-->

            <!-- ... -->



            <div  style="position: fixed;bottom: 0.3rem;left: 49%;width: 1rem;height: 1rem;z-index: 1" @click="$router.push('shoppingCart')">
                <yd-badge id="badge" type="danger" >{{totalCount}}</yd-badge>
            </div>

            <!--<yd-lightbox :num="list.length">-->
                <!--<yd-lightbox-img v-for="item in list" :src="item.src" :original="item.original"></yd-lightbox-img>-->
                <!--<yd-lightbox-txt >-->
                    <!--<h1 slot="top" style="text-align: right">双瞳如小窗 佳景观历历</h1>-->
                    <!--<div slot="content" style="text-align: right">-->
                        <!--&lt;!&ndash;<p>相机：灵犀相通，妙不可言。</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p>设计：美不胜收，爱不释手。</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p>体验：强劲性能，持久动力。</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p>mCharge 4.0：上善若水，不止于快。</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p>mTouch：指尖轻点，安全随行。</p>&ndash;&gt;-->
                        <!--aaaaaa<br/>-->
                        <!--aaaaaa<br/>-->
                        <!--aaaaaa<br/>-->
                        <!--aaaaaa<br/>-->
                        <!--aaaaaa<br/>-->
                        <!--aaaaaa<br/>-->
                    <!--</div>-->
                <!--</yd-lightbox-txt>-->
            <!--</yd-lightbox>-->







            <!--详细图片对话框-->
            <yd-popup v-model="detailDialogShow" position="center" width="90%" height="80%">
                <yd-slider autoplay="3000" @click.native="detailDialogShow=false">
                    <yd-slider-item v-if="dialogData.detailPicUrl1">
                        <a @click="detailDialogShow=false">
                            <img :src="dialogData.detailPicUrl1">
                        </a>
                    </yd-slider-item>
                    <yd-slider-item v-if="dialogData.detailPicUrl2">
                        <a @click="detailDialogShow=false">
                            <img :src="dialogData.detailPicUrl2">
                        </a>
                    </yd-slider-item>
                    <yd-slider-item v-if="dialogData.detailPicUrl3">
                        <a @click="detailDialogShow=false">
                            <img :src="dialogData.detailPicUrl3">
                        </a>
                    </yd-slider-item>
                    <yd-slider-item v-if="dialogData.detailPicUrl4">
                        <a @click="detailDialogShow=false">
                            <img :src="dialogData.detailPicUrl4">
                        </a>
                    </yd-slider-item>
                    <yd-slider-item v-if="dialogData.detailPicUrl5">
                        <a @click="detailDialogShow=false">
                            <img :src="dialogData.detailPicUrl5">
                        </a>
                    </yd-slider-item>
                </yd-slider>
            </yd-popup>




        </yd-scrolltab>





</template>
<script>

    // let $ = require('jquery')
    // window.$ = $


    import {queryGoodsInfosList,} from '../../api/api';



    import $ from '../../common/js/jquery-vendor';
    import jqueryFly from '../../common/js/jquery.fly.min';

    export default {
        data() {
            return {
                totalCount:0,
                list: [

                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_1.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_2.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_3.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_4.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_5.jpg'},
                    {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_6.jpg'}
                ],

                listData:{
                },
                formData:{},
                dialogData:{
                    id: '',
                    goodsName: '',
                    price: '',
                    picUrl: '',
                    goodsType: '',
                    createTime: '',
                    updateTime: '',
                    detailPicUrl1: '',
                    detailPicUrl2: '',
                    detailPicUrl3: '',
                    detailPicUrl4: '',
                    detailPicUrl5: '',
                },
                detailDialogShow:false,

            }
        },
        mounted() {
            this.init();
        },
        // computed:{
        //   totalCountComp:function () {
        //     return sessionStorage.getItem('totalCount');
        //   },
        // },
        methods:{

            init() {
                this.loadTable();
                this.totalCount=sessionStorage.getItem('totalCount')?sessionStorage.getItem('totalCount'):0;
            },
            calcSelectedGoodsCount() {
                let shopCartData=JSON.parse(sessionStorage.getItem('shopCartData'));
                console.log(shopCartData);
                this.formData =shopCartData?shopCartData:{};
                // for (let key in this.formData) {
                //     console.log("key:" + key);
                // }

                console.log(this.listData);
                for (let listKey in this.listData) {
                    for (let i  in this.listData[listKey]) {
                        for (let key in this.formData) {
                            // console.log("listKey:" + listKey);
                            // console.log(this.listData[listKey][i]);
                            // console.log("key:" + key);
                            // console.log("key1:" + this.listData[listKey][i].id);
                            // console.log("key:" + key);
                            if (this.listData[listKey][i].id == key) {
                                this.listData[listKey][i].goodsCount = this.formData[key];
                            }

                        }
                    }
                }
            },

            loadTable() {
                let queryData = {};
                queryGoodsInfosList(queryData).then(data => {
                    console.log(data)
                    if (data.status != 0) {
                        this.$dialog.toast({
                            mes: data.message,
                            timeout: 1500,
                            icon: 'error'
                        });
                    } else {
                        this.listData = data.data;
                        this.calcSelectedGoodsCount();
                    }
                });
            },

            showDetailDialog(item){
                if(!item.detailPicUrl1&&!item.detailPicUrl2&&!item.detailPicUrl3&&!item.detailPicUrl4&&!item.detailPicUrl5){
                    this.$dialog.toast({
                        mes: '暂无明细',
                        timeout: 1500,
                        icon: 'error'
                    });
                    return;
                }
                this.dialogData =item;
                this.detailDialogShow = true;
            },

            goodsCountChange(id,num){
                if(!this.formData[id]||this.formData[id]<num){
                    this.animation(id,num);
                }else{
                    this.calcGoodsCount(id,num);
                }
            },
            calcGoodsCount(id,num){
                if(num==0){
                    delete this.formData[id];
                }else{
                    this.formData[id]=num;
                }
                let totalCount = 0;
                for(let key in this.formData){
                    totalCount+=this.formData[key];
                }
                this.totalCount = totalCount;
                sessionStorage.setItem('totalCount', totalCount.toString());
                sessionStorage.setItem('shopCartData', JSON.stringify(this.formData));
                sessionStorage.setItem('listData', JSON.stringify(this.listData));

            },
            animation(id,num){
                if(!event){
                    return;//点击多了会有问题
                }
                let thisItem = $(event.currentTarget);
                let flyer = thisItem.clone().css({"background":"red", "width": "20px", "height": "20px","border-radius": "20px"});
                let offset = $('#badge').offset();
                var _this =this;
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
                        _this.calcGoodsCount(id,num);
                    } //结束回调
                });
            }

        }
    }
</script>
