import 'mdui';
import 'mdui/mdui.css';
import './style.less'
import './home.less'
import './installer.less'
import _ from "lodash"

import { setTheme, type ButtonIcon } from 'mdui';
import type { NavigationDrawer } from 'mdui';
import type { TopAppBar } from 'mdui';
import type { Menu } from 'mdui';
import type { ListItem } from 'mdui';

import { dialog } from 'mdui';

const topAppBar = document.querySelector('#top-app-bar') as TopAppBar
const navigationOpenButton = document.querySelector('mdui-button-icon[icon="menu"]') as ButtonIcon
const leftNavigationDrawer = document.querySelector('#top-appbar-menu') as NavigationDrawer
const leftNavigationDrawerContainer = document.querySelector('#left-navigation-drawer-container') as HTMLDivElement
const themeMenu = document.querySelector("#theme-menu") as Menu

const subpageList = document.querySelectorAll<HTMLDivElement>('.subpage')
const leftNavigationList = document.querySelectorAll<ListItem>('#left-navigation-drawer-container mdui-list-item')
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
            break;
        case 'dark':
            setTheme('dark')
            break;
        default:
            setTheme('auto')
            break;
    }
    themeMenu.value = themeMode
}

function switchSubpage(subpageId: string): void {
    let isSubpageExist = false;
    if (!subpageId) subpageId = 'home'

    subpageId = 'installer-download'

    leftNavigationList.forEach(item => {
        if (item.dataset.id !== subpageId) {
            item.active = false
        } else {
            item.active = true
            isSubpageExist = true;
        }
    })
    subpageList.forEach(item => {
        item.style.display = 'none'
        if (item.dataset.id === subpageId) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
    if (!isSubpageExist) switchSubpage('home')
}

window.addEventListener('hashchange', () => {
    const hash = location.hash.split('/')[1]
    switchSubpage(hash)
})

document.addEventListener('DOMContentLoaded', () => {
    switchSubpage(location.hash.split('/')[1])
})

document.querySelector('#item-about')?.addEventListener('click', () => {
    dialog({
        headline: "关于",
        description: "由重铬酸钠制作",
        closeOnOverlayClick: true,
        closeOnEsc: true,
        actions: [
            {
                text: "确定"
            }
        ]
    });
})