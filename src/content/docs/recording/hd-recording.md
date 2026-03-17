---
title: HD Recording
description: Action cameras and techniques for high-quality FPV footage.
---

An action camera mounted on your drone records cinematic footage independent of your FPV system. Where DVR captures what you see in your goggles, an action camera records what the world sees — sharp, stable, color-graded video suitable for sharing, commercial work, or just keeping as memories.

## Camera Options

### GoPro (The Standard)
GoPro Hero is the benchmark for FPV action cameras. Deep community support, excellent stabilization ecosystem (ReelSteady), and consistently good image quality.

| Model | Weight (in case) | Key Feature | FPV Suitability |
|-------|-----------------|-------------|-----------------|
| Hero 13 | ~155g | Best-in-class HyperSmooth | Excellent |
| Hero 12 | ~153g | 5.3K, excellent image | Excellent |
| Hero 11 | ~154g | 10-bit color, 5.3K | Excellent |
| Hero 10 | ~153g | GP2 chip, great low-light | Very good |

All current GoPro Heroes support HyperSmooth stabilization and work with ReelSteady GO for post-stabilization.

**Naked GoPro**: Removing the housing and replacing it with a 3D-printed TPU shell reduces weight by 60-80g. The "naked" or "bones" version of the GoPro is popular for freestyle builds where weight matters. The downside: less protection for the camera in crashes.

### DJI Action 4 / 5
Competitive with GoPro, excellent for DJI ecosystem users, slightly lighter.
- Action 4: ~148g, 4K120, excellent stabilization
- Good color science, competitive low-light
- Works with DJI's own stabilization tools

### Insta360 Cameras
360-degree cameras open creative possibilities:
- **Insta360 X4**: Full 360° capture, reframe any shot in post, "invisible selfie stick" effect
- **Insta360 GO 4**: Tiny (35g), magnetically attachable, lower quality but negligible weight
- **Insta360 Ace Pro**: Flat camera with excellent AI features, competitive with GoPro

### RunCam Thumb Pro
Budget-friendly lightweight option:
- ~22g — dramatically lighter than GoPro
- 4K60, decent image quality
- Popular for micro builds where GoPro weight is prohibitive
- Built-in gyro for Gyroflow stabilization support

### DJI O3 / O4 Air Unit (Dual Purpose)
For digital FPV systems, the DJI air unit records in the air unit itself at up to 4K — acting as both FPV transmitter and decent action camera. Not as good as a dedicated GoPro, but saves total weight by eliminating a separate camera.

## Mounting

### Top Mount (Standard)
The action camera sits on top of the frame, forward of the FC stack, tilted slightly forward to match your camera angle.

**Requirements:**
- TPU camera mount specific to your frame and camera
- Correct camera tilt angle (match your FPV camera angle, or a few degrees lower for more natural-looking footage)
- Anti-vibration properties (TPU absorbs vibrations better than rigid mounts)

**Tips:**
- Don't mount the GoPro too far forward — it shifts CG and can cause prop artifacts in wide-angle shots
- A small rubber band over the GoPro provides backup retention (in case the mount breaks in a crash)
- Lens protectors prevent scratching during grass landings

### Under Mount
Some pilots mount the camera underneath the frame:
- Keeps the drone's profile lower
- Camera is protected from some crashes
- Can produce "ground rush" effect in footage
- More prone to damage in hard landings

### Arm Mount / Unusual Angles
For creative shots:
- Side-facing camera for perspective shots
- Rear-facing for "chasing" effect
- Used for specific shots, not standard mounting

## Camera Settings

### The 180-Degree Shutter Rule
For cinematic motion blur, set shutter speed to approximately 2× your frame rate:
- 24fps → 1/48s shutter (use 1/50s)
- 30fps → 1/60s shutter
- 60fps → 1/120s shutter

Outdoor daylight requires ND filters to achieve these shutter speeds without overexposing.

### Resolution and Frame Rate
| Use Case | Resolution | Frame Rate |
|----------|-----------|-----------|
| Cinematic delivery | 4K | 24-30fps |
| Smooth delivery | 4K | 60fps |
| Slow motion | 2.7K-4K | 120-240fps |
| Best stabilization | 4K | 60fps (more crop room) |

Higher resolution gives more room to crop during stabilization without losing quality.

### Color Profile
- **Standard / Color**: Ready to use, no grading needed. Good for casual use.
- **Flat / Log (GoPro Flat, D-Log)**: Low contrast, muted colors. Requires color grading in post. Preserves maximum dynamic range and flexibility.

Use flat/log if you're planning to color grade. Use standard for quick-turnaround content.

### Stabilization Settings
**On-camera stabilization:**
- GoPro HyperSmooth: Good, but crops the image and can't be disabled in post
- **Recommended for Gyroflow/ReelSteady**: Turn stabilization OFF on the camera. Let the software do it.
- Enable "Horizon Lock" only if you specifically want a locked horizon

### ND Filters
Essential for outdoor flying. Match filter strength to light conditions:
- Overcast/cloudy → ND8-ND16
- Partly cloudy → ND16-ND32
- Full sun → ND32-ND64

Brands: PolarPro (premium), Freewell (good value), generic sets (adequate for beginners).

## Post-Processing Stabilization

Raw FPV footage is extremely shaky. Software stabilization transforms it into smooth, watchable video.

### Gyroflow (Free, Open Source)
The community favorite. Uses gyroscope data to correct camera movement:

1. Export Betaflight Blackbox data from your flight
2. Record a calibration video (wave the camera in a figure-8) on first setup
3. Load your clip in Gyroflow
4. Load the Blackbox log (or use camera gyro if available)
5. Sync the log to the video
6. Export stabilized video

**Sources of gyro data:**
- Betaflight Blackbox (most accurate for FPV)
- GoPro's internal gyro (supported for recent models)
- RunCam Thumb/other camera gyros

**Download:** [gyroflow.xyz](https://gyroflow.xyz/)

### ReelSteady GO (Paid, ~$100)
Desktop software specifically for GoPro footage:
- Uses GoPro's internal gyro data directly
- Simpler workflow than Gyroflow for GoPro users
- Excellent results
- Paid but one-time purchase

### GoPro HyperSmooth (Built-in)
- Applied on-camera during recording or in the GoPro app
- No post-processing needed
- Crops the image (reduces effective FOV)
- Less control than Gyroflow/ReelSteady
- Best for quick sharing without editing

## File Management

Action cameras generate large files. A typical session of flying produces:
- 4K60: ~1GB per 5 minutes
- 4K30: ~500MB per 5 minutes
- 2-3 hour session: 10-25GB of footage

**Workflow:**
1. Import footage to computer after each session
2. Delete obvious crashes and unusable clips immediately
3. Keep only the best 10-20% for editing
4. Store selects on a backup drive

A fast MicroSD card (V30 or faster) prevents dropped frames at high bitrates. Samsung Pro Endurance, SanDisk Extreme Pro, and Lexar Professional are reliable choices.
