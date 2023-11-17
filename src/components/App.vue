<template>
    <LanguageSelection />
    {{ t("example.explain") }}
</template>

<script>
export default Vue.defineComponent({
    name: 'App',
    components: {
        "LanguageSelection": Vue.defineAsyncComponent(() => loadModule("src/components/LanguageSelection.vue", options))
    },
    setup() {
        //set up i18n
        const { t } = VueI18n.useI18n()
        return { t }
    },
})
</script>

<i18n>
    {
        "en": {
            "example": {
                "explain": "This is how you use i18n"
            }
        },
        "ja": {
            "example": {
                "explain": "こうやってi18nを使います"
            }
        }
    }
</i18n>
