---
title: DVR (Digital Video Recording)
description: Recording your goggle feed for review and sharing.
---

DVR records the exact video signal you see in your goggles — OSD overlay, signal artifacts, and all. It's not the same as action camera footage, but it's invaluable for crash analysis, flight review, and sharing raw FPV perspective.

## What DVR Captures

DVR records the live FPV feed as it appears in your goggles:
- The drone's camera view
- All OSD elements (battery voltage, speed, altitude, etc.)
- Video quality artifacts (on analog: static, breakup, snow)
- Everything you saw while flying — exactly as you experienced it

This makes DVR perfect for reviewing what actually happened in a crash, because you can see exactly what your view was in the moments before impact.

## DVR Quality

### Analog DVR
Analog goggle DVR captures the composite video signal at its native quality — typically 640×480 or similar (roughly 480p). This matches the quality of the analog FPV feed itself. It's low resolution by modern standards but perfectly adequate for review and sharing.

The recording captures the signal with all its analog characteristics — a clean signal looks fine, a weak signal shows the same static you saw in the goggles. This is actually useful: your DVR footage is a direct record of your signal quality throughout the flight.

### Digital DVR
Digital FPV systems record at much higher quality than analog:

| System | DVR Resolution |
|--------|---------------|
| DJI O3 Air Unit | 1080p60 (at the air unit itself) |
| DJI Goggles | 1080p or higher |
| Walksnail | 1080p60 |
| HDZero | 720p |

Digital DVR is a significant improvement over analog — clean, sharp footage. The air unit DVR on DJI is particularly useful because it records the high-quality signal at the source before any goggle processing.

### DVR vs Action Camera
DVR is not a replacement for an action camera (GoPro):
- DVR quality is much lower than a GoPro
- DVR has a wide fisheye look from the FPV camera
- DVR files are relatively small, low-bitrate
- Action camera footage is for cinematic use; DVR is for review and documentation

## Hardware Setup

### Analog Goggles with Built-in DVR
Most modern analog goggles include a built-in DVR module:
1. Insert a MicroSD card (Class 10 or higher recommended, 16-64GB typical)
2. Format the card in the goggles' menu (FAT32)
3. Start recording via a button on the goggles or automatically on power-up
4. Files save as AVI or MP4 depending on the goggle firmware

Common goggles with built-in DVR: Eachine EV800D, Skyzone SKY04X, most Fatshark models.

### External DVR Module
Analog goggles without built-in DVR can use an external DVR module:
- Connects between the VRX output and a display/monitor
- Or plugs into the AV output of the goggles
- Records to a MicroSD card
- Examples: Eachine ProDVR, LC-DVR

### Digital Goggle DVR
Built into the system — no setup required beyond inserting a MicroSD card:
- **DJI Goggles**: Insert card, enable recording in settings. Can auto-record on arm.
- **Walksnail Goggles**: Similar — insert card, enable in menu.
- **HDZero Goggles**: Same process.

Digital goggles also record at the air unit (on DJI and Walksnail) for even higher-quality DVR. The air unit records before compression to the goggles, so it's the highest quality recording available from the system.

## Recording Workflow

### Before Flying
1. Verify MicroSD card is inserted and has space
2. Check that DVR is set to record (some goggles don't auto-record)
3. Format the card periodically to prevent file corruption

### During Flight
Some setups require manually starting DVR recording. Others auto-record when video signal is detected or when the drone arms. Configure per your goggle's settings.

### After Flying
1. Remove the MicroSD card or connect goggles via USB
2. Copy files to your computer
3. Review footage using any video player (VLC works well)

## Using DVR for Analysis

### Crash Analysis
Review the 5-10 seconds before a crash:
- What did your video show? Did you lose sight of an obstacle?
- Did the OSD show low battery? Failsafe?
- Was there video breakup (signal loss) immediately before the crash?
- What was your speed and altitude?

### Tuning Analysis
DVR can help identify tuning issues:
- Oscillations visible in the video (camera vibration)
- Propwash during descents
- Compare OSD data (current draw, voltage sag) to flight behavior

### Link Quality Review
Watch for signal breakup moments in the DVR:
- Brief static = brief signal loss events
- At what distance or location did breakup occur?
- Helps identify antenna issues, power level needs, or interference sources

## Tips

- **Name your files**: After reviewing, rename important clips with a descriptive name
- **Keep 32-64GB cards**: Higher-quality digital DVR fills cards faster
- **Auto-record**: Configure auto-record so you never miss a flight
- **Backup important footage**: DVR cards can get corrupted; copy anything important promptly
- **Share on DVR channels**: Many FPV communities and subreddits specifically share raw DVR footage — it's valued for authenticity
