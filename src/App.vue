<script setup lang="ts">
import { reactive, ref, useTemplateRef, watch, type ShallowRef } from 'vue';
import InstallerDescription from './views/InstallerDescription.vue';
import Page2 from './views/Page2.vue';
import'./styles/main.scss';
import { NavigationDrawer, setTheme } from 'mdui';

let currentPage = ref(0)
let isNavigationOpen = ref(false)
let isAboutDialogOpen = ref(false)

const pages = [
    { view: InstallerDescription, name: 'SFS 安装器', icon: 'android' },
    { view: Page2, name: 'Page2', icon: 'android' }
]

document.title = pages[currentPage.value].name

watch(currentPage,()=>{
    document.title=pages[currentPage.value].name
})

</script>
<template>
    <mdui-top-app-bar id="top-app-bar" scroll-behavior="elevate" scroll-target="#container">
        <mdui-button-icon icon="menu" @click="isNavigationOpen = !isNavigationOpen"></mdui-button-icon>
        <mdui-top-app-bar-title>SFS安装器</mdui-top-app-bar-title>

        <mdui-dropdown>
            <div slot="trigger">
                <mdui-tooltip content="主题">
                    <mdui-button-icon id="switch-theme-icon-button" icon="light_mode--outlined"></mdui-button-icon>
                </mdui-tooltip>
            </div>
            <mdui-menu id="theme-menu" selects="single" value="auto">
                <mdui-menu-item value="light" @click="setTheme('light')">亮色模式</mdui-menu-item>
                <mdui-menu-item value="dark" @click="setTheme('dark')">暗色模式</mdui-menu-item>
                <mdui-divider></mdui-divider>
                <mdui-menu-item value="auto" @click="setTheme('auto')">跟随系统</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
        <mdui-dropdown>
            <div slot="trigger">
                <mdui-tooltip content="菜单">
                    <mdui-button-icon icon="more_vert"></mdui-button-icon>
                </mdui-tooltip>
            </div>
            <mdui-menu id="more-menu" value="auto">
                <mdui-menu-item id="item-about" value="light" @click="isAboutDialogOpen = true">关于</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
    </mdui-top-app-bar>
        <mdui-dialog :open="isAboutDialogOpen" close-on-esc close-on-overlay-click headline="关于" id="about-dialog" @overlay-click="isAboutDialogOpen=false">
        <div slot="description" style="padding: 5px 0;">
            <p style="margin: 0;padding: 0;">此页面及应用由<a href="https://izako.cc/">重铬酸钠</a>制作</p>
            <p style="margin: 0;padding: 0;">此页面使用<a href="https://www.mdui.org/">MDUI</a>构建</p>
            <p style="margin: 0;padding: 0;">感谢<a href="https://youfeng11.github.io/">由风</a>为此应用提供帮助</p>
        </div>
        <mdui-button slot="action" variant="text" id="about-dialog-confirm"
            @click="isAboutDialogOpen = false">确定</mdui-button>
    </mdui-dialog>
    <div id="container">
        <mdui-navigation-drawer :open="isNavigationOpen" contained close-on-overlay-click close-on-esc @overlay-click="isNavigationOpen=false">
            <div id="left-navigation-drawer-container">
                <mdui-list>
                    <mdui-list-item v-for="(item, index) in pages" :key="currentPage" :active="index === currentPage"
                        rounded :icon="item.icon" @click="currentPage = index">{{ item.name }}</mdui-list-item>
                </mdui-list>
            </div>
        </mdui-navigation-drawer>
        <div id="view-div">
            <component :is="pages[currentPage].view" :key="currentPage"></component>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;

#top-app-bar {
    position: fixed;
    top: 0;
    z-index: 999;
}

#container {
    overflow-y: auto;
    box-sizing: border-box;
}

#left-navigation-drawer-container {
    padding-top: 64px;
}

#view-div {
    max-width: $max-content-width;
    margin: 0 auto;
    padding: 0 32px;
}
</style>