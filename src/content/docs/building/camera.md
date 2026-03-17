---
title: Installing the FPV Camera
description: Mounting and wiring the FPV camera on your build.
---

The FPV camera installation seems simple — it goes in the front — but getting it right affects your video quality, field of view, and vibration isolation.

## Mounting

### Camera Mount
Most frames have a built-in camera mount at the front — two side plates with holes that accept the camera's mounting screws. Camera sizes are standardized:
- **Full size (28mm)**: Standard 5" builds
- **Mini (21mm)**: Some compact frames
- **Micro (19mm)**: Sub-250g and 3" builds
- **Nano (14mm)**: Tiny whoops

Verify your camera matches your frame's mount width before purchasing.

### Setting the Angle
The camera mount typically allows angle adjustment via the mounting screw holes (slotted or with multiple positions).

Adjust the camera angle to match your flying style:
- **15-20°**: Cinematic, slow flying
- **25-30°**: Moderate freestyle
- **30-40°**: Aggressive freestyle
- **40-50°**: Racing, high-speed

Higher camera angle means you need to pitch the drone further forward (faster) to see the horizon. Start around 25° and adjust as your flying style develops.

### Vibration Isolation
Camera vibration causes jello in both the FPV feed and action camera footage. Isolate the camera from frame vibration:
- **TPU camera mount**: 3D-printed TPU mounts absorb vibration. The most common solution.
- **Rubber grommets**: Small rubber washers between the camera mounting screws and the frame.
- **O-rings**: Wrap around the camera body between the camera and side plates.

## Wiring (Analog Camera)

Analog cameras have three connections:

| Wire | Color (typical) | Connection |
|------|----------------|------------|
| **Video** | Yellow | VTX video input |
| **VCC (Power)** | Red | 5V or 9V from FC |
| **GND** | Black | Ground |

### Voltage
Check your camera's voltage range:
- Most analog cameras accept **5-36V** (wide range, connects directly to battery or any regulator)
- Some are **5V only** — must use a regulated 5V source
- Some work best at **9V** for cleaner video (less noise than 5V)

If your FC has a dedicated camera voltage pad (labeled "CAM" or "VOUT"), use that.

### Soldering
1. Pre-tin the camera wires and FC pads
2. Keep wires short — long wires pick up noise
3. Route away from the motors and ESC (electrical noise causes video interference)
4. Use heat shrink on exposed connections

## Wiring (Digital Camera)

Digital cameras (DJI, Walksnail, HDZero) connect to their matched VTX via:
- **Ribbon cable**: Flat flex cable between camera and air unit (DJI O3)
- **Coaxial cable**: Some Walksnail and HDZero setups
- **Proprietary connector**: Specific to each system

Follow the manufacturer's documentation for your specific digital system. The connection is usually plug-and-play.

## Focus and Lens

### Focus Adjustment
Most FPV cameras come pre-focused at infinity, which is correct for flying. If the image looks soft:
1. Point the camera at a distant object
2. Gently turn the lens (it may have a locking set screw)
3. Focus until distant objects are sharp
4. Tighten the set screw

### Lens Protection
- Some cameras have removable lens covers
- TPU lens protectors are available for common cameras
- A scratched or cracked lens degrades your entire FPV experience — protect it during transport

## Camera Settings

Access camera settings via the camera's built-in OSD (joystick or button on the camera board, separate from Betaflight OSD):

- **Brightness**: Adjust for typical lighting conditions
- **WDR (Wide Dynamic Range)**: Enable for mixed lighting (flying from shade into sun)
- **Sharpness**: Personal preference. Higher sharpness can make noise more visible.
- **Image flip**: Enable if mounting the camera upside down
- **Day/Night mode**: Auto works for most situations
