
  $(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();

var email = $("#email").val();
var mobile = $("#mobile").val();
var qualification = $("#qualification").val();
var gender = $("#gender").val();
var address = $("#address").val();
var flag = true;
var regex = /^[a-zA-Z\s]+$/;  
if(name=='')
{
            alert("Please Enter Name");

            flag = false;
            return false;
}else if(regex.test(name) === false) {
           alert("Please Enter valid Name");
           flag = false;
           return false;

}
if(email=='')
{
          alert("Please Enter Email");
          flag = false;
          return false;
}else{
  var regex = /^\S+@\S+\.\S+$/;
  if(regex.test(email) === false) {
           alert("Please Enter valid email");
           flag = false;
           return false

        }
}
if(qualification=='')
{
            alert("Please Enter qualification");
            flag = false;
            return false;
}
if(gender=='')
{
            alert("Please Enter Gender");
            flag = false;
            return false;
}

if(flag){

  var data = { NAME :name,EMAIL :email,MOBILE :mobile,QUALIFICATION :qualification,GENDER :gender,ADDRESS :address};
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "InsertUser.php",
data: data,
cache: false,
success: function(result){
alert(result);
}
});
}
return false;
});
});

  $(document).on('click','#showData',function(e){

      $.ajax({    
        type: "GET",
        url: "getUser_list.php",             
        dataType: "html",                  
        success: function(data){
        console.log(data);                    
            $("#table-container").html(data); 
           
        }
    });
});
