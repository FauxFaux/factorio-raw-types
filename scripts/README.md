factorio-raw-data

```
APP=$HOME/SteamLibrary/steamapps/common/Factorio
${APP}/bin/x64/factorio --dump-data
${APP}/bin/x64/factorio --dump-prototype-locale
${APP}/bin/x64/factorio --dump-icon-sprites
(cd data && \
wget -N https://lua-api.factorio.com/latest/prototype-api.json && \
wget -N https://lua-api.factorio.com/latest/runtime-api.json)
```

```
npm run generate
```

For some reason `--dump-icon-sprites` tries to start steam, which fails without:

```
echo 0 | sudo tee /proc/sys/kernel/apparmor_restrict_unprivileged_userns
sudo sysctl -w kernel.unprivileged_userns_clone=1
```

(Is that the most suspicious thing you've seen in a readme, or what?)

If Steam wasn't already running, you must close Steam for the script to proceed.

```
jq -c .technology raw-110/data-raw-dump.json > data/raw-tech.json
```
