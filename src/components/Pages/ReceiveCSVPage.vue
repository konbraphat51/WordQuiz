<template>
	<div id="page">
		<h1>
			{{ t("ReceiveCSVPage.Upload") }}
		</h1>
	</div>
</template>

<script>
export default {
	name: "ReceiveCSVPage",
	setup() {
		//set up i18n
		const {t} = VueI18n.useI18n()
		return {t}
	},
}
</script>

<i18n>
    {
        "en": {
            "ReceiveCSVPage": {
                "Upload": "Upload CSV"
            }
        },
        "ja": {
            "ReceiveCSVPage": {
                "Upload": "CSVをアップロード"
            }
        }
    }
</i18n>
