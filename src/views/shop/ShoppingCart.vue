<template>
<div>
    <yd-layout v-if="!isShopCartEmpty">
        <yd-flexbox style="height: 2rem;">
            <yd-flexbox-item >
                <yd-icon name="shopcart"></yd-icon>
            </yd-flexbox-item>
        </yd-flexbox>


        <yd-flexbox >
            <yd-flexbox-item >
                总金额￥100.00
            </yd-flexbox-item>
        </yd-flexbox>


        <yd-flexbox style="margin-top: .5rem;margin-bottom: .5rem">
            <yd-flexbox-item  >
                <hr>
            </yd-flexbox-item>
        </yd-flexbox>


        <yd-flexbox >
            <yd-flexbox-item >
                娃娃菜
            </yd-flexbox-item>
            <yd-flexbox-item >
                ￥100.00
            </yd-flexbox-item>
            <yd-flexbox-item >
                数量
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox >
            <yd-flexbox-item >
                娃娃菜
            </yd-flexbox-item>
            <yd-flexbox-item >
                ￥100.00
            </yd-flexbox-item>
            <yd-flexbox-item >
                数量
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox >
            <yd-flexbox-item >
                娃娃菜
            </yd-flexbox-item>
            <yd-flexbox-item >
                ￥100.00
            </yd-flexbox-item>
            <yd-flexbox-item >
                数量
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox >
            <yd-flexbox-item >
                娃娃菜
            </yd-flexbox-item>
            <yd-flexbox-item >
                ￥100.00
            </yd-flexbox-item>
            <yd-flexbox-item >
                数量
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox >
            <yd-flexbox-item >
                娃娃菜
            </yd-flexbox-item>
            <yd-flexbox-item >
                ￥100.00
            </yd-flexbox-item>
            <yd-flexbox-item >
                数量
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox >
            <yd-flexbox-item >
                娃娃菜
            </yd-flexbox-item>
            <yd-flexbox-item >
                ￥100.00
            </yd-flexbox-item>
            <yd-flexbox-item >
                数量
            </yd-flexbox-item>
        </yd-flexbox>


        <yd-flexbox style="margin-top: .5rem;margin-bottom: .5rem">
            <yd-flexbox-item  >
                <hr>
            </yd-flexbox-item>
        </yd-flexbox>

        <yd-flexbox>
            <yd-flexbox-item >
                <yd-button size="small" type="primary"  @click.native="buyDialogShow = true">立即购买</yd-button>
            </yd-flexbox-item>
        </yd-flexbox>

    </yd-layout>

    <!--购物车什么都没有-->
    <yd-layout v-else>
        <yd-flexbox style="height: 6rem;">
            <yd-flexbox-item >
                <yd-icon name="shopcart-outline"></yd-icon>
            </yd-flexbox-item>
        </yd-flexbox>

        <yd-flexbox >
            <yd-flexbox-item  >
                空空如也~
            </yd-flexbox-item>
        </yd-flexbox>
    </yd-layout>





    <!--立即购买对话框-->
    <yd-popup v-model="buyDialogShow" position="center" width="90%" >
        <div style="background-color:#fff;">
            <yd-cell-group >

                <yd-cell-item >
                    <span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;收货人：</span>
                    <yd-input slot="right" v-model="formData.name"  placeholder="请输入联系人名"></yd-input>
                </yd-cell-item>

                <yd-cell-item>
                    <span slot="left" style="font-weight:bold">手机号码：</span>
                    <yd-input slot="right" v-model="formData.phone"  placeholder="请输入手机号码"></yd-input>
                </yd-cell-item>

                <yd-cell-item>
                    <span slot="left" style="font-weight:bold">收货地址：</span>
                    <yd-input slot="right" v-model="formData.address"  placeholder="请输入收货地址"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：</span>
                    <yd-input slot="right" v-model="formData.comment"  placeholder="老板有啥吩咐？"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <p style="text-align: center;">
                <yd-button @click.native="buyDialogShow = false">确认购买</yd-button>
            </p>
        </div>
    </yd-popup>



</div>
</template>

<script>
    export default {
        data() {
            return {
                isShopCartEmpty:false,
                buyDialogShow:false,
                formData:{
                    name:'',
                    phone:'',
                    address:'',
                    comment:'',

                },
            }
        }
    }
</script>
