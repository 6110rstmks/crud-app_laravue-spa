<template>
    <p>koreha APp.vue</p>
    <p>{{ title }}</p>

    <router-link to="/about">About</router-link>

</template>

<script>
export default {
    setup() {
        const title = 'youidonnnnnn!!!!!'
        return {
            title
        }
    }

}
</script>
