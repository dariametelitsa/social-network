export const required = (value: string) => {
    if(value) return undefined
    return "Fiels is requires";
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
