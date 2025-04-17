<script>
export default {
    setup(){
        return {
            message: 'hello',
            greetings: 'welcome',
            display: 'binding',
        }
    }
}
</script>

<template>
    <h1 class="text-blue-500 font-semibold py-2">About page</h1>

    <div id="app" class="py-4">
        <p class="text-sky-400"> 1 {{message}}</p>
        <p class="text-sky-400"> 2 {{greetings}}</p>
        <p class="text-sky-400"> 3 {{display}}</p>
    </div>

</template>

