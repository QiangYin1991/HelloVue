<template>
   <div class="daily">
       <div class="daily-menu">
           <div class="daily-menu-item"
                :class="{on: type === 'recommend'}">每日推荐</div>
           <div class="daily-menu-item"
                :class="{on: type === 'daily'}"
                @click="showThemes = !showThemes">主题日报</div>
           <ul v-show="showThemes">
               <li v-for="item in themes">
                   <a :class="{ on: item.id === themeId && type === 'daily'}"
                      @click="handleToTheme(item.id)">{{ item.name }}</a>
               </li>
           </ul>
       </div>
       <div class="daily-list">
           <Item></Item>
       </div>
       <daily-article></daily-article>
   </div> 
</template>

<script>
    import $ from './libs/util';
    export default {
        data () {
            return {
                themes: [],
                showThemes: false,
                type: 'recommend',
                themeId: 0,
                list: [],
            }
        },
        methods: {
            getThemes () {
                $.ajax.get('themes').then(res => {
                    this.themes = res.others;
                });
            },
            handleToTheme (id) {
                this.type = 'daily';
                this.themeId = id;
                this.list = [];
                $.ajax.get('theme/' + id).then(res => {
                    this.list = res.stories.filter(item => item.type !== 1);
                });
            }
        },
        mounted () {
            this.getThemes();
        }
    }
</script>