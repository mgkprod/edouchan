<template>
    <div class="flex flex-col text-center align-center justify-center bg-background-image w-full h-full" style="background-image: url(assets/images/background.jpg)">
        <img src="assets/images/logo.png" class="mx-auto h-56 w-56 animate__animated animate__tada">
        <div class="h-16"><!-- Separator --></div>
        <router-link to="/game" tag="button" class="text-shadow focus:outline-none font-bold italic text-2xl mb-4 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75">Play</router-link>
        <router-link to="/about" tag="button" class="text-shadow focus:outline-none font-bold italic text-2xl mb-4 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75">About</router-link>
        <div class="h-16"><!-- Separator --></div>
        <div class="text-sm text-white opacity-25">
            &copy; 2020 - SucresWare - V1.0.0
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>