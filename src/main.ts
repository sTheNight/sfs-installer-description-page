import 'mdui';
import 'mdui/mdui.css';
import './style.less'
import _ from "lodash"

import { setTheme, type ButtonIcon } from 'mdui';
import type { NavigationDrawer } from 'mdui';
import type { TopAppBar } from 'mdui';
import type { Menu } from 'mdui';
import type { Dialog } from 'mdui';


const topAppBar = document.querySelector('#top-app-bar') as TopAppBar
const navigationOpenButton = document.querySelector('mdui-button-icon[icon="menu"]') as ButtonIcon
const leftNavigationDrawer = document.querySelector('#top-appbar-menu') as NavigationDrawer
const leftNavigationDrawerContainer = document.querySelector('#left-navigation-drawer-container') as HTMLDivElement
const themeMenu = document.querySelector("#theme-menu") as Menu
const switchThemeIconButton = document.querySelector('#switch-theme-icon-button') as ButtonIcon
const aboutDialog = document.querySelector('#about-dialog') as Dialog

themeLoader()

leftNavigationDrawerContainer.style.paddingTop = `${topAppBar.offsetHeight}px`

navigationOpenButton.addEventListener('click', () => {
    switchNavDrawerSta(leftNavigationDrawer)
})

function switchNavDrawerSta(navDraEle: NavigationDrawer): void {
    if (navDraEle === null) return;
    if (navDraEle.open) {
        navDraEle.open = false
    } else {
        navDraEle.open = true
    }
}

themeMenu.addEventListener('change', () => {
    if (themeMenu.value === 'light' || themeMenu.value === 'dark') {
        localStorage.setItem('themeMode', themeMenu.value)
    } else {
        localStorage.setItem('themeMode', 'auto')
    }
    themeLoader();
})

function themeLoader(): void {
    const themeMode = localStorage.getItem('themeMode') ?? 'auto'
    console.log(themeMode)
    switch (themeMode) {
        case 'light':
            setTheme('light')
            switchThemeIconButton.icon = 'wb_sunny'
            break;
        case 'dark':
            setTheme('dark')
            switchThemeIconButton.icon = 'mode_night'
            break;
        default:
            setTheme('auto')
            switchThemeIconButton.icon = 'wb_sunny'
            break;
    }
    themeMenu.value = themeMode
}

document.querySelector('#item-about')?.addEventListener('click', () => {
    aboutDialog.open = true
})

document.querySelector('#about-dialog-confirm')?.addEventListener('click',()=>{
    aboutDialog.open = false
})