<template>
 <div>

     <yd-layout>

         <yd-flexbox style="height: 2rem;">
             <yd-flexbox-item>
                 <yd-icon name="order"></yd-icon>
             </yd-flexbox-item>
         </yd-flexbox>



         <yd-tab bg-color="">
             <yd-tab-panel label="待处理">
                 <div  v-for="item,key in createdOrderList"  style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem" @click="showDetail(item)">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>
                         </div>
                         <yd-flexbox-item >
                             订单号:<i style="color: blue">{{item.orders.orderNo}}</i>
                             <br>
                             <i style="font-size: .2rem">{{item.orders.createTime|timeFilter}}</i>
                         </yd-flexbox-item>
                         <div style="width: 1.6rem">
                             <i style="color: red">￥{{item.orders.totalAmount}}</i>
                         </div>
                     </yd-flexbox>
                 </div>
             </yd-tab-panel>

             <yd-tab-panel label="处理中">

                 <div  v-for="item,key in dealingOrderList"  style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem" @click="showDetail(item)">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>
                         </div>
                         <yd-flexbox-item >
                             订单号:<i style="color: blue">{{item.orders.orderNo}}</i>
                             <br>
                             <i style="font-size: .2rem">{{item.orders.createTime|timeFilter}}</i>
                         </yd-flexbox-item>
                         <div style="width: 1.6rem">
                             <i style="color: red">￥{{item.orders.totalAmount}}</i>
                         </div>
                     </yd-flexbox>
                 </div>
             </yd-tab-panel>

             <yd-tab-panel label="已完成">
                 <div  v-for="item,key in finishedOrderList"  style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem" @click="showDetail(item)">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>
                         </div>
                         <yd-flexbox-item >
                             订单号:<i style="color: blue">{{item.orders.orderNo}}</i>
                             <br>
                             <i style="font-size: .2rem">{{item.orders.createTime|timeFilter}}</i>
                         </yd-flexbox-item>
                         <div style="width: 1.6rem">
                             <i style="color: red">￥{{item.orders.totalAmount}}</i>
                         </div>
                     </yd-flexbox>
                 </div>
             </yd-tab-panel>
         </yd-tab>





         <!--订单明细对话框-->
         <yd-popup v-model="orderDetailDialogShow" position="center" width="90%" >
             <div style="background-color:#fff;" v-if="diaLogData">
                 <yd-layout>
                     <yd-flexbox style="height: 2rem;">
                         <yd-flexbox-item>
                             <i style="font-size: 0.8rem;color: red">￥{{diaLogData.orders.totalAmount}}</i>
                         </yd-flexbox-item>
                     </yd-flexbox>

                     <yd-flexbox style="margin-top: 0rem;">
                         <div style="margin-left: .5rem">
                            <i>订单号:</i>
                         </div>
                         <yd-flexbox-item>
                            <i>{{diaLogData.orders.orderNo}}</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;">
                         <div style="margin-left: .5rem">
                            <i>收货人:</i>
                         </div>
                         <yd-flexbox-item>
                            <i>{{diaLogData.orders.customer}}</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;">
                         <div style="margin-left: .5rem">
                             <i>创建时间:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>{{diaLogData.orders.createTime|timeFilter}}</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;align-items:flex-start;margin-right: .5rem">
                         <div style="margin-left: .5rem;">
                             <i>收货地址:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>{{diaLogData.orders.address}}</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;align-items:flex-start;margin-right: .5rem">
                         <div style="margin-left: .5rem;">
                             <i>备注:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>{{diaLogData.orders.comment}}</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;align-items:flex-start;margin-right: .5rem">
                         <div style="margin-left: .5rem;">
                             <i>订单明细:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>{{diaLogData.orderDetails}}.</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                 </yd-layout>

                 <p style="text-align: center;">
                     <yd-button v-if="diaLogData.orders.orderStatus=='CREATED'" style="margin-right: .5rem" @click.native="cancel(diaLogData)" type="hollow">取消订单</yd-button>
                     <yd-button @click.native="orderDetailDialogShow = false">关闭</yd-button>
                 </p>
             </div>
         </yd-popup>

         <!--立即购买对话框-->
         <yd-popup v-model="phoneDialogShow" position="center" width="90%">
             <div style="background-color:#fff;">
                 <yd-cell-group>

                     <yd-cell-item>
                         <span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;收货人：</span>
                         <yd-input slot="right" v-model="formData.phone" placeholder="订单相关收货人号码"></yd-input>
                     </yd-cell-item>
                 </yd-cell-group>
                 <p style="text-align: center;">
                     <yd-button @click.native="savePhone">确认</yd-button>
                 </p>
             </div>
         </yd-popup>



     </yd-layout>
 </div>
</template>

<script>
    import moment from 'moment';
    import {queryOrdersByPhone,savePhone,cancelOrder} from '../../api/api';

    export default {


        filters: {
            timeFilter: function (time) {
                if (time == undefined) {
                    return "";
                }
                time = new Date(time);
                return moment(time).format("YYYY-MM-DD HH:mm:ss");
            },
        },
        data() {
            return {
                phoneDialogShow: true,
                orderDetailDialogShow:false,
                formData:{
                    id:'',
                    phone:'',
                },
                createdOrderList:[],
                dealingOrderList:[],
                finishedOrderList:[],

                diaLogData:{
                    orders:{

                        id:'',
                        orderNo:'',
                        totalAmount:'',
                        customer:'',
                        openid:'',
                        phone:'',
                        address:'',
                        comment:'',
                        orderStatus:'',
                        createTime:'',
                        updateTime:'',
                    },
                    orderGoodsInfoList:[],
                    orderDetails:'',
                },

            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init() {

            },
            loadOrders(orderStatus){
                let queryData = {"orderStatus":orderStatus};
                queryOrdersByPhone(queryData).then(data => {
                    console.log(data)
                    if (data.status != 0) {
                        this.$dialog.toast({
                            mes: data.message,
                            timeout: 1500,
                            icon: 'error'
                        });
                    } else {
                        if(orderStatus=='CREATED'){this.createdOrderList = data.data}
                        if(orderStatus=='DEALING'){this.dealingOrderList = data.data}
                        if(orderStatus=='FINISHED'){this.finishedOrderList = data.data}
                    }
                });
            },
            savePhone(){
                this.phoneDialogShow = false;
                let queryData = {"phone":this.formData.phone};
                savePhone(queryData).then(data => {
                    console.log(data)
                    if (data.status != 0) {
                        this.$dialog.toast({
                            mes: data.message,
                            timeout: 1500,
                            icon: 'error'
                        });
                    } else {
                        this.loadOrders('CREATED');
                        this.loadOrders('DEALING');
                        this.loadOrders('FINISHED');
                    }
                });
            },
            cancel(orderResp){
                this.orderDetailDialogShow = false;
                this.$dialog.confirm({
                    title: '提示',
                    mes: '确定取消该订单?!',
                    opts: () => {
                        let queryData = {"orderNo":orderResp.orders.orderNo};
                        cancelOrder(queryData).then(data => {
                            console.log(data)
                            if (data.status != 0) {
                                this.$dialog.toast({
                                    mes: data.message,
                                    timeout: 1500,
                                    icon: 'error'
                                });
                            } else {
                                this.loadOrders(orderResp.orders.orderStatus);
                                this.$dialog.toast({
                                    mes: '操作成功',
                                    timeout: 1500,
                                    icon: 'success'
                                });
                            }
                        });
                    }
                });
            },

            showDetail(item){
                console.log(item)
                this.diaLogData = item;
                this.orderDetailDialogShow = true;
            },

        },

    }
</script>


