<template>
    <article class="message is-warning is-small">
        <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>
</template>
<script>
export default {
  props: ["title", "body"]  
};
</script>

