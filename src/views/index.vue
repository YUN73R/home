<template>
    <Headers />
    <mian class="main">
        <div class="search-area">
            <el-dropdown class="engines-dropdown" @command="chooseCommand" :teleported="false">
                <div class="engines-dropdown-tigger">
                    <el-image class="curr-img" :src="chooseEngines.ico" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :command="engines[0].id">
                            <template #default>
                                <el-image class="item-img" :src="engines[0].ico" /><span>{{ engines[0].name }}</span>
                            </template>
                        </el-dropdown-item>
                        <el-dropdown-item :command="engines[1].id">
                            <template #default>
                                <el-image class="item-img" :src="engines[1].ico" /><span>{{ engines[1].name }}</span>
                            </template>
                        </el-dropdown-item>
                        <el-dropdown-item :command="engines[2].id">
                            <template #default>
                                <el-image class="item-img" :src="engines[2].ico" /><span>{{ engines[2].name }}</span>
                            </template>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <input v-model="searchwd" class="input-with" @keydown.enter="toSearch" />
            <button class="search-button" @click="toSearch">
                <el-icon>
                    <Search />
                </el-icon>
            </button>
        </div>
    </mian>
    <footer>
        该网页由王玲赞助老公开发
    </footer>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Headers from '@/layouts/Header.vue'
import { ElMessage } from 'element-plus';

const engines = [
    { name: '百度', id: 'baidu', url: 'https://www.baidu.com/s?wd=${wd} --AD', ico: 'https://www.baidu.com/favicon.ico' },
    { name: 'Google', id: 'google', url: 'https://www.google.com/search?q=${wd}', ico: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg-png.png' },
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

<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: calc(100% - 60px);
    padding: .8rem;
    position: relative;
    .search-area {
        display: flex;
        width: 100%;
        max-width: 900px;
        min-width: 400px;
        height: 45px;
        margin: 50px;
        align-items: center;
        border: 2px solid var(--el-color-primary-light-3);
        border-radius: 8px;
        transition: all .3s;

        &:hover {
            border: 2px solid var(--el-color-primary);

            .search-button {
                background: var(--el-color-primary);
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
            width: 80px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            color: var(--el-color-white);
            outline: none;
            border: none;
            background: var(--el-color-primary-light-3);
            border-radius: 0 8px 8px 0;
            transition: all .3s;
            cursor: pointer;

            &:hover {
                filter: brightness(.9);
            }
        }
    }
}</style>
