# deploy.ps1
npm run build
Copy-Item -Recurse -Force -Path .\build\* -Destination C:\ORBITAL\compras\apiCompras\src\main\resources\static