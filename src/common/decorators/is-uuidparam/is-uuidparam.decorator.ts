import { HttpStatus, Param,  ParseUUIDPipe } from "@nestjs/common";

export function IsUUIDParam(property: string): ParameterDecorator {
    return Param('id', new ParseUUIDPipe({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        exceptionFactory: () => {
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'This is not a valid UUID'
            }
        }
    }))
}
