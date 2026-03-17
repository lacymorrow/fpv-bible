---
title: Frame
description: The skeleton of your quad — materials, sizes, and geometry.
---

The frame is the foundation of every build. It holds all your electronics, absorbs crash impacts, and determines your quad's size class, weight, and aerodynamic profile. Frame choice affects everything from durability to how easy it is to work on.

## Frame Sizing

Frames are measured in millimeters from one motor mount to the diagonally opposite motor mount. The size determines what propeller you can run:

| Frame Size | Prop Size | Typical Use |
|-----------|-----------|-------------|
| 65-75mm | 31mm (1.2") | Tiny Whoop |
| 80-100mm | 2" | Indoor micro |
| 100-120mm | 2.5" | Toothpick |
| 120-150mm | 3" | [Micro](/frame/micro/) |
| 170-200mm | 4" | Light freestyle |
| 210-260mm | 5" | [Standard freestyle/racing](/frame/miniquad/) |
| 270-320mm | 6-7" | Long range |

The 5" (210-260mm) class is the most popular and has the widest parts selection.

## Geometry

Frame geometry describes how the arms are arranged relative to the center body.

### True-X
All four arms are equally spaced at 90-degree intervals from center. Equal motor distance from the center of gravity in both pitch and roll axes. The most balanced layout for general flying. Most freestyle frames use true-X.

### Stretched-X (Squished-X)
Front motors are closer together than rear motors (or vice versa). This changes the effective moment arm for pitch vs. roll, which can improve high-speed pitch stability. Stretched-X frames are popular in racing where straight-line speed and fast direction changes matter.

### Deadcat
Rear arms angle wider than front arms so that the rear propellers are out of the camera's field of view. Useful for cinematic builds where a clean recording matters. Less common now since action cameras are typically mounted high enough that prop-in-view isn't an issue on standard frames.

### H-Frame
Arms run parallel in pairs rather than radiating from center. Simpler to manufacture but aerodynamically inferior to X layouts. Mostly historical at this point.

## Materials

### Carbon Fiber
The standard material for FPV frames. 3K woven carbon fiber plate offers excellent stiffness-to-weight ratio and withstands impacts well. Quality varies between manufacturers:
- **Arm thickness**: 5mm-6mm for freestyle (crash durability), 4mm for racing (weight savings)
- **Top/bottom plates**: 2mm-3mm
- **Weave quality**: Better carbon uses tighter weave and higher-quality epoxy resin. Cheap carbon splinters badly on impact. Quality carbon breaks cleanly.

### TPU (3D Printed)
Thermoplastic polyurethane is used for non-structural parts: camera mounts, antenna mounts, GPS holders, battery pads, and canopies. TPU is flexible and absorbs impact rather than transmitting it to electronics. If you have a 3D printer, TPU accessories are one of the best quality-of-life upgrades.

### Aluminum and Steel
Used for standoffs (the posts connecting top and bottom plates) and motor mounting hardware. Aluminum is lighter, steel is stronger. Motor bolts are typically M3 steel.

## Frame Components

A typical frame kit includes:

- **Bottom plate**: Main structural piece. Arms are either cut as part of this plate (unibody) or separate pieces bolted to it.
- **Top plate**: Covers the electronics stack. Usually thinner than the bottom plate since it takes less direct impact.
- **Arms**: Can be unibody (one piece with bottom plate) or replaceable individual arms. Replaceable arms cost less to repair per crash but add weight from the arm-to-body hardware.
- **Standoffs**: Aluminum or steel posts with M3 threads, creating space for the electronics stack between top and bottom plates. Stack height (distance between plates) must accommodate your 4-in-1 ESC, FC, and any other stacked boards.
- **Camera side plates**: Small carbon plates that form the front camera mount. Standard widths are 28mm (full), 21mm (mini), 19mm (micro), and 14mm (nano).
- **Hardware kit**: All the M3 bolts, nuts, and standoffs needed for assembly.

## Choosing a Frame

Key considerations:

**Arm design**: Replaceable arms are cheaper per crash (replace one $5 arm instead of a $20 bottom plate), but unibody is stiffer and lighter. For beginners who crash a lot, replaceable arms save money.

**Stack mounting**: Most frames use 20x20mm or 30.5x30.5mm mounting patterns for the electronics stack. Some support both. Verify your FC and ESC match the frame's mounting pattern.

**Camera mount width**: Must match your FPV camera size. Most 5" frames use full-size (28mm) mounts. Check before buying.

**Action camera mount**: If you plan to record HD footage, the frame needs a solid mounting point for a GoPro or similar. TPU mounts are standard. Some frames have integrated carbon camera plates.

**Weight**: Frame weight for a 5" build ranges from 60g (ultralight racing) to 120g+ (heavy-duty freestyle). Heavier frames are generally more durable but reduce agility and flight time.

**Budget pick**: The [Source One](https://github.com/tbs-trappy/source_one) open-source frame is available from multiple manufacturers for $15-25 and flies well. It's a proven starting point.
