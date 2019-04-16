const isString = string => typeof string === "string" || string instanceof String

export const validateString = (string) => {
    if (!isString(string)) throw Error("Action payload must be of type String")
}
