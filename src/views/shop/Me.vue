<template>
 <div>

     <yd-layout>

         <yd-flexbox style="height: 2rem;">
             <yd-flexbox-item>
                 <yd-icon name="order"></yd-icon>
             </yd-flexbox-item>
         </yd-flexbox>


         <!--<yd-flexbox>-->
             <!--<yd-flexbox-item>-->
                 <!--待处理-->
             <!--</yd-flexbox-item>-->
             <!--<yd-flexbox-item>-->
                 <!--处理中-->
             <!--</yd-flexbox-item>-->
             <!--<yd-flexbox-item>-->
                 <!--已完成-->
             <!--</yd-flexbox-item>-->
         <!--</yd-flexbox>-->

         <yd-tab bg-color="">
             <yd-tab-panel label="待处理">

                 <div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem" @click="orderDetailDialogShow = true">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>

                         </div>
                         <yd-flexbox-item>
                             订单号:<i style="color: blue">123456789</i>
                             <br>

                             <i style="font-size: .2rem"> 2018-12-12 12:12:12</i>
                         </yd-flexbox-item>
                         <yd-flexbox-item>
                             <i style="color: red">￥123.00</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                 </div>
                 <div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>

                         </div>
                         <yd-flexbox-item>
                             订单号:<i style="color: blue">123456789</i>
                             <br>

                             <i style="font-size: .2rem"> 2018-12-12 12:12:12</i>
                         </yd-flexbox-item>
                         <yd-flexbox-item>
                             <i style="color: red">￥123.00</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                 </div>
                 <div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>

                         </div>
                         <yd-flexbox-item>
                             订单号:<i style="color: blue">123456789</i>
                             <br>

                             <i style="font-size: .2rem"> 2018-12-12 12:12:12</i>
                         </yd-flexbox-item>
                         <yd-flexbox-item>
                             <i style="color: red">￥123.00</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                 </div>

             </yd-tab-panel>
             <yd-tab-panel label="处理中">

                 <div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>

                         </div>
                         <yd-flexbox-item>
                             订单号:<i style="color: blue">123456789</i>
                             <br>

                             <i style="font-size: .2rem"> 2018-12-12 12:12:12</i>
                         </yd-flexbox-item>
                         <yd-flexbox-item>
                             <i style="color: red">￥123.00</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                 </div>
             </yd-tab-panel>

             <yd-tab-panel label="已完成">
                 <div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">
                     <yd-flexbox style="height: 1.2rem">
                         <div>
                             <yd-icon name="shield-outline"></yd-icon>

                         </div>
                         <yd-flexbox-item>
                             订单号:<i style="color: blue">123456789</i>
                             <br>

                             <i style="font-size: .2rem"> 2018-12-12 12:12:12</i>
                         </yd-flexbox-item>
                         <yd-flexbox-item>
                             <i style="color: red">￥123.00</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                 </div>
             </yd-tab-panel>
         </yd-tab>


         <!--<yd-flexbox style="margin-top: .5rem;margin-bottom: .5rem">-->
             <!--<yd-flexbox-item>-->
                 <!--<hr>-->
             <!--</yd-flexbox-item>-->
         <!--</yd-flexbox>-->


         <!--<div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">-->
             <!--<yd-flexbox style="height: 1.2rem">-->
                 <!--<div>-->
                     <!--<yd-icon name="shield-outline"></yd-icon>-->

                 <!--</div>-->
                 <!--<yd-flexbox-item>-->
                     <!--订单号:<i style="color: blue">123456789</i>-->
                     <!--<br>-->

                     <!--<i style="font-size: .2rem"> 2018-12-12 12:12:12</i>-->
                 <!--</yd-flexbox-item>-->
                 <!--<yd-flexbox-item>-->
                     <!--<i style="color: red">￥123.00</i>-->
                 <!--</yd-flexbox-item>-->
             <!--</yd-flexbox>-->
         <!--</div>-->
         <!--<div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">-->
             <!--<yd-flexbox style="height: 1.2rem">-->
                 <!--<div>-->
                     <!--<yd-icon name="shield-outline"></yd-icon>-->

                 <!--</div>-->
                 <!--<yd-flexbox-item>-->
                     <!--订单号:<i style="color: blue">123456789</i>-->
                     <!--<br>-->

                     <!--<i style="font-size: .2rem"> 2018-12-12 12:12:12</i>-->
                 <!--</yd-flexbox-item>-->
                 <!--<yd-flexbox-item>-->
                     <!--<i style="color: red">￥123.00</i>-->
                 <!--</yd-flexbox-item>-->
             <!--</yd-flexbox>-->
         <!--</div>-->
         <!--<div style="border-radius:0.15rem;border: 0.02rem solid #000;margin: 0.25rem 0.5rem">-->
             <!--<yd-flexbox style="height: 1.2rem">-->
                 <!--<div>-->
                     <!--<yd-icon name="shield-outline"></yd-icon>-->

                 <!--</div>-->
                 <!--<yd-flexbox-item>-->
                     <!--订单号:<i style="color: blue">123456789</i>-->
                     <!--<br>-->

                     <!--<i style="font-size: .2rem"> 2018-12-12 12:12:12</i>-->
                 <!--</yd-flexbox-item>-->
                 <!--<yd-flexbox-item>-->
                     <!--<i style="color: red">￥123.00</i>-->
                 <!--</yd-flexbox-item>-->
             <!--</yd-flexbox>-->
         <!--</div>-->



         <!--订单明细对话框-->
         <yd-popup v-model="orderDetailDialogShow" position="center" width="90%" >
             <div style="background-color:#fff;">




                 <yd-layout>
                     <yd-flexbox style="height: 2rem;">
                         <yd-flexbox-item>
                             <i style="font-size: 0.8rem;color: red">￥28.20</i>
                         </yd-flexbox-item>
                     </yd-flexbox>


                     <yd-flexbox style="margin-top: 0rem;">
                         <div style="margin-left: .5rem">
                            <i>订单号:</i>
                         </div>
                         <yd-flexbox-item>
                            <i>12345678</i>
                         </yd-flexbox-item>
                     </yd-flexbox>

                     <yd-flexbox style="margin-top: .3rem;">
                         <div style="margin-left: .5rem">
                            <i>收货人:</i>
                         </div>
                         <yd-flexbox-item>
                            <i>西门飞雪</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;">
                         <div style="margin-left: .5rem">
                             <i>创建时间:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>2018-12-12 12:12:12</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;align-items:flex-start;margin-right: .5rem">
                         <div style="margin-left: .5rem;">
                             <i>收货地址:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>这里是收货地址这里是收货地址这里是收货地址这里是收货地址这里是收货地址这里是收货地址这里是收货地址</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;align-items:flex-start;margin-right: .5rem">
                         <div style="margin-left: .5rem;">
                             <i>备注:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>这里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容</i>
                         </yd-flexbox-item>
                     </yd-flexbox>
                     <yd-flexbox style="margin-top: .3rem;align-items:flex-start;margin-right: .5rem">
                         <div style="margin-left: .5rem;">
                             <i>订单明细:</i>
                         </div>
                         <yd-flexbox-item>
                             <i>脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,脸盆X1,垃圾桶X2.</i>
                         </yd-flexbox-item>
                     </yd-flexbox>



                 </yd-layout>


                 <!--<yd-cell-group >-->

                     <!--<yd-cell-item >-->
                         <!--<span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;收货人：</span>-->
                         <!--<yd-input slot="right" v-model="formData.name"  placeholder="请输入联系人名"></yd-input>-->
                     <!--</yd-cell-item>-->

                     <!--<yd-cell-item>-->
                         <!--<span slot="left" style="font-weight:bold">手机号码：</span>-->
                         <!--<yd-input slot="right" v-model="formData.phone"  placeholder="请输入手机号码"></yd-input>-->
                     <!--</yd-cell-item>-->

                     <!--<yd-cell-item>-->
                         <!--<span slot="left" style="font-weight:bold">收货地址：</span>-->
                         <!--<yd-input slot="right" v-model="formData.address"  placeholder="请输入收货地址"></yd-input>-->
                     <!--</yd-cell-item>-->
                     <!--<yd-cell-item>-->
                         <!--<span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：</span>-->
                         <!--<yd-input slot="right" v-model="formData.comment"  placeholder="老板有啥吩咐？"></yd-input>-->
                     <!--</yd-cell-item>-->
                 <!--</yd-cell-group>-->




                 <p style="text-align: center;">
                     <yd-button style="margin-right: .5rem" @click.native="orderDetailDialogShow = false" type="warning">取消订单</yd-button>
                     <yd-button @click.native="orderDetailDialogShow = false">关闭</yd-button>
                 </p>
             </div>
         </yd-popup>




     </yd-layout>
 </div>
</template>

<script>
    export default {
        data() {
            return {

                orderDetailDialogShow:false,


            }
        }
    }
</script>


