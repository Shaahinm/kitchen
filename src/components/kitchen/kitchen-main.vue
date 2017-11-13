<template>      
    <div class="columns">
        <div class="column" v-for="n in 4" v-bind:key="n">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                     <img src="static/card-image-1.jpg" alt="People">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">قرمه سبزی</p>
                        <p class="subtitle is-6">@شاهین</p>
                    </div>
                    </div>

                    <div class="content">
                        یک متن نوشته شده فارسی ترجیحا بلند باشد که حداقل ۲ خط را بگیرد                    
                    <br>
                    <time datetime="17/08/1396">17/08/1396</time>
                    </div>
                </div>
        </div>  
        </div>
    </div>                                                   
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

</style>

