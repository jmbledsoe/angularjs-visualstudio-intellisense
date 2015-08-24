JavaScript IntelliSense for AngularJS Components in Visual Studio
===================================

This project provides intellisense in JavaScript files for injected AngularJS components in Visual Studio.

Visual Studio 2013 provides intellisense for AngularJS directives within HTML pages, but doesn't include support for intellisense on custom AngularJS components in your project. This extension is designed to provide this support, so that you can have full member listing and statement completion on AngularJS services, factories and providers that you develop.

>**Note:** This extension is now included by default in Visual Studio 2015. If you want to modify the default behavior, this extension is installed by default in the %PROGRAMFILES%\Microsoft Visual Studio 14.0\JavaScript\References folder. %PROGRAMFILES% is the location of your program files folder, usually under C:\Program Files or C:\Program Files (x86). You can overwrite this file with a new copy from this repository, but do so at your own risk.

## Usage

Enabling intellisense for your custom AngularJS components is simple and can be accomplished with a few simple steps:

### Prerequisites

In order for AngularJS Intellisense to function properly, your project needs a correctly-constructed _references.js file. See the following articles for guidance on creating a  _references.js file:

-  http://madskristensen.net/post/the-story-behind-_referencesjs
-  http://blogs.msdn.com/b/webdev/archive/2014/10/10/references-js-file-s-auto-sync-feature.aspx

### Enabling Intellisense in a Single Project

Add the [angular.intellisense.js](https://raw.github.com/jmbledsoe/angularjs-visualstudio-intellisense/master/src/Scripts/angular.intellisense.js) file to the same folder in your project that contains angular.js or angular.min.js.

That's it! All of your AngularJS components should now be fully available via intellisense.

### Enabling Intellisense in Multiple Projects

If you prefer to enable AngularJS intellisene for all of your web projects, simply save the [angular.intellisense.js](https://raw.github.com/jmbledsoe/angularjs-visualstudio-intellisense/master/src/Scripts/angular.intellisense.js) file to your %PROGRAMFILES%\Microsoft Visual Studio 12.0\JavaScript\References folder. %PROGRAMFILES% is the location of your program files folder, usually under C:\Program Files or C:\Program Files (x86).

## Tips & Tricks

1. Intellisense doesn't yet work for private JavaScript functions inside AngularJS components, but this feature will be added in a future version. **Update:** The latest revision of the _intellisense.js file added support for some private functions along some code paths. Basically, the Visual Studio JavaScript intellisense engine works by calling the JavaScript methods in a code file. The latest update calls many more methods, but still misses methods that are only called in "non-default" code paths. I'm hoping that I can gain some insight into this engine and fix this issue.

## Project Status

This project is still early in its life and so may still have issues, but it is stable enough for use as-is. It provides intellisense for AngularJS components in most of the cases I have tested, although there are some code structures that it cannot figure out yet. If you encounter any issues or any scenarios in which the project isn't providing proper intellisense, please submit an issue.

**Update: 3/27/2015**

NuGet Package Created:  [AngularJS.Intellisense](https://www.nuget.org/packages/AngularJS.Intellisense/)

~~~
PM> Install-Package AngularJS.Intellisense

~~~



**Update: 11/10/2014**

Refactored the extension so that it works with the Visual Studio JavaScript editor's native extensibility model - renaming the extension to angular.intellisense.js. Now, if the file is placed next to angular.js in the project, it will automatically be loaded right after Angular library.

Other bug fixes made:

1. Modules no longer need to be exported to global
2. The implicit "ng" module is now required by default for all modules - the same as Angular's runtime behavior
3. Required modules are respected correctly when editing the first file in which a module is defined
4. Expanded test cases

**Update: 10/23/2014**

I've made some significant changes to the _intellisense.js file, which should enable intellisense in far more parts of code. Specifically, I've added code to enable intellisense for:

1. Promise callbacks
2. Scope event listeners
3. HTTP service callbacks
4. Functions exposed as members of services

There are definitely still issues to work out, and I appreciate any issue reports that I receive. Feel free to submit pull requests as well to solve any issues that you encounter, as I don't have a ton of time to devote to this project.
