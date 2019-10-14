#### delete dir 
``` cmd
  > sudo rm -rf folderName
```

#### npm install for access perrmission denied
``` cmd
  > sudo npm install -g [,<pckg name>] --unsafe-perm=true --allow-root
```
ref: https://stackoverflow.com/questions/35954725/error-eacces-permission-denied-when-trying-to-install-eslint-using-npm

#### kill port
```cmd
  > sudo kill -9 `sudo lsof -t -i:9001`
```
