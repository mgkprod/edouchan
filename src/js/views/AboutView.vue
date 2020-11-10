<template>
    <div class="flex flex-col w-full h-full text-center align-middle justify-center relative bg-black text-white">
        <div class="p-4">
            <div>
                <img src="assets/images/edouard.png" class="h-12 inline animate__animated animate__fastest animate__spinInLeft" style="animation-delay: 300ms;">
                <img src="assets/images/edouard.png" class="h-12 inline animate__animated animate__fastest animate__spinInLeft" style="animation-delay: 200ms;">
                <img src="assets/images/edouard.png" class="h-12 inline animate__animated animate__fastest animate__spinInLeft" style="animation-delay: 100ms;">
            </div>

            <span class="font-bold">edouchan!</span> V1.0.0
        </div>

        <!-- Logo Bar -->
        <div class="absolute inset-0 z-10 bottom-auto right-auto" style="top: 2rem;">
            <button
                @click="$router.go(-1)"
                class="focus:outline-none px-2 py-2 text-xs font-bold button button-magenta"
            >
                edouchan!
            </button>
        </div>

        <!-- Toolbar Left -->
        <div class="absolute inset-0 z-10 top-auto right-auto" style="bottom: 2rem;">
            <button
                @click="$router.go(-1)"
                class="focus:outline-none px-2 py-2 text-xs button button-magenta"
            >
                <i class="fas fa-arrow-circle-left"></i> back
            </button>
        </div>

        <div class="absolute inset-0">
            <bouncing-dvd></bouncing-dvd>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>