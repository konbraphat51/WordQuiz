<template>
    <div id="Timer">
        {{ time }}
    </div>
</template>

<script>
export default {
    name: "Timer",
    data() {
        return {
            time: "",
            timeStart: 0,
            timer: null,
        }
    },
    mounted() {
        this.timeStart = Date.now()

        this.timer = setInterval(() => {
            this.UpdateTime()
        }, 10)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        UpdateTime() {
            const now = Date.now()
            const diff = now - this.timeStart
            const seconds = diff / 1000
            this.time = seconds.toFixed(2)
        },
    },
}
</script>