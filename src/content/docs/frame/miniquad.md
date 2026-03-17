---
title: Miniquad
description: The standard FPV racing and freestyle quadcopter — 150mm to 350mm.
---

A miniquad is the standard platform for FPV freestyle and racing. Measured from 150mm to 350mm motor-to-motor diagonally, these quads are large enough to carry proper electronics and batteries while remaining nimble enough for aggressive flying. When someone says "FPV drone," they usually mean a 5" miniquad.

## The 5" Standard

The 5-inch propeller quad has become the default for good reason. It hits the sweet spot between power, efficiency, flight time, and parts availability. Nearly every motor, frame, ESC, and prop manufacturer optimizes their products for the 5" class first.

A typical 5" freestyle miniquad:
- **Frame**: 220-250mm, true-X or squished-X geometry
- **Motors**: 2306 or 2207, 1750-1950KV for 6S
- **Props**: 5" tri-blade (Gemfan 51466, HQProp 5.1x3.1x3)
- **Battery**: 6S 1300-1550mAh LiPo
- **AUW (all-up weight)**: 650-850g with battery
- **Flight time**: 3-6 minutes depending on throttle management

## Frame Geometry

### True-X
Arms are evenly spaced at 90-degree intervals. Equal motor distances from center of gravity. The most balanced geometry for general flying. Most freestyle frames use true-X.

### Squished-X (Stretched-X)
Front and rear motor pairs are closer together, rear motors pushed out. This changes the moment arm, potentially improving yaw authority and high-speed stability. More common in racing frames. The difference is subtle and mostly matters at competitive levels.

### Deadcat
Rear arms angled wider than front arms so propellers stay out of camera view. Used on cinematic builds where a clean HD recording matters more than agility. Less common now that action cameras are typically mounted high enough to avoid prop-in-view issues.

### Other Geometries
- **H-frame**: Arms parallel rather than splayed. Easier to manufacture but worse aerodynamically. Mostly obsolete.
- **Hybrid-X**: Slight variations on true-X. Marketing differentiation more than functional difference.

## Frame Construction

### Carbon Fiber
Nearly all miniquad frames use 3K carbon fiber plate. Common thicknesses:
- **Arms**: 5mm-6mm for freestyle (crash durability), 4mm for racing (weight savings)
- **Top/bottom plates**: 2mm-3mm
- **Standoffs**: Aluminum or steel, connecting top and bottom plates with the FC stack in between

Frame quality varies significantly. Cheap carbon fiber uses lower-grade weave and resin that splinters on impact. Good frames (Armattan, ImpulseRC, Five33, Source One) use tighter weave and better resin for cleaner breaks and higher strength.

### Hardware
Most frames use M3 bolts with steel or aluminum standoffs. Motor mounting is standardized at 16x16mm (for smaller motors) or 16x19mm patterns. Props mount to motor shafts via self-tightening lock nuts (most common) or T-mount press-fit (DJI-style motors).

## Frame Selection

Choosing a frame comes down to your flying style and priorities:

**Freestyle priorities:**
- Thick arms (5mm+) for crash durability
- Room for a full-size action camera mount
- Easy access to electronics for repairs
- Replaceable arms (individual arm replacement saves money vs. replacing the whole bottom plate)

**Racing priorities:**
- Low drag profile
- Lightweight (sub-100g frame weight)
- Aerodynamic canopy
- Thin arms (4mm) where weight beats durability

**Budget option:**
The [Source One](https://github.com/tbs-trappy/source_one) is an open-source frame design. Multiple manufacturers produce it, keeping prices low ($15-25 for a complete frame kit). It flies well, parts are everywhere, and it's a solid choice for a first build.

## Beyond 5"

### 6" and 7" Long Range
Larger props are more efficient at lower RPM. Long-range builds use 6" or 7" props with lower-KV motors on 6S to maximize flight time. 10-15 minute flights are achievable. Frames are typically 270-320mm.

### 4" Builds
A growing category. 4" props on smaller frames (170-200mm) create quads that are more agile than 5" builds but more capable than 3" micros. Some 4" builds stay under 250g for regulatory advantages. Popular for park flying where a 5" feels like overkill.

## Compared to Micros

The main tradeoff between a miniquad and a [micro](/frame/micro/) is capability vs. accessibility. A 5" miniquad flies faster, carries more equipment, handles wind better, and produces superior HD footage. But it's also louder, heavier, more dangerous, and requires more space to fly safely. Many pilots own both: a 5" for open-field sessions and a Whoop or 3" micro for everything else.
