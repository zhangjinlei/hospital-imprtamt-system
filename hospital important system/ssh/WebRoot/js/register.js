function checkregister()
{
  if(document.registerform.username.value.length == 0)
  {
	  alert("�������û���");
	  return false;
  }
  else if(document.registerform.password.value.length == 0)
  {
	  alert("����������");
	  return false;
  }
  else if(document.registerform.repassword.value != document.registerform.password.value)
  {
	  alert("�����ظ����벻��ͬ");
	  return false;
  }
  else if(document.registerform.email.value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)!= !(-1))
  {
	  alert("�����ʽ����ȷ");
	  return false;
  }
  else if((document.registerform.phone.value.length != '11')&&(document.registerform.phone.value.length != '6'))
  {
	  alert("�ֻ����������");
	  return false;
  }
  else
	  return true;
}