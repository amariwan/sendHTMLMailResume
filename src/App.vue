<script setup>
import { ref } from 'vue';
import Mail from './components/Mail.vue';
import axios from 'axios';

const form = ref({});

// Referenz auf das E-Mail-Inhaltselement
const emailContainer = ref(null);

const sendMail = async () => {
	try {
		// Abrufen des HTML-Inhalts zur Laufzeit
		const emailContent = emailContainer.value.innerHTML;
		// Konfiguration für den POST-Request
		const mailConfig = {
			to: form.value.toEmail,
			sub: form.value.sub,
			html: emailContent,
		};

		// Senden der E-Mail
		const response = await axios.post('http://localhost:4001/sendEmail', mailConfig);
		console.log('E-Mail erfolgreich gesendet:', response.data);
	} catch (error) {
		// Fehlerbehandlung, falls das Senden der E-Mail fehlschlägt
		if (error.response) {
			console.error('Fehlerantwort vom Server:', error.response.data);
		} else if (error.request) {
			console.error('Keine Antwort erhalten:', error.request);
		} else {
			console.error('Fehler beim Einrichten der Anfrage:', error.message);
		}
	}
};
</script>

<template>
	<div ref="emailContainer">
		<Mail :model-value="form" class="email-container" />
	</div>

	<div>
		<div>
			<label for="toEmail">Name:</label>
			<input id="toEmail" v-model="form.name" type="email" placeholder="Empfänger E-Mail" />
		</div>
		<div>
			<label for="toEmail">To:</label>
			<input id="toEmail" v-model="form.toEmail" type="email" placeholder="Empfänger E-Mail" />
		</div>
		<div>
			<label for="fromEmail">From:</label>
			<input id="fromEmail" v-model="form.fromEmail" type="email" placeholder="Absender E-Mail" />
		</div>
		<div>
			<label for="subject">Subject:</label>
			<input id="subject" v-model="form.sub" type="text" placeholder="Betreff" />
		</div>

		<button @click="sendMail">Send Mail</button>
	</div>
</template>

<style scoped>
/* Beispielhafte Stile */
div {
	margin-bottom: 10px;
}
label {
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
}
input {
	width: 100%;
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
}
.email-container {
	margin-bottom: 20px;
}
button {
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
button:hover {
	background-color: #0056b3;
}
</style>
