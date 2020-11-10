<template>
    <div class="vh font-exo w-full">
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    const DEFAULT_TRANSITION = 'fade'

    export default {
        data() {
            return {
                transitionName: DEFAULT_TRANSITION,
            }
        },
        created() {
            this.$router.beforeEach((to, from, next) => {
                let transitionName = to.meta.transitionName

                if (transitionName === 'slide') {
                    const toDepth = to.path.split('/').length
                    const fromDepth = from.path.split('/').length
                    transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                }

                this.transitionName = transitionName || DEFAULT_TRANSITION

                next()
            })
        },
    }
</script>