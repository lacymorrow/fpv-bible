---
title: 3D Printing for FPV
description: Using 3D printing to make custom parts for FPV drones.
---

A 3D printer is one of the best investments in FPV after your drone and goggles. Custom mounts, protective parts, and accessories that would cost $10-20 each from a shop cost pennies to print at home.

## Why 3D Print for FPV?

- **Camera mounts**: Custom GoPro/action camera mounts for your specific frame and angle
- **Antenna mounts**: VTX antenna holders, GPS mast mounts, receiver antenna tubes
- **Battery pads**: Soft TPU pads to cushion the battery against the frame
- **Bumpers and guards**: Front bumpers, arm guards for proximity flying
- **Replacement parts**: Broken camera mount? Print a new one in 30 minutes.
- **Custom designs**: If you can imagine it, you can print it

## Materials

### TPU (Thermoplastic Polyurethane)
The primary material for FPV parts. TPU is flexible and impact-resistant — it bends and absorbs energy instead of shattering.

**Use for:** Camera mounts, antenna holders, battery pads, bumpers, any part that needs to survive crashes.

**Print settings (typical):**
- Nozzle temp: 220-240°C
- Bed temp: 50-60°C
- Speed: 20-30 mm/s (slow for quality)
- No part cooling fan (or minimal)
- Direct drive extruder works best (Bowden can print TPU but needs slower speeds)

**Common hardness:** 95A is the standard for FPV. Firm enough to hold shape, flexible enough to absorb impact.

### PLA
Rigid plastic, easy to print, but brittle on impact. Fine for non-crash parts.

**Use for:** Jigs, tools, stands, parts that don't get hit.

**Not recommended for:** Anything on the drone that experiences crashes — it shatters.

### PETG
A middle ground between PLA and TPU. More impact-resistant than PLA, rigid unlike TPU.

**Use for:** Structural drone parts, ducts, canopies.

## Essential Prints for Every Build

### 1. Action Camera Mount
The #1 FPV print. Holds your GoPro/action camera on top of the frame at the correct angle.

**Considerations:**
- Print angle that matches your preferred camera tilt (25° for cinematic, 30-35° for freestyle)
- Use TPU 95A for vibration dampening
- Some designs use a "wedge" that's adjustable

### 2. VTX Antenna Mount
Holds the VTX antenna at the correct angle (usually vertical, pointing up from the rear of the frame).

- SMA or MMCX mount depending on your VTX connector
- Angled to keep the antenna protected behind the frame
- TPU so it bends on impact instead of breaking the antenna connector

### 3. Receiver Antenna Tubes
Thin TPU tubes that hold your receiver's antennas at 90° angles from each other for optimal signal reception.

- T-shaped or V-shaped mounts for two antennas
- Keep antennas away from carbon fiber (which blocks signal)
- Zip-tie to rear standoffs

### 4. GPS Mount
A mast that holds the GPS module above the frame, away from electrical noise.

- 3-5cm above the frame is typical
- Fold-down designs for transport
- TPU base with a rigid GPS platform

### 5. Battery Pad
A soft TPU pad between the battery and frame. Prevents the battery from sliding and absorbs vibration.

## Where to Find FPV Print Files

- **Thingiverse** (thingiverse.com): Large library, search "[your frame name] mount"
- **Printables** (printables.com): Growing collection, good quality
- **Cults3D** (cults3d.com): Mix of free and paid designs
- **Frame manufacturer sites**: Many frame makers provide official TPU part files
- **Facebook groups**: Frame-specific groups often share custom designs

## Designing Your Own Parts

If you can't find what you need:

### Beginner: TinkerCAD
Free, browser-based, drag-and-drop 3D modeling. Good enough for simple mounts and brackets.

### Intermediate: Fusion 360
Free for personal use. Parametric modeling lets you design precise parts with exact measurements. Most FPV designers use Fusion 360.

### Tips for FPV Parts
- **Measure twice, print once**: Use calipers to measure mounting holes, camera dimensions, and frame geometry
- **Add tolerances**: Print a test fit piece before printing the full part. Holes often need to be 0.2-0.5mm larger than the screw diameter
- **Orient for strength**: Layer lines should be perpendicular to the stress direction
- **Wall count matters more than infill** for TPU parts — 3-4 walls with 20-30% infill is typical

## Printer Recommendations

For FPV printing, you need:
- **Direct drive extruder** (or all-metal Bowden): Required for reliable TPU printing
- **Heated bed**: Required for TPU adhesion
- **Build volume**: 180x180mm minimum (most FPV parts are small)

**Budget ($150-250):** Creality Ender 3 V3 (with direct drive upgrade or SE variant)
**Mid-range ($300-500):** Bambu Lab A1 Mini, Creality K1
**High-end ($500+):** Bambu Lab P1S (enclosed, multi-material capable)

The Bambu Lab printers are particularly good for TPU due to their direct drive systems and reliable auto-calibration.
