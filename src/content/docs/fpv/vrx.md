---
title: Video Receiver (VRX)
description: The receiver in your goggles that picks up the FPV signal.
---

The Video Receiver (VRX) is the receiving end of your FPV link. It picks up the signal broadcast by your VTX and displays it on your goggle screens. For digital systems, the VRX is built into the goggles. For analog, it may be built-in or a swappable module.

## Analog VRX

### Built-in Receivers
Budget and mid-range analog goggles come with a built-in receiver. Quality varies:
- **Single receiver**: One receiver chip. Works fine for casual flying.
- **Diversity receiver**: Two receiver chips with two antenna inputs. The system automatically uses whichever antenna has the stronger signal. Significant improvement in range and reliability.

### Module-Based Receivers
Higher-end analog goggles (Fatshark, Skyzone, some HDZero) have a **module bay** — a slot for a removable receiver module. This lets you:
- Upgrade to a better receiver without buying new goggles
- Switch between different receiver types
- Swap to a digital module if one becomes available for your bay

**Popular modules:**
| Module | Type | Notes |
|--------|------|-------|
| TBS Fusion | Diversity analog | Excellent reception, popular |
| RapidFire | Diversity analog | Very popular, great auto-scan |
| ImmersionRC | Diversity analog | Solid performer |

### Key Specs (Analog)
- **Sensitivity (dBm)**: Lower (more negative) is better. -90dBm is good, -95dBm is excellent.
- **Diversity**: Yes/no. Diversity is strongly recommended.
- **Auto-scan**: Automatically finds the active VTX channel. Very convenient.
- **RSSI output**: Provides signal strength data. Some modules can feed RSSI to your radio or OSD.

## Digital VRX

Digital FPV systems have the receiver integrated into the goggles — you don't choose a separate VRX.

- **DJI Goggles**: Built-in receiver tuned to DJI air units. No module swapping.
- **Walksnail Goggles**: Built-in receiver for Walksnail VTXs.
- **HDZero Goggles**: Built-in HDZero receiver, plus an analog module bay for running analog simultaneously.

## Antennas on the VRX Side

The goggle antennas are just as important as the VTX antenna:

### Standard Setup (Analog Diversity)
Most diversity receivers use two antennas:
1. **Omni-directional antenna** (e.g., dipole or pagoda): Receives signal from all directions. Your primary antenna.
2. **Directional antenna** (e.g., patch or crosshair): Receives signal strongly from one direction, weakly from others. Point it toward your flying area for extended range.

The diversity receiver automatically switches to whichever antenna has the better signal at any given moment.

### Antenna Polarization
Match your VRX antenna polarization to your VTX antenna:
- **RHCP (Right-Hand Circular Polarization)**: Most common standard. If your VTX antenna is RHCP, your goggle antennas should be RHCP.
- **LHCP (Left-Hand Circular Polarization)**: Less common but works identically — just needs to match.
- **Linear**: Older/cheaper antennas. Worse performance than circular polarized but universal.

Mismatched polarization (RHCP on VTX, LHCP on VRX) causes ~3dB signal loss — equivalent to cutting your range in half.

→ See [Antennas](/fpv/antenna) for more detail on antenna types and selection.

## Channel Selection

Both VTX and VRX must be on the same frequency (channel) to communicate. Methods for setting channels:

- **Auto-scan** (analog): The VRX scans all frequencies and locks onto the strongest signal. Most convenient.
- **Manual selection**: Scroll through channels using buttons on the goggles or OSD.
- **Band/channel coordination**: When flying with a group, each pilot uses a different channel. Raceband is designed for this, with channels spaced to minimize interference between pilots.
- **Digital**: Automatic channel management in most digital systems.

## Range Expectations

Actual range depends on VTX power, antenna quality, obstacles, and interference:

| Setup | Typical Range |
|-------|--------------|
| 25mW + basic antenna | 200-500m |
| 200mW + good antenna | 500m-1.5km |
| 600mW + diversity + patch | 2-5km |
| 1W + diversity + high-gain patch | 5-10km+ |
| Digital (DJI O3/O4) | 5-12km |
| Digital (HDZero) | 3-8km |
