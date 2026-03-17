---
title: Radio Transmitter
description: Choosing and using your FPV radio controller.
---

The radio transmitter (TX) is your primary input device — it sends your stick movements to the drone's receiver, which passes them to the flight controller. A good radio is the longest-lasting piece of FPV equipment you'll buy. Pilots keep their radios for years while going through dozens of drones.

## Form Factors

### Full Size (Game Controller Style)
Traditional RC transmitter shape with a tray/neck strap option. Larger gimbals, more switches, and usually a screen.

**Examples:** Radiomaster TX16S, Jumper T16, EdgeTX-based transmitters
**Pros:** More switches and knobs, larger screen, comfortable for extended sessions
**Cons:** Bulky, heavier, less portable

### Compact (Game Controller Style)
Smaller transmitters inspired by game controllers. Lighter, more portable, with fewer switches.

**Examples:** Radiomaster Zorro, Radiomaster Boxer
**Pros:** Portable, ergonomic, enough features for most pilots
**Cons:** Fewer switches, smaller screen

### Ultra-Compact
Bare-minimum transmitters for maximum portability.

**Examples:** Radiomaster Pocket, BetaFPV LiteRadio
**Pros:** Tiny, cheap, great for travel and simulator practice
**Cons:** Fewer gimbals/switches, less precision on budget models

## Key Features

### Gimbals
The two joysticks that control your drone. Gimbal quality directly affects your flying precision.

- **Potentiometer gimbals**: Budget option. Wear out faster, less precise. Found on entry-level radios.
- **Hall-effect gimbals**: Use magnetic sensors instead of physical contacts. More precise, last much longer. Standard on mid-range and up.
- **CNC hall gimbals**: Premium machined gimbals. Silky smooth, most precise. Found on high-end models.

### Stick Mode
How throttle/yaw/pitch/roll are assigned to the two sticks:
- **Mode 2** (most common worldwide): Left stick = throttle + yaw, Right stick = pitch + roll
- **Mode 1** (common in some countries): Left stick = pitch + yaw, Right stick = throttle + roll

Mode 2 is the overwhelming default in FPV. Unless you have a specific reason, use Mode 2.

### Firmware
- **EdgeTX**: The current standard. Open-source, actively developed, full-featured. Runs on most Radiomaster and Jumper transmitters.
- **OpenTX**: The predecessor to EdgeTX. Still works but no longer actively developed. EdgeTX is backwards-compatible.

### Built-in vs. External RF Module
- **Built-in ELRS**: Most new radios ship with an internal ELRS module. Simplest setup — no extra hardware.
- **Built-in Multi-protocol**: Some radios have a multi-protocol module that can talk to many different receiver types (FrSky, FlySky, DSM, etc.).
- **External module bay (JR bay)**: A slot on the back for adding an external RF module. Lets you add ELRS, Crossfire, or other protocols to any compatible radio.

### Switches and Knobs
Used for AUX channels — controlling arm, flight modes, beeper, VTX settings, etc.
- **2-position switches**: Best for ARM (on/off)
- **3-position switches**: Good for flight mode selection
- **Pots (knobs/sliders)**: Can be used for continuous adjustment but most FPV pilots don't use them

Minimum for FPV: 4 switches. Most radios have 6-8.

## Recommended Radios (2025-2026)

| Radio | Type | ELRS | Gimbals | Price | Notes |
|-------|------|------|---------|-------|-------|
| **Radiomaster Pocket** | Ultra-compact | Built-in | Hall | $40-60 | Best budget option, sim practice |
| **Radiomaster Zorro** | Compact | Built-in | Hall | $80-100 | Popular, game pad style |
| **Radiomaster Boxer** | Compact | Built-in | Hall/CNC | $100-140 | Sweet spot for most pilots |
| **Radiomaster TX16S MKII** | Full size | Built-in or bay | Hall/CNC | $150-250 | Maximum features/switches |
| **Jumper T-Pro V2** | Compact | Built-in | Hall | $80-100 | Good Radiomaster alternative |

## Setup

### Basic Configuration
1. **Create a model**: Each drone gets its own model profile in EdgeTX
2. **Set channel map**: AETR is standard for ELRS/CRSF (Aileron, Elevator, Throttle, Rudder = channels 1-4)
3. **Assign switches**: Map AUX channels to physical switches for arming, modes, beeper, etc.
4. **Set failsafe**: Configure to "no pulses" (the receiver stops sending data on signal loss, letting the FC handle failsafe)

### Using as a Simulator Controller
Most modern radios work as USB game controllers:
1. Connect via USB cable
2. Select "USB Joystick" mode on the radio (not "USB Storage")
3. The sim should detect it as a game controller
4. Calibrate sticks in the sim's settings
5. Map channels to sim controls

This is the recommended way to practice — use your actual radio in the sim so your muscle memory transfers directly to real flying.

### Charging
Most modern radios charge via USB-C. Some use internal Li-Ion batteries (18650 cells) that can be swapped for fresh ones at the field. Full charge typically lasts 6-12 hours of flying.

## Care and Maintenance

- **Gimbal protectors**: Use stick protectors when transporting to prevent damage and accidental input
- **Firmware updates**: EdgeTX releases updates regularly. Flash via USB or SD card.
- **Stick tension**: Most gimbals allow adjusting stick spring tension via screws. Customize to your preference.
- **Screen protectors**: If your radio has a touchscreen, consider a screen protector
