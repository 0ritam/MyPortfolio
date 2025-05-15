// '@/error/api-error.ts'
export class ApiError extends Error {
  status: number;
  url: string;

  constructor({
    message,
    url,
    status
  }: {
    message: string;
    url: string;
    status: number;
  }) {
    super(`Error "${message}" on ${url}, status code ${status}.`);
    this.name = "ApiError";
    this.status = status;
    this.url = url;
  }
}
