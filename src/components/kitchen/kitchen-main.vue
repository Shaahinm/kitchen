<template>  

    <md-layout md-gutter>        
        <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100">            
           <md-card v-for="n in 4">               
                <md-card-media>
                    <img src="static/card-image-1.jpg" alt="People">
                </md-card-media>

                <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                </md-card-header>

                <md-card-expand>
                    <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                        <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                    </md-card-actions>

                    <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                    </md-card-content>
                </md-card-expand>
            </md-card>
        </md-layout> 
                                     
    </md-layout>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  props: ["favs", "recepie"]
};
</script>
<style lang="scss" scoped>
.md-card{
    margin: 8px;
    max-width: 300px;
}
</style>

