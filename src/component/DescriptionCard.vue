<script setup lang="ts">
defineProps(['title', 'icon'])
</script>
<template>
    <mdui-card class="description-card" variant="outlined">
        <div class="description-title"><mdui-icon :name="icon"></mdui-icon>{{ title }}</div>
        <slot></slot>
    </mdui-card>
</template>
<style scoped lang="scss">
.description-card {
    margin-bottom: 32px;
    padding: 16px;
    width: 100%;
}

.description-title {
    margin: 8px 0;
    display: flex;
    align-items: center;
    padding-left: 8px;

    mdui-icon {
        margin-right: 8px;
    }
}
</style>