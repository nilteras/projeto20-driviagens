export function errorConflitct (resource){
    return {
        type: "conflict",
        message: `${resource} existente`
    }
}