export const checkValidData = (name,email,password)=>{
    const isNameValid = /^[a-zA-Z ]+$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if (!isNameValid && name != null) return "Name is not valid";
    if (!isEmailValid) return "Email id is not valid";
    if (!isPasswordValid) return "Password is not valid";
    return null;
    
}