---
title: Maintenance & Repair
description: Keeping your FPV drone in flying shape — routine maintenance and crash repair.
---

FPV drones crash. A lot. Knowing how to quickly assess damage and get back in the air is what separates pilots who fly every weekend from pilots whose drones sit on a shelf.

## After Every Session

### Quick Check
1. **Tighten prop nuts**: They loosen from vibration. Check after every session.
2. **Inspect props**: Nicked, cracked, or chipped props cause vibration. Replace if damaged.
3. **Check frame screws**: Motor screws, stack screws, and standoff screws all loosen over time. Loctite (blue, medium) on motor screws is highly recommended.
4. **Inspect battery straps**: Worn straps can let a battery eject mid-flight.
5. **Clean the camera lens**: Dirt, grass, and bug guts accumulate.

### Storage
- Bring batteries to storage voltage (3.80-3.85V/cell) if you won't fly within a day or two
- Store the drone in a case or bag to protect it during transport
- Keep props off during transport to prevent bending or breaking

## After a Crash

### Field Assessment (at the flying site)
1. **Disarm** and **disconnect battery**
2. **Inspect battery** first — dents, punctures, puffing are deal-breakers
3. **Visual frame check** — cracked arm? Loose standoff?
4. **Spin motors by hand** — all four should spin freely and smoothly. Grinding or resistance means damage.
5. **Check props** — replace any with visible damage
6. **Wiggle test** — gently flex each arm. A cracked arm may not be visible but will flex more than others.
7. **Reconnect and test video** — does the FPV feed look right?

If everything checks out, put fresh props on and fly.

### At the Bench (post-session)
More thorough inspection:
1. **Remove props and battery**
2. **Check every screw** — motor, standoff, frame
3. **Inspect solder joints** — look for broken wires or cold joints stressed by impact
4. **Check motor bells** — remove and inspect for bent shafts (roll the shaft on a flat surface — it should roll straight, not wobble)
5. **Check camera mount** — TPU mounts absorb impact but can deform over time
6. **Look for bent antenna** — especially the VTX antenna mount

## Common Repairs

### Replacing an Arm

Most modern frames use individual replaceable arms:
1. Remove the motor from the broken arm (usually 4 screws)
2. Remove the arm from the frame (screws from the bottom plate or top plate)
3. Install the new arm
4. Remount the motor
5. Reconnect motor wires to ESC if they were disconnected

**Tip:** Keep spare arms for your frame. They're cheap ($3-10) and break often.

### Replacing a Motor

1. Unsolder the three motor wires from the ESC (or unplug if using a connector)
2. Remove the four motor screws
3. Mount new motor, making sure screw length doesn't penetrate through the motor base (too-long screws will hit the stator windings)
4. Solder new motor wires (or plug in)
5. Verify spin direction in Betaflight motor tab

### Fixing a Broken Wire

If a wire rips off a pad:
1. Strip a few mm of fresh wire
2. Apply flux to the pad and wire
3. Re-tin both
4. Re-solder the wire to the pad
5. Heat shrink if applicable

### Replacing an ESC (4-in-1)

A fried ESC means replacing the whole 4-in-1 board:
1. Desolder all motor wires (12 connections)
2. Desolder battery leads
3. Remove the old ESC from the stack
4. Mount new ESC
5. Re-solder everything
6. Flash/configure in BLHeli Configurator

This is the most involved common repair — budget 1-2 hours.

### Fixing Jello in Video

Vibration artifacts ("jello") in footage:
1. **Balance props**: Use a prop balancer to check for weight imbalance. Sand the heavy blade lightly.
2. **Tighten everything**: Loose screws transmit vibration
3. **Soft-mount motors**: Rubber O-rings between motor and arm dampen vibration
4. **Soft-mount FC**: Use rubber grommets on FC mounting screws (most stacks include these)
5. **Check for bent motor shaft**: A bent shaft causes persistent vibration
6. **Replace damaged props**: Even small chips cause imbalance

## Tool Kit

### Essential
| Tool | Use |
|------|-----|
| Hex drivers (1.5, 2.0, 2.5mm) | Frame and motor screws |
| Soldering iron (temp-controlled) | All electrical repairs |
| Solder (0.8mm, rosin core) | Soldering |
| Flush cutters | Trimming leads, zip ties |
| Wire strippers | Stripping silicone wire |
| Prop tool / 8mm nut driver | Removing/installing props |
| Small Phillips screwdriver | Some FC/ESC stack screws |
| Tweezers | Handling small components |

### Nice to Have
| Tool | Use |
|------|-----|
| Blue Loctite (242) | Preventing screw loosening |
| Electrical tape | Insulation, temporary fixes |
| Zip ties | Securing wires, antenna routing |
| Heat shrink tubing (assorted) | Insulating solder joints |
| Multimeter | Checking continuity and voltage |
| Smoke stopper | Safe first-time power-up |
| Prop balancer | Reducing vibration |
| Helping hands | Holding work for soldering |

## Preventive Maintenance

### Conformal Coating
Apply conformal coating (MG Chemicals 422B or silicone conformal coat) to your FC and ESC boards to protect against moisture, grass juice, and dew. Apply a thin coat over all exposed components and pads (avoid connectors and buttons). Let dry 24 hours.

This can save your electronics when you crash into wet grass or fly in light drizzle.

### Motor Maintenance
- **Clean debris**: After flying over grass, dirt, or sand, check for debris in motor bells. Small particles between the stator and magnets cause grinding and reduce lifespan.
- **Bearing check**: Motors that feel gritty when spun by hand have worn bearings. Some motors have replaceable bearings; otherwise replace the motor.

### Wire Management
Sloppy wire routing leads to wires getting cut by props or snagged during crashes:
- Keep wires close to the frame, routed away from prop paths
- Use zip ties or electrical tape to secure loose wires
- Leave a small amount of slack (no tension on solder joints)
