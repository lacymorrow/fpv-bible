---
title: Installing Speed Controllers
description: Mounting and configuring the ESC in your build.
---

This page covers the physical installation of your ESC (Electronic Speed Controller). For how ESCs work and what specs mean, see [ESCs](/drive/escs).

## 4-in-1 ESC Installation

### Stack Mounting
The 4-in-1 ESC typically goes at the bottom of the stack, directly above the frame's bottom plate:

1. **Place rubber grommets** on the standoff screws (optional for ESC, but helps with noise)
2. **Set the ESC on the standoffs** — align the mounting holes (30.5mm or 20mm pattern)
3. **Secure with standoffs or nuts** — finger-tight, then gently snug with a nut driver
4. **Connect the stack header** to the FC if using a plug connector

### Motor Wire Soldering
The 4-in-1 ESC has pads labeled for each motor (M1, M2, M3, M4). Each motor has 3 wires.

1. **Identify which motor goes to which pad** — check Betaflight's motor diagram and match motor positions to ESC pad labels
2. **Trim motor wires to appropriate length** — route along the arm and leave enough for a clean path to the ESC pad
3. **Tin wires and pads**
4. **Solder each set of 3 wires** to the corresponding motor pads
5. **Wire order doesn't matter** (direction can be reversed in BLHeli software)

### Battery Lead
Solder the battery pigtail (XT60) to the main power pads (labeled BAT+ and BAT-, or B+ and B-).

→ See [Power Distribution](/building/power-distribution) for details.

## Individual ESC Installation

If using separate ESCs (one per arm):

1. **Mount each ESC on its arm** — double-sided tape, zip ties, or heat shrink over the arm
2. **Solder motor wires** directly to each ESC's motor pads (3 wires per motor)
3. **Route power wires** from each ESC to a central PDB or directly to the battery lead (parallel connection)
4. **Route signal wires** from each ESC to the FC's motor signal pads
5. **Protect with heat shrink** over exposed boards and connections

## Configuration

### BLHeli Configurator
After physical installation, configure the ESCs via BLHeli Configurator:

1. Connect the FC via USB
2. Open Betaflight Configurator
3. Open BLHeli Configurator (it connects via passthrough through the FC)
4. The configurator should detect all 4 ESCs

### Key Settings
- **Motor Direction**: Set each motor to the correct direction (Normal or Reversed)
- **Motor Timing**: Auto (default) works for most builds
- **Demag Compensation**: High (prevents motor desync during aggressive flying)
- **Startup Power**: Default unless motors fail to start reliably
- **PWM Frequency**: 24kHz (default) or 48kHz for smoother response
- **Bidirectional DShot**: Enable for RPM filtering (if supported by your ESC firmware)

### Firmware
- **BLHeli_32**: Update to the latest version for best performance
- **Bluejay**: If using BLHeli_S ESCs, flash Bluejay firmware for bidirectional DShot support
- **AM32**: Open-source alternative for 32-bit ESCs

## Testing

After installation, before installing props:

1. **Verify in Betaflight Motors tab** — each motor should spin when its slider is raised
2. **Check direction** — compare to Betaflight's motor diagram
3. **Check for vibration** — motors should spin smoothly with no grinding or wobble
4. **Feel for heat** — run motors at 50% for 10 seconds, then check ESC temperature. Should be barely warm.
5. **Listen for desyncs** — a motor that stutters or stops and restarts has a desync issue (adjust demag, timing, or startup power)
