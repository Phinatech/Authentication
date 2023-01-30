export enum HttpCode{
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500
}

interface AppErrorArgs{
    name?:string;
    isOperational?:boolean
    message:string
    httpCode:HttpCode
}

export class AppError extends Error {
  public readonly name: string;
  public readonly isOperational:boolean = true;
  public readonly httpCode:HttpCode
  constructor(args:AppErrorArgs){
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || "Error";
    this.httpCode = args.httpCode;
   
//Checking if is it operational or developer error
//This is Shoing if the operational error is not true Then its a developer error
    if(args.isOperational !== undefined){
        this.isOperational = args.isOperational
    }
    Error.captureStackTrace(this)
  }
}
//A class  is used to create individual instance for an object. ie its use to build an instance of an object we are using a lass because we want to define a centeral error system to pass in all errors. A constructors helps us to create the instances inside a class. A method is a function inside  a class