export default function guardrail(mathFunction) {
  const results = [];
  const successMessage = 'Guardrail was processed';

  try {
    const result = mathFunction();
    results.push(result, successMessage);
  } catch (error) {
    results.push(`Error: ${error.message}`, successMessage);
  }

  return results;
}
