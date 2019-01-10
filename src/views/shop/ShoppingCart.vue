<template>
<div>
    <yd-layout v-if="isShopCartEmpty">
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
                <yd-button size="small" type="primary">立即购买</yd-button>
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


</div>
</template>

<script>
    export default {
        data() {
            return {
                isShopCartEmpty:true,

            }
        }
    }
</script>
