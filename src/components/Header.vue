<script setup>
import { toRefs, defineProps } from 'vue';

const name = 'Aland Mariwan';
const title = 'Software developer';
const email = 'mailto:dev@tasiomind.de';
const homepage = '//me.tasiomind.de';
const phoneNumber = 'tel:+491727134842';
const address = 'Frechen, germany';

const props = defineProps({
	modelValue: {
		required: true,
	},
});

const { modelValue } = toRefs(props);

console.log(modelValue.value.name);
</script>

<template>
	<tr>
		<td width="650">
			<table
				style="
					background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTk0IiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDU5NCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF83MTRfMTc0OSkiPgo8cmVjdCB3aWR0aD0iNTk0IiBoZWlnaHQ9IjE2MCIgZmlsbD0id2hpdGUiLz4KPGcgb3BhY2l0eT0iMC4xIiBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzcxNF8xNzQ5KSI+CjxyZWN0IHg9IjIwNCIgeT0iLTc2IiB3aWR0aD0iMTgyIiBoZWlnaHQ9IjEwNiIgcng9IjUzIiBmaWxsPSIjNTE2Q0Y3Ii8+CjwvZz4KPGcgb3BhY2l0eT0iMC4xIiBmaWx0ZXI9InVybCgjZmlsdGVyMV9mXzcxNF8xNzQ5KSI+CjxyZWN0IHg9IjIwNCIgeT0iNzkiIHdpZHRoPSIxOTQiIGhlaWdodD0iMjAxIiByeD0iOTciIGZpbGw9IiM0QUMwNkYiLz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjEiIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2ZfNzE0XzE3NDkpIj4KPHJlY3QgeD0iNDYzIiB5PSItODEiIHdpZHRoPSIxOTgiIGhlaWdodD0iMTAwIiByeD0iNTAiIGZpbGw9IiM0QUMwNkYiLz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjEiIGZpbHRlcj0idXJsKCNmaWx0ZXIzX2ZfNzE0XzE3NDkpIj4KPHJlY3QgeD0iMzMwIiB5PSItMTkiIHdpZHRoPSIxMzkiIGhlaWdodD0iMTEzIiByeD0iNTYuNSIgZmlsbD0iIzUxNkNGNyIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjRfZl83MTRfMTc0OSkiPgo8cmVjdCB4PSI1MTAiIHk9IjUxIiB3aWR0aD0iMTAyIiBoZWlnaHQ9IjExMyIgcng9IjUxIiBmaWxsPSIjOTI1MUY3Ii8+CjwvZz4KPGcgb3BhY2l0eT0iMC4xIiBmaWx0ZXI9InVybCgjZmlsdGVyNV9mXzcxNF8xNzQ5KSI+CjxyZWN0IHg9Ii0xMjgiIHk9Ii01OCIgd2lkdGg9IjIwNCIgaGVpZ2h0PSIxODMiIHJ4PSI5MS41IiBmaWxsPSIjQzY5NkZDIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzcxNF8xNzQ5IiB4PSIxNDAiIHk9Ii0xNDAiIHdpZHRoPSIzMTAiIGhlaWdodD0iMjM0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMyIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfNzE0XzE3NDkiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZl83MTRfMTc0OSIgeD0iMTQwIiB5PSIxNSIgd2lkdGg9IjMyMiIgaGVpZ2h0PSIzMjkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzIiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl83MTRfMTc0OSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9mXzcxNF8xNzQ5IiB4PSIzOTkiIHk9Ii0xNDUiIHdpZHRoPSIzMjYiIGhlaWdodD0iMjI4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMyIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfNzE0XzE3NDkiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjNfZl83MTRfMTc0OSIgeD0iMjY2IiB5PSItODMiIHdpZHRoPSIyNjciIGhlaWdodD0iMjQxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMyIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfNzE0XzE3NDkiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjRfZl83MTRfMTc0OSIgeD0iNDQ2IiB5PSItMTMiIHdpZHRoPSIyMzAiIGhlaWdodD0iMjQxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMyIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfNzE0XzE3NDkiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjVfZl83MTRfMTc0OSIgeD0iLTE5MiIgeT0iLTEyMiIgd2lkdGg9IjMzMiIgaGVpZ2h0PSIzMTEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzIiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl83MTRfMTc0OSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJjbGlwMF83MTRfMTc0OSI+CjxyZWN0IHdpZHRoPSI1OTQiIGhlaWdodD0iMTYwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=');
					padding: 20px;
					background-size: 100% auto;
				"
				width="100%"
				cellpadding="0"
				cellspacing="0"
				border="0"
			>
				<tr>
					<td valign="top" align="center">
						<table style="margin: 0 auto" align="center" id="brick_container" cellspacing="0" cellpadding="0" border="0" width="650" class="email-container">
							<tr>
								<td width="492" style="vertical-align: middle; padding-left: 30px; padding-right: 72px">
									<table width="100%" border="0" cellpadding="0" cellspacing="0">
										<tr>
											<td>
												<table cellspacing="0" cellpadding="0" border="0">
													<tr>
														<td style="vertical-align: middle">
															<table cellspacing="0" cellpadding="0" border="0">
																<tr>
																	<td align="center" style="vertical-align: middle">
																		<table width="100%" border="0" cellpadding="0" cellspacing="0">
																			<tr>
																				<td style="vertical-align: middle" width="32" align="center">
																					<img src="https://me.tasiomind.de/src/images/me.png" width="32" border="0" style="min-width: 32px; width: 32px; border-radius: 100px; height: auto; display: block" />
																				</td>
																				<td style="width: 16px; min-width: 16px" width="16"></td>
																				<td style="vertical-align: middle">
																					<table cellspacing="0" cellpadding="0" border="0">
																						<tr>
																							<td style="vertical-align: middle; height: 40px">
																								<table width="100%" border="0" cellpadding="0" cellspacing="0">
																									<tr>
																										<td>
																											<table cellspacing="0" cellpadding="0" border="0">
																												<tr>
																													<td style="vertical-align: middle">
																														<div style="line-height: 20px; text-align: left">
																															<span
																																style="
																																	background-image: linear-gradient(to right, #a478e8 0%, #516cf7 100%);
																																	-webkit-background-clip: text;
																																	-webkit-text-fill-color: transparent;
																																	-webkit-animation: hue 60s infinite linear;
																																	font-weight: 500;
																																	font-family: Outfit, Arial, sans-serif;
																																	font-size: 12px;
																																	letter-spacing: 0.01em;
																																	line-height: 16px;
																																	text-align: left;
																																	font-weight: 500;
																																	font-family: Outfit, Arial, sans-serif;
																																	font-size: 16px;
																																	letter-spacing: -0.02em;
																																	line-height: 20px;
																																	text-align: left;
																																"
																																>{{ modelValue.name }}</span
																															>
																														</div>
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>
																									<tr>
																										<td height="4" style="height: 4px; min-height: 4px; line-height: 4px"></td>
																									</tr>
																									<tr>
																										<td style="vertical-align: middle">
																											<div style="line-height: 16px; text-align: left">
																												<span
																													style="
																														background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
																														-webkit-background-clip: text;
																														-webkit-text-fill-color: transparent;
																														-webkit-animation: hue 60s infinite linear;
																														font-weight: 500;
																														font-family: Outfit, Arial, sans-serif;
																														font-size: 12px;
																														letter-spacing: 0.01em;
																														line-height: 16px;
																														text-align: left;
																													"
																												>
																													{{ title }}</span
																												>
																											</div>
																										</td>
																									</tr>
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
														</td>
													</tr>
												</table>
											</td>
										</tr>
										<tr>
											<td height="24" style="height: 24px; min-height: 24px; line-height: 24px"></td>
										</tr>
										<tr>
											<td style="vertical-align: middle" width="100%">
												<table width="100%" cellspacing="0" cellpadding="0" border="0">
													<tr>
														<td width="100%" style="vertical-align: middle">
															<table border="0" cellpadding="0" cellspacing="0">
																<tr>
																	<td style="vertical-align: middle">
																		<table cellspacing="0" cellpadding="0" border="0">
																			<tr>
																				<td style="vertical-align: middle">
																					<table width="100%" border="0" cellpadding="0" cellspacing="0">
																						<tr>
																							<td style="vertical-align: middle" width="16">
																								<img
																									style="width: 10px; height: 10px; border-radius: 100px; background-color: #e2e6ef; padding: 3px"
																									src="data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M8.33334 7.33329H1.66668C1.20644 7.33329 0.833344 6.9602 0.833344 6.49996V1.46371C0.852764 1.01769 1.22023 0.666204 1.66668 0.666626H8.33334C8.79358 0.666626 9.16668 1.03972 9.16668 1.49996V6.49996C9.16668 6.9602 8.79358 7.33329 8.33334 7.33329ZM1.66668 2.27829V6.49996H8.33334V2.27829L5.00001 4.49996L1.66668 2.27829ZM2.00001 1.49996L5.00001 3.49996L8.00001 1.49996H2.00001Z' fill='%2379819A' /%3E%3C/svg%3E"
																								/>
																							</td>
																							<td style="width: 8px; min-width: 8px" width="8"></td>
																							<td style="vertical-align: middle">
																								<table cellspacing="0" cellpadding="0" border="0">
																									<tr>
																										<td>
																											<table width="100%" border="0" cellpadding="0" cellspacing="0">
																												<tr>
																													<td>
																														<table cellspacing="0" cellpadding="0" border="0">
																															<tr>
																																<td>
																																	<div style="line-height: 10px; text-align: left">
																																		<span style="color: #79819a; font-family: DM Sans, Arial, sans-serif; font-size: 8px; line-height: 10px; text-align: left">Homepage</span>
																																	</div>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																												<tr>
																													<td height="2" style="height: 2px; min-height: 2px; line-height: 2px"></td>
																												</tr>
																												<tr>
																													<td>
																														<div style="line-height: 12px; text-align: left">
																															<span style="color: #47516b; font-family: Outfit, Arial, sans-serif; font-size: 9px; letter-spacing: 0.02em; line-height: 12px; text-align: left">
																																<a style="color: #47516b; text-decoration: none" :href="homepage" target="_blank">
																																	{{ homepage }}
																																</a>
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
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																	<td style="width: 32px; min-width: 32px" width="32"></td>
																	<td style="vertical-align: middle">
																		<table cellspacing="0" cellpadding="0" border="0">
																			<tr>
																				<td style="vertical-align: middle">
																					<table width="100%" border="0" cellpadding="0" cellspacing="0">
																						<tr>
																							<td style="vertical-align: middle" width="16">
																								<img
																									style="width: 10px; height: 10px; border-radius: 100px; background-color: #e2e6ef; padding: 3px"
																									src="data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M8.33334 7.33329H1.66668C1.20644 7.33329 0.833344 6.9602 0.833344 6.49996V1.46371C0.852764 1.01769 1.22023 0.666204 1.66668 0.666626H8.33334C8.79358 0.666626 9.16668 1.03972 9.16668 1.49996V6.49996C9.16668 6.9602 8.79358 7.33329 8.33334 7.33329ZM1.66668 2.27829V6.49996H8.33334V2.27829L5.00001 4.49996L1.66668 2.27829ZM2.00001 1.49996L5.00001 3.49996L8.00001 1.49996H2.00001Z' fill='%2379819A' /%3E%3C/svg%3E"
																								/>
																							</td>
																							<td style="width: 8px; min-width: 8px" width="8"></td>
																							<td style="vertical-align: middle">
																								<table cellspacing="0" cellpadding="0" border="0">
																									<tr>
																										<td>
																											<table width="100%" border="0" cellpadding="0" cellspacing="0">
																												<tr>
																													<td>
																														<table cellspacing="0" cellpadding="0" border="0">
																															<tr>
																																<td>
																																	<div style="line-height: 10px; text-align: left">
																																		<span style="color: #79819a; font-family: DM Sans, Arial, sans-serif; font-size: 8px; line-height: 10px; text-align: left">Email</span>
																																	</div>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																												<tr>
																													<td height="2" style="height: 2px; min-height: 2px; line-height: 2px"></td>
																												</tr>
																												<tr>
																													<td>
																														<div style="line-height: 12px; text-align: left">
																															<span style="color: #47516b; font-family: Outfit, Arial, sans-serif; font-size: 9px; letter-spacing: 0.02em; line-height: 12px; text-align: left"
																																><a style="color: #47516b; text-decoration: none" :href="email" target="_blank">{{ email }}</a></span
																															>
																														</div>
																													</td>
																												</tr>
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
																	</td>
																	<td style="width: 32px; min-width: 32px" width="32"></td>
																	<td style="vertical-align: middle">
																		<table cellspacing="0" cellpadding="0" border="0">
																			<tr>
																				<td style="vertical-align: middle">
																					<table width="100%" border="0" cellpadding="0" cellspacing="0">
																						<tr>
																							<td style="" width="16">
																								<img
																									style="width: 10px; height: 10px; border-radius: 100px; background-color: #e2e6ef; padding: 3px"
																									src="data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M7.91562 8.33329C4.36078 8.33833 1.66287 5.60808 1.66667 2.08434C1.66667 1.85422 1.85322 1.66663 2.08334 1.66663H3.18307C3.38956 1.66663 3.56497 1.81835 3.59529 2.0226C3.66796 2.51212 3.81049 2.9887 4.01854 3.43775L4.06135 3.53017C4.12089 3.65867 4.08053 3.81135 3.96528 3.89366C3.62471 4.13687 3.49455 4.62644 3.75987 5.00844C4.09282 5.48781 4.51252 5.90742 4.99178 6.24022C5.37376 6.50546 5.86325 6.37532 6.10646 6.03481C6.18882 5.9195 6.34159 5.87913 6.47017 5.93869L6.56216 5.9813C7.01124 6.18933 7.48785 6.33187 7.97743 6.40452C8.18169 6.43484 8.33333 6.61024 8.33333 6.81674V7.91662C8.33333 8.14674 8.14633 8.33328 7.91621 8.33328L7.91562 8.33329Z' fill='%2379819A' /%3E%3C/svg%3E"
																								/>
																							</td>
																							<td style="width: 8px; min-width: 8px" width="8"></td>
																							<td style="vertical-align: middle">
																								<table cellspacing="0" cellpadding="0" border="0">
																									<tr>
																										<td>
																											<table width="100%" border="0" cellpadding="0" cellspacing="0">
																												<tr>
																													<td>
																														<table cellspacing="0" cellpadding="0" border="0">
																															<tr>
																																<td>
																																	<div style="line-height: 10px; text-align: left">
																																		<span style="color: #79819a; font-family: DM Sans, Arial, sans-serif; font-size: 8px; line-height: 10px; text-align: left">Phone</span>
																																	</div>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																												<tr>
																													<td height="2" style="height: 2px; min-height: 2px; line-height: 2px"></td>
																												</tr>
																												<tr>
																													<td>
																														<div style="line-height: 12px; text-align: left">
																															<span style="color: #47516b; font-family: Outfit, Arial, sans-serif; font-size: 9px; letter-spacing: 0.02em; line-height: 12px; text-align: left"
																																><a style="color: #47516b; text-decoration: none" :href="phoneNumber" target="_blank">{{ phoneNumber }}</a></span
																															>
																														</div>
																													</td>
																												</tr>
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
																	</td>
																	<td style="width: 32px; min-width: 32px" width="32"></td>
																	<td style="vertical-align: middle">
																		<table cellspacing="0" cellpadding="0" border="0">
																			<tr>
																				<td style="vertical-align: middle">
																					<table width="100%" border="0" cellpadding="0" cellspacing="0">
																						<tr>
																							<td style="vertical-align: middle" width="16">
																								<img
																									style="width: 10px; height: 10px; border-radius: 100px; background-color: #e2e6ef; padding: 3px"
																									src="data:image/svg+xml,%3Csvg width='6' height='8' viewBox='0 0 6 8' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M3 7.74996C2.47373 7.30106 1.98591 6.80893 1.54167 6.27871C0.875003 5.48246 0.0833362 4.29663 0.0833362 3.16663C0.0827453 1.98644 0.793439 0.922206 1.88378 0.470542C2.97412 0.0188784 4.2292 0.26881 5.06334 1.10371C5.61186 1.6498 5.91913 2.39262 5.91669 3.16663C5.91669 4.29663 5.125 5.48246 4.45834 6.27871C4.01409 6.80893 3.52628 7.30106 3 7.74996ZM3 1.91663C2.55342 1.91663 2.14076 2.15488 1.91747 2.54163C1.69418 2.92838 1.69418 3.40488 1.91747 3.79163C2.14076 4.17838 2.55342 4.41663 3 4.41663C3.69036 4.41663 4.25 3.85698 4.25 3.16663C4.25 2.47627 3.69036 1.91663 3 1.91663Z' fill='%2379819A' /%3E%3C/svg%3E"
																								/>
																							</td>
																							<td style="width: 8px; min-width: 8px" width="8"></td>
																							<td style="vertical-align: middle">
																								<table cellspacing="0" cellpadding="0" border="0">
																									<tr>
																										<td>
																											<table width="100%" border="0" cellpadding="0" cellspacing="0">
																												<tr>
																													<td>
																														<table width="100%" border="0" cellpadding="0" cellspacing="0">
																															<tr>
																																<td>
																																	<table cellspacing="0" cellpadding="0" border="0">
																																		<tr>
																																			<td>
																																				<div style="line-height: 10px; text-align: left">
																																					<span style="color: #79819a; font-family: DM Sans, Arial, sans-serif; font-size: 8px; line-height: 10px; text-align: left">Address</span>
																																				</div>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																															<tr>
																																<td height="2" style="height: 2px; min-height: 2px; line-height: 2px"></td>
																															</tr>
																															<tr>
																																<td>
																																	<div style="line-height: 12px; text-align: left">
																																		<span style="color: #47516b; font-family: Outfit, Arial, sans-serif; font-size: 9px; letter-spacing: 0.02em; line-height: 12px; text-align: left">{{
																																			address
																																		}}</span>
																																	</div>
																																</td>
																															</tr>
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
																				</td>
																			</tr>
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
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</template>

<style scoped></style>
