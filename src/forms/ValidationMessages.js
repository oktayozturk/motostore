
export const GetMessages = (element) => {
    const messages = []
    
    if(element.validity.valueMissing){
        messages.push('This field must be filled')
    }
    
    if(element.validity.typeMismatch) {
        messages.push('Invalid ' + element.type)
    }

    return messages
}