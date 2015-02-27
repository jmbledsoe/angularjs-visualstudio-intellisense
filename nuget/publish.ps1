
$apiKey = Read-Host -Prompt "What is your API Key?"

wget http://nuget.org/nuget.exe -OutFile nuget.exe -ErrorAction Continue


if (Test-Path '.\nuget.exe'){
	$pubCmd = {.\nuget.exe push .\AngularJS.Intellisense.1.0.0.nupkg -ApiKey $apiKey}
	Invoke-Command $pubCmd
}
else {
	Write-Error "Nuget.exe not found"
}




