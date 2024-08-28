
export const updateObjectInArray = <T extends {[objPropName: string]: any}>(items: Array<T>, itemId: number, objPropName: keyof T, newObjValue: any): Array<T> => {
    return items.map(u => {
        if(u[objPropName] === itemId) {
            return {...u, objPropName: newObjValue}
        }
        return u;
    })
}
