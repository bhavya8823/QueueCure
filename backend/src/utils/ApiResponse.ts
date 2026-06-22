class ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;

  constructor(message: string, data: T | null = null, success: boolean = true) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
