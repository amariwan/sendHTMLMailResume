<script setup>
import { toRefs, defineProps } from 'vue';
import Header from './Header.vue';
import Body from './Body.vue';
const props = defineProps({
	modelValue: {
		required: true,
	},
});

const { modelValue } = toRefs(props);
</script>

<template>
	<div width="100%" style="background-color: #d6d6d6; margin: 0; padding: 0 !important; mso-line-height-rule: exactly">
		<table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td valign="top" align="center">
					<table bgcolor="#ffffff" style="margin: 0 auto" align="center" id="brick_container" cellspacing="0" cellpadding="0" border="0" width="650" class="email-container">
						<tr>
							<td width="650">
								<table cellspacing="0" cellpadding="0" border="0">
									<tr>
										<td width="650" style="background-color: #ffffff" bgcolor="#ffffff">
											<table width="100%" border="0" cellpadding="0" cellspacing="0">
												<Header v-model="modelValue" />
												<Body v-model="modelValue" />
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</div>
</template>

<style scoped></style>
