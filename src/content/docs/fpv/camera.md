---
title: FPV Camera
description: The camera that provides your live flight view.
---

The FPV camera is your eyes in the sky. It captures the live video feed that's transmitted to your goggles. This is separate from the action camera (GoPro) used for recording — the FPV camera is for flying, not footage.

## Analog vs. Digital Cameras

### Analog Cameras
Analog FPV cameras output a composite video signal (NTSC or PAL). They connect to an analog VTX which broadcasts the signal.

**Characteristics:**
- Very low latency
- Limited resolution (~480p effective)
- Wide dynamic range options (WDR)
- Cheap ($10-30)
- Universal — any analog camera works with any analog VTX

**Popular analog cameras:** Foxeer Razer, Caddx Ratel, RunCam Phoenix

### Digital Cameras
Digital FPV cameras are part of a specific digital system (DJI, Walksnail, HDZero). They output a digital signal to a matched VTX.

**Characteristics:**
- Much higher resolution (720p-1080p)
- Camera is locked to a specific system (DJI camera only works with DJI VTX)
- Typically more expensive
- Better low-light performance
- Larger and heavier than analog cameras

## Key Specs

### Sensor Size
Larger sensors capture more light and generally produce better low-light performance.
- **1/3"**: Standard for most FPV cameras. Good balance of size and quality.
- **1/2.7"** or **1/2"**: Larger sensor, better low-light. Found on higher-end cameras.
- **1/4"**: Smaller sensor, found on micro/nano cameras for whoops.

### Resolution (Analog)
- **TVL (TV Lines)**: Measures horizontal resolution. Higher = sharper.
- 600 TVL: Minimum acceptable
- 1000-1200 TVL: Standard for modern cameras
- Higher TVL doesn't mean much if your goggles can't display it

### Dynamic Range / WDR
WDR (Wide Dynamic Range) helps the camera handle scenes with both bright and dark areas — like flying from a dark tunnel into bright sunlight. Essential for FPV where lighting changes rapidly.

### Minimum Illumination (Lux)
Lower lux rating = better low-light performance. Important if you fly at dusk or indoors.
- 0.01 lux: Decent low-light
- 0.001 lux: Very good for dark environments
- "Starlight" rated cameras: Best for low-light flying

### FOV (Field of View)
Wider FOV shows more of your surroundings. Most FPV cameras offer:
- **120-140°**: Standard for FPV. Wide enough to see obstacles, not so wide it distorts excessively.
- **160°+**: Ultra-wide, more fisheye distortion. Some pilots prefer this for proximity flying.
- Some cameras have swappable lenses to change FOV.

### Aspect Ratio
- **4:3**: More vertical view, traditional. Still used by many pilots, especially racers.
- **16:9**: Wider, more cinematic. Matches most goggle screens better.
- **16:9 stretched**: Some pilots run 4:3 cameras stretched to 16:9 in the goggles for a wider apparent FOV without cropping vertical view.

## Camera Sizing

FPV cameras come in standard sizes based on mounting width:
- **Nano**: 14mm wide — for tiny whoops and micros
- **Micro**: 19mm wide — for sub-250g builds and small frames
- **Mini**: 21mm wide — for some compact 5" frames
- **Full Size**: 28mm wide — standard for 5" builds

Match the camera size to your frame's camera mount width.

## Camera Angle

The angle at which you mount the camera determines your flying style:
- **0-10°**: Looking almost straight ahead. For slow, cinematic flying.
- **15-25°**: Moderate angle. Cinematic and relaxed freestyle.
- **25-35°**: Standard freestyle. Good balance of forward view and horizon visibility.
- **35-50°**: Aggressive. For fast freestyle and racing. More sky visible during forward flight.

Higher camera angle means you need more throttle to maintain altitude (since you're pitched forward more to fly fast), which means more speed.

Most pilots start around 25° and adjust as they develop their style.

## Settings

Most FPV cameras have an OSD menu accessible via a joystick or button on the camera board:

### Important Settings
- **Brightness/Contrast**: Adjust for your typical flying conditions
- **WDR**: Enable for mixed lighting conditions
- **Image flip**: If mounting the camera upside down (some frames require this)
- **NTSC vs PAL** (analog): Match your goggles. PAL has slightly more resolution, NTSC has slightly higher frame rate. Most modern setups handle either.
- **Day/Night mode**: Auto is usually fine. Manual lets you lock to day mode to prevent automatic gain changes.

## Wiring

### Analog Camera Wiring
Three wires:
- **Video Out** → VTX Video In
- **VCC (Power)** → 5V or 9V from FC/PDB (check camera's voltage range)
- **GND** → Ground

### Digital Camera Wiring
Digital cameras connect to their matched VTX with a ribbon cable or proprietary connector. Usually plug-and-play within the ecosystem.

## Tips

- **Protect the lens**: A scratched lens degrades your view permanently. Use a lens cap during transport.
- **Clean the lens**: Before every session. Fingerprints, grass juice, and dirt all reduce image quality.
- **Carry a spare**: Analog cameras are cheap. Keep one in your bag.
- **Mount angle is adjustable**: Most camera mounts allow angle adjustment. Experiment to find your preference.
