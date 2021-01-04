<template>
    <h3 class="title-product">
        <span>{{ title }}</span>
    </h3>
</template>

<script>
export default{
    props:['title'],
}
</script>

<style lang="scss">
.title-product{
    margin-bottom: 25px;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top: 18px;
        background: #dddddd;
        width: 100%;
        height: 1px;
        display: block;
    }
    span{
        font-size: 25px !important;
        text-transform: uppercase;
        color: #fdb45e;
        position: inherit;
        z-index: 1;
        padding-right: 20px;
        background: #fff;
    }
}
</style>