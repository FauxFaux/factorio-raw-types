#!/usr/bin/env tsx

import { readFileSync } from 'fs';
import { writeFileSync } from 'node:fs';

function main() {
  const obj = JSON.parse(readFileSync(process.argv[2], 'utf-8'));

  for (const k of [
    'tile',
    'noise-expression',
    'optimized-particle',
    'optimized-decorative',
    'tree',
    'explosion',
    'gui-style',
    'corpse',
    'lamp',
    'tips-and-tricks-item',
    'simple-entity',
    'spider-leg',
  ]) {
    delete obj[k];
  }

  // const keep = ['resource', 'recipe', 'item', 'fluid', 'technology'];
  // for (const k of Object.keys(obj)) {
  //   if (!keep.includes(k)) {
  //     delete obj[k];
  //   }
  // }

  for (const v of Object.values(obj.resource) as any[]) {
    delete v.walking_sound;
    delete v.autoplace;
    delete v.stages;
    delete v.tree_removal_probability;
    delete v.tree_removal_max_distance;
  }

  for (const survived of Object.values(obj) as any[]) {
    for (const v of Object.values(survived) as any[]) {
      delete v.icon;
      delete v.icons;
      delete v.icon_mipmaps;
      delete v.icon_size;
      delete v.pictures;
      delete v.dark_background_icon;
      delete v.expensive;
      delete v.working_visualisations;
      delete v.open_sound;
      delete v.close_sound;
      delete v.working_sound;
      delete v.vehicle_impact_sound;
      delete v.animation;
      delete v.animations;
      delete v.selection_box;
      delete v.collision_box;
      delete v.resistances;
      delete v.dying_explosion;
      delete v.alert_icon_shift;
      delete v.collision_mask;
      delete v.damaged_trigger_effect;
      delete v.connector_frame_sprites;
      delete v.belt_animation_set;
      delete v.minimap_representation;
      delete v.selected_minimap_representation;
      delete v.track_particle_triggers;

      for (const box in v.fluid_boxes ?? []) {
        delete v.pipe_picture;
      }
    }
  }

  for (const [k, v] of Object.entries(obj)
    .map(([key, value]) => [key, JSON.stringify(value).length] as const)
    .sort((a, b) => a[1] - b[1])) {
    console.log(v, k);
  }

  writeFileSync('sample-data/data.json', JSON.stringify(obj));
}

main();
