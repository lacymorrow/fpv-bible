---
title: Power Distribution Board (PDB)
description: How power gets from the battery to every component on your quad.
---

A Power Distribution Board (PDB) takes the raw battery voltage and distributes it to the ESCs, flight controller, and other components. On modern builds, dedicated PDBs have been largely replaced by integrated solutions, but understanding power distribution is still essential.

## What a PDB Does

Your battery outputs a single pair of wires (positive and negative). The PDB splits that into:
- **4 ESC outputs**: Each ESC needs full battery voltage to drive its motor
- **Regulated outputs**: 5V and/or 12V for the FC, VTX, camera, LEDs, receiver
- **Current sensor** (on many PDBs): Measures total current draw for OSD display and battery usage tracking

## Modern Power Distribution

### 4-in-1 ESC (Most Common Today)
Most modern builds use a 4-in-1 ESC board that integrates all four ESCs and power distribution on a single PCB. The battery connects directly to the 4-in-1 ESC, which:
- Powers all four motors
- Passes voltage to the FC via the stack connector
- Often includes a current sensor

This means a **separate PDB is usually not needed** on modern builds.

### All-in-One (AIO) Flight Controllers
Some FCs (especially for micro/whoop builds) integrate the FC, ESCs, and power distribution on a single board. Common in tiny whoops and sub-250g builds.

### Standalone PDB
Still used in some builds, especially:
- Older frame designs with PDB integrated into the bottom plate
- Custom builds where you need specific power routing
- X-class or cinelifter builds with separate ESCs

## Voltage Regulators on PDBs

PDBs typically include voltage regulators (BECs) that step down battery voltage:

| Output | Voltage | Powers |
|--------|---------|--------|
| Battery direct | 14.8-25.2V | ESCs/motors |
| 5V BEC | 5V | Flight controller, receiver, GPS, LEDs |
| 9V/12V BEC | 9-12V | Analog FPV camera, VTX (some) |

→ See [Regulators](/power/regulators) for details on voltage regulation.

## Wiring a PDB

If you're using a standalone PDB:

1. **Battery input**: Solder XT60 pigtail to the main battery pads (thick pads, usually marked BAT+ and BAT-)
2. **ESC outputs**: Solder ESC power wires to the four motor output pads
3. **5V output**: Connect to FC power input
4. **Current sensor**: Connect the current sense wire to the FC's current sensor input (if available)
5. **Ground**: Ensure common ground between PDB, FC, and all peripherals

### Soldering Tips for PDB
- Battery pads carry the most current — use plenty of solder and thick wire (12-14 AWG)
- Pre-tin all pads before attaching wires
- Use a hot iron (380-400°C) for the large pads — they act as heat sinks
- Keep positive and negative wires well-separated to prevent shorts

## Current Sensor

Many PDBs and 4-in-1 ESCs include a current sensor (shunt resistor) that measures total battery current. This data is sent to the FC and displayed on the OSD as:
- **Amps drawn** (instantaneous current)
- **mAh consumed** (cumulative energy used)

mAh consumed is the most useful metric for knowing when to land. Set an OSD warning at ~80% of your battery's rated capacity.

## Capacitors

A large electrolytic capacitor (typically 25V 1000µF for 4S, or 35V 1000µF for 6S) should be soldered across the battery pads. This capacitor:
- Absorbs voltage spikes from motor braking
- Reduces electrical noise that can interfere with the VTX and FC
- Protects ESCs from voltage transients

Most 4-in-1 ESCs come with a capacitor included. If yours doesn't, add one — solder it directly to the battery pads (or XT60 connector) with short leads.
