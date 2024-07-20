<template>
    <div class="Timer">
        <div class="TimerBox">
            {{ time }}
       </div>
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

<style scoped>
.Timer {
    display: flex;
    justify-content: center;
}

.TimerBox {
    font-size: 2em;
    text-align: center;
    border: black;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    background-color: rgb(223, 251, 253);
    width: 7rem;
}
</style>