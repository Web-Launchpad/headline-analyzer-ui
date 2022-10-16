export function isNotEmpty(text: string | undefined | null): text is string {
  return text !== undefined && text !== "" && text !== null;
}
