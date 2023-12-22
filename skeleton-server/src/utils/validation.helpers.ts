export function validateLoginData(data: any): data is { email: string, password: string, service: string } {
  return (
    typeof data === 'object' &&
    typeof data.email === 'string' &&
    typeof data.password === 'string' &&
    typeof data.service === 'string'
  );
}