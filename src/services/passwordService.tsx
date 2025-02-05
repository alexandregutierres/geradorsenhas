export default function generatePassword() {
    let password: string = ''

    let characters: string = 'Aa@#$123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let passWordLength = 15

    for(let index = 0; index < passWordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )

    }


    return password
}