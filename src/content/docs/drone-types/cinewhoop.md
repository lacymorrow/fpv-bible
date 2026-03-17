---
title: Cinewhoops
description: Ducted FPV drones designed for smooth, safe cinematic footage.
---

Cinewhoops are ducted FPV drones built for one thing: capturing smooth, cinematic footage in places where a normal quad would be too dangerous. Indoor real estate tours, weddings, events, proximity to people — this is where cinewhoops shine.

## What Makes a Cinewhoop

A cinewhoop combines several features:
- **Ducted propellers**: Prop guards that fully enclose the propellers, making them safe around people and objects
- **3" or 3.5" propellers**: Large enough for a stable platform, small enough to be controllable indoors
- **Smooth tune**: PIDs and rates optimized for slow, flowing movements rather than acrobatic performance
- **Camera payload**: Designed to carry an action camera (GoPro, DJI Action, Insta360) for high-quality footage

The ducts serve double duty: safety and aerodynamics. They increase static thrust at low speeds (hover efficiency) at the cost of higher drag in forward flight.

## Common Cinewhoop Builds

### 3-Inch (Sub-250g)

The sweet spot for most cinewhoop work. With a lightweight build, you can stay under 250g (including a GoPro or equivalent) which avoids FAA registration requirements in the US.

- Frame: 3" ducted (GEPRC CineLog, iFlight Protek, BetaFPV Pavo)
- Motors: 1404-1507 (3000-4500 KV for 4S)
- Props: 3" triblade
- Battery: 4S 650-850mAh
- AUW: 200-250g with camera

### 3.5-Inch

More power and stability than 3", but heavier (typically over 250g with camera). Better in outdoor wind conditions.

- Frame: 3.5" ducted
- Motors: 1507-1806
- Props: 3.5" triblade
- Battery: 4S 850-1100mAh

## FPV System Choices

Digital FPV is strongly preferred for cinewhoops — you need to see clearly to navigate tight indoor spaces.

- **DJI O3/O4**: Best image quality, reliable link, heavier
- **Walksnail**: Good balance of weight and quality
- **HDZero**: Lowest latency, lighter, lower image quality than DJI

For sub-250g builds, weight is critical. HDZero and Walksnail tend to be lighter than DJI.

## Tuning for Cinematic Flight

Cinewhoop tuning is different from freestyle:

### Rates
- **Low max rotation**: 400-500 deg/s (you don't need fast flips)
- **Heavy expo**: Softens center stick for butter-smooth movements
- **Low center sensitivity**: Small stick inputs should produce gentle movement

### PIDs
- Stock PIDs usually work fine
- If you see jello in footage, soft-mount the FC or adjust filters
- Slightly lower P gives a "floatier" feel that smooths out footage

### Filters
- ND filters on your action camera are essential (not Betaflight filters, but actual optical filters)
- Camera ND filters let you shoot at lower shutter speeds (1/60 or 1/100) for natural motion blur
- Natural motion blur = cinematic footage. High shutter speed = jittery video game look.

### ReelSteady / Gyroflow

Post-processing stabilization is critical for cinewhoop footage:
- **GoPro HyperSmooth**: Built-in, crops the image
- **ReelSteady GO**: Desktop software, uses gyro data from the camera for superior stabilization
- **Gyroflow**: Free, open-source alternative to ReelSteady. Uses Betaflight Blackbox or camera gyro data.

## Flying Techniques

### Orbits
Circle around a subject at a consistent altitude and distance. The bread and butter of real estate and event footage.

### Reveals
Start with a close-up of a detail (doorknob, flower, product) and slowly pull back to reveal the full scene.

### Follow Shots
Smoothly follow a subject (person walking, car driving) at a consistent distance.

### Thread the Needle
Fly through doorways, windows, or gaps for dramatic one-take shots. This is what makes cinewhoop footage unique — no other camera rig can do this.

### Elevation Changes
Slowly rise from ground level to above a building, or descend from ceiling to table height. Gentle throttle control is key.

## Commercial Use

Cinewhoops are popular for paid work:
- **Real estate**: Fly through homes, showing room flow in a single take
- **Events**: Weddings, concerts, corporate events
- **Hospitality**: Hotels, restaurants, resorts
- **Retail**: Stores, showrooms
- **Sports**: Proximity shots that traditional drones can't capture

:::caution
Commercial drone use in the US requires a **Part 107 Remote Pilot Certificate** from the FAA. Flying over people requires additional waivers unless your drone meets certain weight and safety criteria. See [Regulations](/regulations/overview).
:::

## Popular Cinewhoops (2025-2026)

| Model | Size | Weight (no cam) | FPV System | Notes |
|-------|------|-----------------|------------|-------|
| GEPRC CineLog 35 | 3.5" | ~165g | DJI O3/Analog | Popular, versatile |
| BetaFPV Pavo Pico | 3" | ~80g | Multiple | Ultra-light sub-250 |
| iFlight Protek35 | 3.5" | ~185g | Multiple | Proven workhorse |
| BetaFPV Pavo30 | 3" | ~130g | Walksnail/DJI | Good sub-250 option |
