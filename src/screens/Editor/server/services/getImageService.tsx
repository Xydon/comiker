async function getImageService(prompt: string) {
	const response = await fetch(
		"https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
		{
			headers: {
				Accept: "image/png",
				Authorization:
					"Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ inputs: prompt }),
		}
	);
	const result = await response.blob();
	return result;
}

export default getImageService;
