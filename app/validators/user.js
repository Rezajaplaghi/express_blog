exports.create = (request)=>{
    const errors = [];
    if(request.titel === ""){
        errors.push('نام نمی تواند خالی باشد');
    };
    if(request.slug === ""){
        errors.push('ایمیل نمی تواند خالی باشد');
    };
    if(request.content === ""){
        errors.push('کلمه عبور نمی تواند خالی باشد');
    };
    return errors;
}