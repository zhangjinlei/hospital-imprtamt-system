function checklogin()
{
  if(document.loginform.username.value.length == 0)
  {
	  alert("�������û���");
	  return false;
  }
  else if(document.loginform.password.value.length == 0)
  {
	  alert("����������");
	  return false;
  }
  else
	  return true;
}