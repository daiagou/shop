<template>
    <div>
        <yd-layout v-if="!isShopCartEmpty">
            <yd-flexbox style="height: 2rem;">
                <yd-flexbox-item>
                    <yd-icon name="shopcart"></yd-icon>
                </yd-flexbox-item>
            </yd-flexbox>


            <yd-flexbox>
                <yd-flexbox-item>
                    总金额￥{{totalAmount}}
                </yd-flexbox-item>
            </yd-flexbox>


            <yd-flexbox style="margin-top: .5rem;margin-bottom: .5rem">
                <yd-flexbox-item>
                    <hr>
                </yd-flexbox-item>
            </yd-flexbox>


            <yd-flexbox v-for="item,key in goodsList">
                <yd-flexbox-item>
                    {{item.goodsName}}
                </yd-flexbox-item>
                <yd-flexbox-item>
                    ￥{{item.price}}
                </yd-flexbox-item>
                <yd-flexbox-item>
                    {{item.goodsCount}}
                </yd-flexbox-item>
            </yd-flexbox>


            <yd-flexbox style="margin-top: .5rem;margin-bottom: .5rem">
                <yd-flexbox-item>
                    <hr>
                </yd-flexbox-item>
            </yd-flexbox>

            <yd-flexbox>
                <yd-flexbox-item>
                    <yd-button size="small" type="primary" @click.native="buyDialogShow = true">立即购买</yd-button>
                </yd-flexbox-item>
            </yd-flexbox>

        </yd-layout>

        <!--购物车什么都没有-->
        <yd-layout v-else>
            <yd-flexbox style="height: 6rem;">
                <yd-flexbox-item>
                    <yd-icon name="shopcart-outline"></yd-icon>
                </yd-flexbox-item>
            </yd-flexbox>

            <yd-flexbox>
                <yd-flexbox-item>
                    空空如也~
                </yd-flexbox-item>
            </yd-flexbox>
        </yd-layout>


        <!--立即购买对话框-->
        <yd-popup v-model="buyDialogShow" position="center" width="90%">
            <div style="background-color:#fff;">
                <yd-cell-group>

                    <yd-cell-item>
                        <span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;收货人：</span>
                        <yd-input slot="right" v-model="formData.customer" placeholder="请输入联系人名"></yd-input>
                    </yd-cell-item>

                    <yd-cell-item>
                        <span slot="left" style="font-weight:bold">手机号码：</span>
                        <yd-input slot="right" v-model="formData.phone" placeholder="请输入手机号码"></yd-input>
                    </yd-cell-item>

                    <yd-cell-item>
                        <span slot="left" style="font-weight:bold">收货地址：</span>
                        <yd-input slot="right" v-model="formData.address" placeholder="请输入收货地址"></yd-input>
                    </yd-cell-item>
                    <yd-cell-item>
                        <span slot="left" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：</span>
                        <yd-input slot="right" v-model="formData.comment" placeholder="老板有啥吩咐？"></yd-input>
                    </yd-cell-item>
                </yd-cell-group>
                <p style="text-align: center;">
                    <yd-button @click.native="buy">确认购买</yd-button>
                </p>
            </div>
        </yd-popup>


    </div>
</template>

<script>

    import {buy,} from '../../api/api';

    export default {
        mounted() {
            this.init()
        },
        data() {
            return {
                isShopCartEmpty: false,
                buyDialogShow: false,
                formData: {
                    customer: '',
                    phone: '',
                    address: '',
                    comment: '',
                    toBuyGoods: {},
                },
                totalAmount: 0.00,
                goodsList: [],
            }
        },
        methods: {
            init() {
                this.totalAmount = 0;
                let shopCartData = JSON.parse(sessionStorage.getItem('shopCartData'));
                this.formData.toBuyGoods = shopCartData ? shopCartData : {};
                let listData = JSON.parse(sessionStorage.getItem('listData'));
                for (let listKey in listData) {
                    for (let i  in listData[listKey]) {
                        if (listData[listKey][i].goodsCount > 0) {
                            this.goodsList.push(listData[listKey][i]);
                            this.totalAmount += listData[listKey][i].price * listData[listKey][i].goodsCount;
                        }
                    }
                }
                if (!this.goodsList || JSON.stringify(this.goodsList) == '[]') {
                    this.isShopCartEmpty = true;
                }


            },
            buy() {
                this.buyDialogShow = false;
                let queryData = this.formData;
                buy(queryData).then(data => {
                    console.log(data)
                    if (data.status != 0) {
                        this.$dialog.toast({
                            mes: data.message,
                            timeout: 1500,
                            icon: 'error'
                        });
                    } else {
                        this.$dialog.toast({
                            mes:"购买成功",
                            timeout: 1500,
                            icon: 'success'
                        });
                        this.isShopCartEmpty = true;
                        sessionStorage.setItem('totalCount', "0");
                        sessionStorage.setItem('shopCartData', "{}");
                        sessionStorage.setItem('listData', "{}");
                        this.formData = {
                            customer: '',
                            phone: '',
                            address: '',
                            comment: '',
                            toBuyGoods: {},
                        };
                        this.totalAmount = 0.00;
                        this.goodsList = [];
                    }
                });
            },
        },
    }
</script>
