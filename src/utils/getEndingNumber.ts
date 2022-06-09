export const getEndingNumber = (num: number) =>{
    const lastLetterNumber = num%10
    switch (lastLetterNumber){
        case 1: return ""
        case 2:
        case 3: 
        case 4: return "а"
        default: return "ов"
    }
}