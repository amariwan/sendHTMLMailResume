const transporter = require('./mail');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

async function sendEmail(to, subject, html, attachments = []) {
	const mailOptions = {
		from: '"Aland Mariwan" <dev@tasiomind.de>',
		to: to,
		subject: subject,
		html: html,
		attachments: attachments,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: ', info.messageId);
		return { success: true, messageId: info.messageId };
	} catch (error) {
		console.error('Error sending email: ', error);
		throw error;
	}
}

app.post('/sendEmail', async (req, res) => {
	const { html, to, sub, attachments } = req.body;
	console.log(to);
	if (!html || !to || !sub) {
		return res.status(400).send('Bad Request: Missing required fields');
	}

	try {
		const result = await sendEmail(to, sub, html, attachments);
		res.status(200).send(`Message sent: ${result.messageId}`);
	} catch (error) {
		res.status(500).send(`Error sending email: ${error.toString()}`);
	}
});

app.get('/', (req, res) => {
	res.status(200).send(`Welcome to test`);
});

const PORT = 4001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
