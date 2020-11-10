<template>
    <div class="flex flex-col w-full h-full align-middle justify-center relative">
        <div
            class="absolute inset-0"
            @contextmenu.prevent=""
            @touchstart="touchstart()"
            @touchend="touchend()"
        ></div>
        <div>
            <transition
                name="custom-classes-transition"
                enter-active-class="animate__animated animate__fastest animate__fadeZoomIn"
                leave-active-class=""
                mode="out-in"
            >
                <img
                    src="assets/images/edouard.png"
                    class="mx-auto w-64"
                    v-if="!animation"
                    key="edouard"
                >

                <img
                    src="assets/images/edouard_chan.png"
                    class="mx-auto w-64"
                    v-if="animation"
                    key="edouard_chan"
                >

                <!-- <keyframes auto-run="false" ref="animation" v-if="animation">
                </keyframes> -->
            </transition>
        </div>

        <!-- Logo Bar -->
        <div class="absolute inset-0 bottom-auto right-auto" style="top: 2rem;">
            <button
                @click="$router.go(-1)"
                class="focus:outline-none px-2 py-2 text-xs font-bold button button-magenta"
            >
                edouchan!
            </button>
        </div>

        <!-- Toolbar Left -->
        <div class="absolute inset-0 top-auto right-auto" style="bottom: 2rem;">
            <button
                @click="$router.go(-1)"
                class="focus:outline-none px-2 py-2 text-xs button button-magenta"
            >
                <i class="fas fa-arrow-circle-left"></i> back
            </button>
        </div>

        <!-- Toolbar Right -->
        <div class="absolute inset-0 top-auto left-auto" style="bottom: 2rem;">
            <button
                @click="mute()"
                class="focus:outline-none px-2 py-2 text-xs button button-magenta"
            >
                <i class="fas fa-fw fa-volume-up" v-show="volume == 1"></i>
                <i class="fas fa-fw fa-volume-mute" v-show="volume == 0"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import { Howl, Howler } from 'howler';

    export default {
        data() {
            return {
                volume: 1,
                animation: false,
                howl: undefined,
                bgm: undefined,
                yum: 0,
            }
        },
        mounted() {
            this.howl = new Howl({
                src: ['assets/sounds/sprite.mp3'],
                sprite: {
                    yum1: [2000, 500],
                    yum2: [3100, 500],
                    yum3: [0, 1210],
                    yum4: [4000, 500],
                    // yum5: [5000, 10000]
                }
            });
        },
        methods: {
            mute() {
                if (this.volume == 1) this.volume = 0;
                else this.volume = 1;

                this.howl.volume(this.volume);
            },

            touchstart() {
                if (this.animation == false) {
                    if (this.yum == 4) { this.yum = 0 }
                    this.yum++;

                    this.howl.play('yum' + this.yum);

                    // Vibrate
                    switch (this.yum) {
                        case 1:
                        case 2:
                            window.navigator.vibrate(50);
                            break;
                        case 3:
                            window.navigator.vibrate([100,30,50,30,100,30,70]);
                            break;
                    }
                }

                this.animation = true;
                // this.$refs.animation.stop = false;
            },

            touchend() {
                this.animation = false;
                // this.$refs.animation.stop = true;
            },
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
</script>