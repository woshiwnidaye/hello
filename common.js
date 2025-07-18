function loadUrl()
{
	if(num>=1)
	{
		var url="https://hellowoaid.s3.ap-southeast-2.amazonaws.com/HWsoft.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
