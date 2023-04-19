

function validate() {
    let nam = document.getElementById('uname').value;

    if (nam == "") {
        document.getElementById('nameerr').innerText="*This Field is Empty"
        return false;
    }  
    let num = document.getElementById('unumber').value;

    if (num.length > 11) {
        document.getElementById('numerr').innerText="*Phone number is too large"
        return false;
    } else if (num == ""){
        document.getElementById('numerr').innerText="*Phone number field is Empty"
        return false
    }  else if (num.length < 11 ){
        document.getElementById('numerr').innerText="*Phone number is too small"
        return false
    }
    
    let passcode = document.getElementById('upass').value;
    if(passcode == ""){
        document.getElementById("errorp").innerText = '*Password is required'
        return false
    } else if (passcode.length < 8){
        document.getElementById("errorp").innerText = '*Password must be larger than 8 characters'
        return false
    } else if (passcode.length > 15){
        document.getElementById("errorp").innerText = '*Password should by smaller than 15 characters'
        return false
    }
}
alert("Please Enter You Data")

let x = document.getElementById('formcol');
console.log(x);



