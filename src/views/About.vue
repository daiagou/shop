<template>


    <div>

        <div id="fly" style="position: fixed;top:1rem;right:50%;width: 1rem;height: 1rem" @click="fly">
            <yd-badge type="danger">3</yd-badge>
        </div>


    </div>


</template>

<script>
    import $ from '../common/js/jquery-vendor';
    import jqueryFly from '../common/js/jquery.fly.min';


    export default {
        data() {
            return {

                orderDetailDialogShow: false,


            }
        },
        methods: {
            fly() {
                $('#fly').fly({
                    start: {
                        left: 11,  //开始位置（必填）#fly元素会被设置成position: fixed
                        top: 600,  //开始位置（必填）
                    },
                    end: {
                        left: 500, //结束位置（必填）
                        top: 130,  //结束位置（必填）
                        width: 100, //结束时高度
                        height: 100, //结束时高度
                    },
                    autoPlay: true, //是否直接运动,默认true
                    speed: 1.1, //越大越快，默认1.2
                    vertex_Rtop: 100, //运动轨迹最高点top值，默认20
                    onEnd: function () {
                    } //结束回调
                });
            }
        }
    }
</script>
