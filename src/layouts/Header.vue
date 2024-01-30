<template>
    <header>
        <div class="nav"></div>
        <div class="nav-tool-bar">
            <el-popover popper-class="music-popover" :show-arrow="false" transition="el-zoom-in-top" :teleported="false" placement="bottom-end" :width="300" trigger="click">
                <template #reference>
                    <div class="item">
                        <el-icon><Headset /></el-icon>
                    </div>
                </template>
                <Music />
            </el-popover>
            <div class="item" @click="toggle()"><el-icon><FullScreen /></el-icon></div>
            <div class="item" @click="toggleDark()">
                <el-icon><component :is="isDark ? 'Moon' : 'Sunny'" /></el-icon>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useDark, useToggle, useFullscreen  } from '@vueuse/core'
import Music from '@/components/Music.vue'


const isDark = useDark()
const toggleDark = useToggle(isDark)

const { isFullscreen, enter, exit, toggle } = useFullscreen()

</script>

<style lang="less" scoped>
header {
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;

    .nav-tool-bar {
        height: 100%;
        border-radius: var(--el-border-radius-base);
        box-shadow: var(--el-box-shadow);
        display: flex;
        align-items: center;
        background: url(./../assets/images/scene.png) no-repeat;
        background-size: 100% 100%;
        &:deep(.music-popover) {
            background: url(./../assets/images/scene.png) no-repeat;
            background-size: 100% 100%;
            background-color: var(--el-color-primary-light-9);
        }
        .item {
            padding: 0 12px;
            height: 100%;
            cursor: pointer;
            transition: all .3s;
            display: flex;
            align-items: center;
            color: var(--color);
        }
    }
}
</style>
