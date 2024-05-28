<template>
	<tr>
		<td width="100%" style="height: 682px; padding-left: 72px; padding-right: 72px">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td height="10" style="height: 10px; min-height: 10px; line-height: 10px"></td>
				</tr>
				<tr>
					<td>
						<table cellspacing="0" cellpadding="0" border="0">
							<tr>
								<td width="434">
									<table width="100%" border="0" cellpadding="0" cellspacing="0">
										<tr>
											<td>
												<div style="line-height: 16px; text-align: left">
													<span style="color: #2e2e48; font-weight: 500; font-family: Outfit, Arial, sans-serif; font-size: 12px; letter-spacing: 0.01em; line-height: 16px; text-align: left">
														{{ toName }}
													</span>
												</div>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<div v-for="(paragraph, i) in paragraphs" :key="i">
					<tr>
						<td height="15" style="height: 15px; min-height: 15px; line-height: 15px"></td>
					</tr>
					<tr>
						<td>
							<div style="line-height: 16px; text-align: left">
								<span style="color: #47516b; font-family: Outfit, Arial, sans-serif; font-size: 12px; letter-spacing: 0.01em; line-height: 16px; text-align: left">
									{{ paragraph }}
								</span>
							</div>
						</td>
					</tr>
					<tr>
						<td height="15" style="height: 15px; min-height: 15px; line-height: 15px"></td>
					</tr>
				</div>

				<tr>
					<td>
						<div style="line-height: 16px; text-align: left">
							<span style="color: #2e2e48; font-weight: 500; font-family: Outfit, Arial, sans-serif; font-size: 12px; letter-spacing: 0.01em; line-height: 16px; text-align: left">Mit freundlichen Grüßen,<br />{{ fromName }}</span>
						</div>
					</td>
				</tr>
				<tr>
					<td height="15" style="height: 15px; min-height: 15px; line-height: 15px"></td>
				</tr>
				<tr>
					<td>
						<table cellspacing="0" cellpadding="0" border="0">
							<tr>
								<td width="133">
									<Signature />
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td height="10" style="height: 10px; min-height: 10px; line-height: 10px"></td>
				</tr>
			</table>
		</td>
	</tr>
</template>

<script setup>
import Signature from './Signature.vue';
import Content from './Content.vue';
defineProps({
	toName: {
		type: String,
		default: 'Sehr geehrte Damen und Herren',
	},
	body: {
		type: String,
		required: true,
	},
	fromName: {
		type: String,
		default: 'Aland Mariwan',
	},
});

const paragraphs = [
	'ich wende mich mit großem Interesse und eigeninitiativ an Ihr Unternehmen, da ich von Ihrer Reputation in der Softwareentwicklung beeindruckt bin. Als Fachinformatiker für Anwendungsentwicklung mit abgeschlossener Ausbildung und praktischer Erfahrung möchte ich meine Fähigkeiten und mein Wissen gerne in einem dynamischen Teamumfeld einbringen.',
	'Nach meiner Ausbildung habe ich als Full Stack Freelancer gearbeitet. Diese Tätigkeit hat mir ermöglicht, umfangreiche Kenntnisse und Fähigkeiten in den Bereichen Backend, Datenbanken, Frontend und mobiler Entwicklung zu erwerben. Ich beherrsche verschiedene Programmiersprachen und Frameworks und lege großen Wert auf die Kombination von qualitativ hochwertigem Code mit ansprechendem Design, um innovative und benutzerfreundliche Anwendungen zu entwickeln.',
	'Da ich mich auf das Programmieren konzentrieren und weniger Buchhaltung machen möchte, strebe ich nun eine Festanstellung an und wäre begeistert, Teil Ihres Unternehmens zu werden.',
	'Als proaktiver Teamplayer mit starken Kommunikationsfähigkeiten und einem kontinuierlichen Fokus auf Innovation bin ich bereit, mein Wissen und meine Fähigkeiten einzusetzen, um qualitativ hochwertige Softwarelösungen zu entwickeln. Ich schätze die Zusammenarbeit mit anderen Entwicklern, Designern und Projektmanagern, um gemeinsam effektive Lösungen zu erarbeiten.',
	'Ich bin von Ihrem Unternehmen und dessen Erfolg überzeugt und wäre begeistert, Teil Ihres Teams zu werden und zur Weiterentwicklung innovativer Softwarelösungen beizutragen. Gerne erläutere ich Ihnen in einem persönlichen Gespräch meine Qualifikationen und meine Motivation, für Ihr Unternehmen zu arbeiten.',
	'Vielen Dank für Ihre Zeit und die Berücksichtigung meiner Bewerbung. Ich freue mich auf Ihre Rückmeldung.',
];
</script>
