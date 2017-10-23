const errors = [
    { 'key': 400, 'msg': 'در حال حاضر قادر به انجام درخواست شما نیستیم'},
    { 'key': 402, 'msg': 'سلاasdasdsaم'}
];
export class ServerError {
    static getErrorByNumber(errorNumber) {
        return errors.find((e) => e.key == errorNumber).msg
        
    }
}
