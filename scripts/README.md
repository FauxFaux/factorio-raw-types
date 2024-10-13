```
bin/x64/factorio --dump-data
bin/x64/factorio --dump-prototype-locale
bin/x64/factorio --dump-icon-sprites
wget -N https://lua-api.factorio.com/latest/prototype-api.json
wget -N https://lua-api.factorio.com/latest/runtime-api.json
jq .technology raw-script-output/data-raw-dump.json > raw-tech.json
```
