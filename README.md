## factorio-raw-types

This package contains a typescript translation of the factorio prototype API documentation / schema,
and (hopefully soon!) other utilities for working with and transforming the raw data. For a peek at
upcoming idea, have a look at the undocumented [`scripts/`](scripts/) directory.

### prototypes

You could export the raw JSON from factorio:

```shell
APP=$HOME/SteamLibrary/steamapps/common/Factorio
${APP}/bin/x64/factorio --dump-data
```

Then load it into your code:

```ts
import { type RawData } from 'factorio-raw-types/prototypes';
const raw: RawData = await import(
  '/home/me/.factorio/script-output/data-raw-dump.json'
);
```

And get reasonable typechecking on:

```ts
const sounds =
  raw['ambient-sound']['aquilo-1']?.variable_sound?.layers[0]?.variants[0];
if (sounds && 'game_controller_vibration_data' in sounds) {
  return sounds.game_controller_vibration_data
    ?.high_frequency_vibration_intensity;
}
```

You probably don't want to, but you could!
