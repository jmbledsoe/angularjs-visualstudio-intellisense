[CmdletBinding()]
Param(
[Parameter(Mandatory=$True)]
[string]$apiKey,
[Parameter(Mandatory=$True)]
[string]$packageFile
)

#$apiKey = Read-Host -Prompt "What is your API Key?"

wget http://nuget.org/nuget.exe -OutFile nuget.exe -ErrorAction Continue


if (Test-Path '.\nuget.exe'){
	$pubCmd = {.\nuget.exe push $packageFile -ApiKey $apiKey}
	Invoke-Command $pubCmd
}
else {
	Write-Error "Nuget.exe not found"
}




