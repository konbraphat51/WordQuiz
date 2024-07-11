<template>
	<div id="page">
		<h1>
			{{ t("ReceiveCSVPage.Upload") }}
		</h1>

		<input id="CsvInputField" type="file" accept=".csv" />
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

<style scoped>
#CsvInputField {
	margin-top: 20px;
	width: 100%;
	height: 500px;
	font-size: 20px;
	text-align: center;
	border: 2px solid #000;
	border-radius: 5px;
	background-color: #f0f0f0;
	color: #000;
	cursor: pointer;
}
</style>
