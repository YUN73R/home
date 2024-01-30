<template>
    <div class="music">
        <div class="music-info">
            <img :src="music.picurl" />
            <p>{{ music.name }}</p>
            <span>{{ music.artistsname }}</span>
        </div>

        <audio controls ref="audio" :src="music.url">
        </audio>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
const audio = ref(null), play = ref(false)
onMounted(async () => {
    await getMusic()
    console.log(audio.value);
})
const music = ref({ url: '', picurl: '', name: '', artistsname: '' })
const getMusic = async () => {
    const res = await axios.get('https://api.uomg.com/api/rand.music?sort=新歌榜&format=json')
    music.value = res.data.data
}
</script>

<style lang="less" scoped>
.music {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .music-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
            width: 80px;
            height: 80px;
            border-radius: 10px;
            margin-right: 20px;
        }
        p {
            font-size: 17px;
            font-weight: 550;
        }
    }

    audio {
        width: 100%;
        margin: 20px 0 0;
    }
}
</style>
