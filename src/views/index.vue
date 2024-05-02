<script setup>
import { reactive, ref } from 'vue'
import Headers from '@/layouts/Header.vue'
import { ElMessage } from 'element-plus';

const engines = [
    { name: '百度', id: 'baidu', url: 'https://www.baidu.com/s?wd=${wd} --AD', ico: 'https://www.baidu.com/favicon.ico' },
    { name: 'Google', id: 'google', url: 'https://www.google.com/search?q=${wd}', ico: 'https://www.google.cn/chrome/static/images/chrome-logo-m100.svg' },
    { name: 'Bing', id: 'bing', url: 'https://cn.bing.com/search?q=${wd}', ico: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg-png.png' }
    
]
const chooseEngines = ref(engines[0]), searchwd = ref('')

const chooseCommand = (id) => {
    chooseEngines.value = engines.filter(eng => eng.id == id)[0]
}
const toSearch = () => {
    if (!searchwd.value) return ElMessage.warning({ message: '输入关键词再搜索', grouping: true, repeatNum: 1 })
    window.open(chooseEngines.value.url.replace('${wd}', searchwd.value))
}
</script>
<template>
    <Headers />
    <mian class="main">
        <div class="logo">
            <div class="spotlight18" data-cont="HOMEPAGE">HOMEPAGE</div>
        </div>
        <div class="search-area">
            <el-dropdown class="engines-dropdown" @command="chooseCommand" :teleported="false">
                <div class="engines-dropdown-tigger">
                    <el-image class="curr-img" :src="chooseEngines.ico" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <
                        <el-dropdown-item v-for="item in engines" :command="item.id">
                            <template #default>
                                <el-image class="item-img" :src="item.ico" /><span>{{ item.name }}</span>
                            </template>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <input v-model="searchwd" class="input-with" @keydown.enter="toSearch" />
            <button class="search-button" @click="toSearch">
                <el-icon><Promotion /></el-icon>
            </button>
        </div>
        <div class="short-cuts">

        </div>
    </mian>
    <footer>
        该网页由王玲赞助老公开发
    </footer>
</template>
<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: calc(100% - 60px);
    padding: .8rem;
    position: relative;
    .logo {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .spotlight18{
            color: #eaeaea;
            font-size: 40px;
            font-weight: 900;
            text-transform: uppercase;
            position: relative;
        }
        .spotlight18:before{
            width: inherit;
            height: inherit;
            content: attr(data-cont);
            clip-path: ellipse(32px 32px at 0 50%);
            color: transparent;
            background-image: linear-gradient(90deg, #4158D0 0%, #C850C0 30%, #FFCC70 66%, #56e28d 100%);
            -webkit-background-clip: text;
            position: absolute;
            font-size: 40px;
            font-weight: 900;
            top: 0;
            left: 0;
            animation: spotlight18 6s linear infinite;
        }
    }
    .search-area {
        display: flex;
        width: 100%;
        max-width: 900px;
        min-width: 320px;
        height: 45px;
        margin: 50px;
        align-items: center;
        border: 2px solid var(--el-color-primary-light-3);
        border-radius: 8px;
        transition: all .3s;

        &:hover {
            border: 2px solid var(--el-color-primary);

            .search-button {
                .el-icon {
                    color: var(--el-color-primary);
                }
            }
        }

        .engines-dropdown {
            height: 45px;
            width: 45px;
            outline: none;
            border: none;
            * {
                outline: none;
                border: none;
            }

            .engines-dropdown-tigger {
                height: 100%;
                width: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .curr-img {
                width: 25px;
                height: 25px;
            }

            &:deep(.item-img) {
                width: 15px;
                display: flex;
                align-items: center;
            }

            &:deep(.el-dropdown-menu__item) {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    width: 80px;
                    text-align: center;
                }
            }
        }

        .input-with {
            outline: none;
            flex: 1;
            height: 100%;
            border: none;
            background: transparent;
            font-size: 14px;
        }

        .search-button {
            width: 45px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            color: var(--el-color-white);
            outline: none;
            border: none;
            border-radius: 0 8px 8px 0;
            transition: all .3s;
            cursor: pointer;
            background: transparent;
            border-left: none;

            &:hover {
                filter: brightness(.9);
            }
            .el-icon {
                color: var(--el-color-primary-light-3);
            }
        }
    }
}
@keyframes spotlight18{
    0%{
        clip-path: ellipse(32px 32px at 0 50%);
    }
    50%{
        clip-path: ellipse(32px 32px at 100% 50%);
    }
    100%{
        clip-path: ellipse(32px 32px at 0 50%);
    }
}
</style>
