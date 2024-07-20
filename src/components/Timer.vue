<template>
    <div class="Timer">
        <div class="TimerBox" ref="TimerBox">
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
            danger: false
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

            if (seconds >= 3) {
                this.danger = true
            } else {
                this.danger = false
            }
        },
        ResetTime() {
            this.timeStart = Date.now()
        }
    },
    watch: {
        danger(newValue) {
            if (newValue) {
                this.$refs.TimerBox.style.backgroundColor = "#ffa099"
            } else {
                this.$refs.TimerBox.style.backgroundColor = "#dffbfd"
            }
        }
    }
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
    background-color: #dffbfd;
    width: 7rem;
}
</style>