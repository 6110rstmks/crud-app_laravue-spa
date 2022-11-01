<template>
    <h1>Hello</h1>
    <h2>{{ title }}</h2>
</template>

<!-- <script>
export default {
    setup: () => ({
        title: 'how to install iuouuoiuo'
    })
}
</script> -->

<script>
export default {
    setup() {
        const title = 'Welcome to the example page'
        return {
            title
        }
    }

}
</script>
