<script setup lang="ts">
import { config } from '@/config';
import { onMounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';
import DescriptionCard from '@/component/DescriptionCard.vue';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
    Fancybox.bind("[data-fancybox]", {});
})
</script>
<template>
    <div id="installer-app-info">
        <div id="package-info-div">
            <img src="/app_icon.png" id="installer-app-icon">
            <div id="app-name-div">
                <h3 id="app-name-title">SFS安装器</h3>
                <p id="app-version">v1.5.10.5-9-fix8</p>
            </div>
        </div>
        <div id="download-button-div">
            <mdui-dropdown>
                <div slot="trigger">
                    <mdui-tooltip content="下载">
                        <mdui-button-icon icon="download"></mdui-button-icon>
                    </mdui-tooltip>
                </div>
                <mdui-menu id="download-menu" value="auto">
                    <mdui-menu-item v-for="item in config.downloadMenuItems" :href="item.link">
                        {{ item.name }}
                    </mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </div>
    </div>
    <div id="sereenshot-div">
        <a v-for="item in config.screenshot" :href="`./${item}`" data-fancybox="gallery">
            <img :src="`./${item}`" alt="Screenshot" class="screenshot-img">
        </a>
    </div>
    <DescriptionCard icon="description" title="介绍">
        <p class="description-text">这是一个航天模拟器的安装器，可以用于安装航天模拟器的最新版汉化包及破解补丁</p>
        <p>感谢<a href="https://github.com/youfeng11">由风</a>提供的帮助！</p>
    </DescriptionCard>
    <DescriptionCard icon="update" title="更新日志">
        <ul>
            <li>自动应用汉化包</li>
        </ul>
    </DescriptionCard>
</template>
<style scoped lang="scss">
@use "@/styles/rule" as *;

#installer-download-div,
#download-button-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;

    &#installer-download-div {
        padding: 0 32px;
    }
}

#installer-app-info {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    width: 100%;
}

#package-info-div {
    display: flex;

    #app-version,
    #app-name-title {
        margin: 0 !important;
    }

    #app-name-div {
        display: flex;
        flex-direction: column;
        margin-left: 10px !important;
    }
}

#installer-app-icon {
    width: 65px;
    height: auto;
}

#sereenshot-div {
    margin: 32px 0;
    overflow-x: auto;
    display: flex;
    width: 100%;
    max-width: $max-content-width;
    box-sizing: border-box;

    img {
        height: 300px;
        width: auto;
        border-radius: 12px;
        border: 0.0625rem solid rgb(var(--mdui-color-surface-variant));
    }

    a[data-fancybox]:not(:last-child) {
        margin-right: 8px;
    }
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