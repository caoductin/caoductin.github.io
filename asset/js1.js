
function dangki(){
    // // const form = document.getElementById('#form').vaule;
    var username = document.getElementById("username").value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     const message = document.getElementById('message').value;
   
    const aCong= email.indexOf("@");
	const dauCham = email.lastIndexOf(".");
    if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
		alert("Email bạn điền không chính xác");
		return false;
	}
    if(password.length <8){
        alert("Mật khẩu phải lớn hơn 8 kí tự")
        return false;
    }
    if(message.length<20){
        alert("Message phải lớn hơn 20 kí tự")
        return false;
    }
    
        alert("Gửi Thành Công")
   


}