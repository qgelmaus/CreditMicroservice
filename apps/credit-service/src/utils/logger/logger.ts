export function logRequest({
  operationName,
  query,
  variables,
}: {
  operationName: string | undefined;
  query: string | undefined;
  variables: any;
}) {
  const time = new Date().toISOString();
  console.log(`\n[${time}] Incoming GraphQL Request`);
  console.log(`Operation: ${operationName ?? "Unknown"}`);
  if (variables && Object.keys(variables).length > 0) {
    console.log("Variables:", JSON.stringify(variables, null, 2));
  }
  console.log("–––––––––––––––––––––––––––––––––––––");
}
