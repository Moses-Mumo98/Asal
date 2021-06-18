
        $(function() { 
            if (document.myform.first_name.value == '')
         { alert('Please fill in your first name!');return false; } 
         else if (document.myform.last_name.value == '')
          { alert('Please fill in your last name!'); return false; } 
         else if (document.myform.email.value == '') 
         { alert('Please fill in your email address!'); 
         return false;
         }
          else if (document.myform.phone_number.value == '')
           { alert('Please fill in your phone number!');
            return false;
         } 
          else if (document.myform.user_type.value == '') 
          { alert('Please fill in your relevant user type!');
           return false;
        }
           else if (document.myform.username.value == '')
            { alert('Please fill in your relevant username!'); 
            return false; 
        }
            else if (document.myform.password.value == '')
             { alert('Please fill in your desired password!');
              return false;
             } 
            else if (document.myform.password_confirmation.value == '')
             { alert('Please fill in your password again for confirmation!');
             return false;
            }
             else if (document.myform.password.value != document.form1.password_confirmation.value) 
             { alert("The two passwords are not identical! "+ "Please enter the same password again for confirmation");
             return false; }
              else{ alert('You are successfully registered');
            }
        })
        
            