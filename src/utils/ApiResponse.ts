class ApiResponse {
    static success(data, message = 'Operation successful') {
        return {
            status: 'success',
            message,
            data
        };
    }

    static paginated(data, total, page, limit) {
        return {
            status: 'success',
            data,
            pagination: {
                total,
                page,
                limit
            }
        };
    }

    static error(message = 'An error occurred') {
        return {
            status: 'error',
            message
        };
    }

    static validationError(errors) {
        return {
            status: 'validation_error',
            message: 'Validation failed',
            errors
        };
    }
}

export default ApiResponse;