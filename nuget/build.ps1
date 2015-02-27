Copy-Item  '..\src\scripts\angular.intellisense.js' -Destination '.\src\content\scripts' -Force

wget http://nuget.org/nuget.exe -OutFile nuget.exe -ErrorAction Continue

if (Test-Path '.\nuget.exe'){
	$buildCmd = {.\nuget pack src\AngularJS.Intellisense.nuspec -BasePath src -OutputDirectory .}
	Invoke-Command $buildCmd
}
else {
	Write-Error "Nuget.exe not found"
}



