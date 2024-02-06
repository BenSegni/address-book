export interface AddressErrorMessage {
    status: string;
    errorData: ErrorData[];
}

export interface ErrorData {
    message: string;
}

export class ErrorMessageMapper {
    public static map(data: any): AddressErrorMessage {
        return {
            status: `Hey!!!! ${data.statusText}!!!`,
            errorData: this.arrayMap(data)
        }
    }

    public static errorMessageMap(data: any):ErrorData {
        return {
            message: data.errorMessage
        }
    }

    public static arrayMap(data: any): ErrorData[] {
        if(!Array.isArray(data.error)) return [];
        return data.error.map((data: any) => ErrorMessageMapper.errorMessageMap(data))
    }
}