export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "cyberpunk cat",
		};

		const response = await env.AI.run(
			"@cf/black-forest-labs/flux-2-klein-9b",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
