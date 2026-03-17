---
title: General Tips
description: Hard-won wisdom from the FPV community.
---

Tips that don't fit neatly into any single category but can save you time, money, and frustration. These come from accumulated community experience.

## Build Tips

### Planning
- **Read the manual before buying**: Check if your FC and ESC stack are compatible (same mounting pattern, same brand stacks are safest).
- **Verify screw lengths before ordering**: Motor screw length must match arm thickness + motor base depth. Too long = shorts inside the motor. Measure first.
- **Take photos at every build stage**: Before you close up the stack, photograph all the wiring. Future-you troubleshooting in the field will be grateful.
- **Dry-run the build**: Before soldering anything, place all components in position to check fit, wire routing, and any clearance issues.

### Soldering
- **Tin pads before soldering wires**: Apply solder to each pad individually first, then attach the wire. This is much easier than trying to tin both simultaneously.
- **Use flux liberally**: A little extra flux paste makes solder flow onto pads smoothly and prevents cold joints.
- **Heat the pad, not the solder**: Touch the iron to the pad and let the pad melt the solder. This ensures the pad is hot enough for a good joint.
- **Short wires are better**: Every extra centimeter of wire is weight, potential noise pickup, and something to snag or cut. Route direct.

### Power
- **Always use a smoke stopper on first power-up**: A $5 resistor-in-a-connector between the battery and the quad limits current if there's a short. Saves builds. Make one or buy one.
- **Capacitors are not optional**: A 1000µF capacitor across the battery pads protects ESCs from voltage spikes. Include one in every build.
- **Polarity check before powering**: Triple-check battery connector polarity before the first power-up. Reverse polarity destroys ESCs, FCs, and VTXs instantly.

## Flying Tips

### Every Session
- **Preflight every time**: Don't skip it because you flew yesterday. Props loosen. Batteries get damaged. Wires shift.
- **Arm only when ready to fly**: Don't arm and then fiddle with goggles or radio. Get everything ready, then arm.
- **Land with margin**: Come down at 3.5V/cell, not 3.2V. Packs that get driven low die faster and become safety hazards.
- **One thing at a time**: New location, new settings, or new drone? Do one at a time. Changing multiple variables makes problems impossible to diagnose.

### Safety Habits
- **Props off for any bench work**: Even changing OSD settings. The habit of always removing props before any bench work is the most important safety habit in FPV.
- **Check prop tightness before every flight**: Takes 10 seconds. A prop detaching at full throttle is a guaranteed crash.
- **Know your outs**: Before flying a new spot, identify where you'll go if something goes wrong. Open landing areas, clear escape paths.
- **Battery in the bag immediately after flying**: Hot batteries sitting in the sun degrade faster and are more hazardous. Into the bag in the shade.

### Skill Building
- **Slow is smooth, smooth is fast**: Jerky inputs don't make you faster. Smooth, deliberate control inputs produce better results and look better on camera.
- **Crash and analyze**: Use your DVR footage after a crash. Understanding *why* you crashed fixes the problem; not knowing means you'll do it again.
- **Practice one thing**: If you're working on power loops, spend a whole pack doing power loops, not variety practice. Focused repetition builds muscle memory faster.
- **Fly the same spot repeatedly**: Learning a location deeply — its lines, obstacles, wind patterns — is more productive than constantly visiting new spots.
- **Fly with better pilots**: Watching and following pilots better than you is the fastest way to improve.

## Gear Management

### Batteries
- **Number your packs**: Write a number on each pack (marker, label). Track cycle counts and performance per pack. This lets you identify aging packs before they fail.
- **Group by voltage before charging**: Batteries within a group should be within 0.1V/cell of each other before parallel charging. Quick check with a cell voltage meter.
- **Storage voltage is not optional**: LiPos left fully charged for weeks degrade significantly. Storage voltage (3.80-3.85V/cell) extends pack life dramatically.
- **Two to three packs minimum per charging session**: Flying on a single pack and waiting for it to charge wastes time. Four to six packs lets you fly while others charge.

### Equipment Care
- **Antenna protection**: UFL connectors break easily. A dab of hot glue over the VTX UFL connector prevents vibration from working it loose.
- **Camera lens**: Keep the lens clean. A microfiber cloth in your bag. Scratched or dirty lenses ruin your FPV experience.
- **Goggle foam**: Worn-out goggle foam creates gaps that let in light and reduce immersion. Replacement foam for popular goggles is $5-15 and transforms the experience.
- **Radio gimbals**: If your radio has adjustable gimbal tension, find your preferred resistance. Sloppy gimbals reduce precision; overly tight gimbals cause fatigue.

## Troubleshooting Mindset

- **Change one thing at a time**: When diagnosing a problem, isolate variables. If you change three things simultaneously and the problem goes away, you don't know what fixed it.
- **Eliminate obvious causes first**: Before assuming a complex problem, check the simple things. Is the battery charged? Is the receiver bound? Are props on correctly?
- **Use Betaflight's status command**: Type `status` in the CLI tab when troubleshooting arming issues. The disable flags tell you exactly why the drone won't arm.
- **Community search before posting**: 90% of issues have been seen before. Search the Betaflight GitHub issues, r/fpv, or Oscar Liang's site before posting a question. Include your Betaflight dump and relevant details when you do post.
- **Start with defaults**: If your tune is misbehaving, paste stock Betaflight defaults and test from there. Starting from a known-good state eliminates accumulated cruft.

## Field Bag Checklist

What to bring to every session:

**Essential:**
- [ ] Charged batteries (4-8 packs)
- [ ] Charged goggles
- [ ] Charged radio
- [ ] Spare props (2-3 sets minimum)
- [ ] Hex drivers (1.5mm, 2.0mm, 2.5mm)
- [ ] Prop tool / nut driver
- [ ] LiPo-safe bag for batteries

**Nice to have:**
- [ ] Field soldering kit (Pinecil, solder, flux)
- [ ] Electrical tape
- [ ] Zip ties
- [ ] Extra motor screws
- [ ] Cell voltage checker
- [ ] Shade (hat, umbrella, or popup canopy)
- [ ] Phone charger
- [ ] Water
