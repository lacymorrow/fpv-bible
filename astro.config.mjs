// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import aiExpand from './src/integrations/ai-expand.ts';

export default defineConfig({
	integrations: [
		starlight({
			title: 'FPV Bible',
			description: 'A comprehensive, open-source guide to building and flying FPV drones.',
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://analytics.lacy.sh/script.js',
						'data-website-id': '0acb7542-e7f7-4137-bbdf-15351b77ebb7',
						defer: true,
					},
				},
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lacymorrow/fpv-bible-site' }],
			editLink: {
				baseUrl: 'https://github.com/lacymorrow/fpv-bible-site/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/anatomy' },
						{ slug: 'getting-started/first-drone' },
						{ slug: 'getting-started/costs' },
						{ slug: 'getting-started/glossary' },
					],
				},
				{
					label: 'Drone Types',
					items: [
						{ slug: 'drone-types/overview' },
						{ slug: 'drone-types/tiny-whoop' },
						{ slug: 'drone-types/cinewhoop' },
						{ slug: 'drone-types/long-range' },
					],
				},
				{
					label: 'Frame',
					items: [
						{ slug: 'frame/overview' },
						{ slug: 'frame/miniquad' },
						{ slug: 'frame/micro' },
					],
				},
				{
					label: 'Power',
					items: [
						{ slug: 'power/overview' },
						{ slug: 'power/serial-vs-parallel' },
						{ slug: 'power/pdb' },
						{ slug: 'power/regulators' },
						{ slug: 'power/battery' },
						{ slug: 'power/charging' },
						{ slug: 'power/leds' },
					],
				},
				{
					label: 'Control',
					items: [
						{ slug: 'control/overview' },
						{ slug: 'control/radio-transmitter' },
						{ slug: 'control/elrs' },
						{ slug: 'control/protocols' },
						{ slug: 'control/telemetry' },
						{ slug: 'control/receiver' },
						{ slug: 'control/failsafe' },
					],
				},
				{
					label: 'Drive',
					items: [
						{ slug: 'drive/overview' },
						{ slug: 'drive/escs' },
						{ slug: 'drive/pwm-signal' },
						{ slug: 'drive/ppm-signal' },
						{ slug: 'drive/motors' },
						{ slug: 'drive/brushed-vs-brushless' },
						{ slug: 'drive/propellers' },
					],
				},
				{
					label: 'FPV System',
					items: [
						{ slug: 'fpv/overview' },
						{ slug: 'fpv/digital-systems' },
						{ slug: 'fpv/camera' },
						{ slug: 'fpv/vtx' },
						{ slug: 'fpv/vrx' },
						{ slug: 'fpv/goggles' },
						{ slug: 'fpv/osd' },
						{ slug: 'fpv/antenna' },
						{ slug: 'fpv/etiquette' },
					],
				},
				{
					label: 'Software',
					items: [
						{ slug: 'software/overview' },
						{ slug: 'software/betaflight-setup' },
						{ slug: 'software/pid-tuning' },
						{ slug: 'software/rates' },
						{ slug: 'software/blackbox' },
					],
				},
				{
					label: 'Building a Quad',
					items: [
						{ slug: 'building/overview' },
						{ slug: 'building/sanding-carbon-fiber' },
						{ slug: 'building/battery-strap' },
						{ slug: 'building/power-distribution' },
						{ slug: 'building/speed-controllers' },
						{ slug: 'building/motors' },
						{ slug: 'building/flight-controller' },
						{ slug: 'building/receiver' },
						{ slug: 'building/vtx' },
						{ slug: 'building/camera' },
					],
				},
				{
					label: 'Skills',
					items: [
						{ slug: 'skills/soldering' },
						{ slug: 'skills/3d-printing' },
						{ slug: 'skills/maintenance' },
					],
				},
				{
					label: 'Flight School',
					items: [
						{ slug: 'flight-school/overview' },
						{ slug: 'flight-school/mode-comparison' },
						{ slug: 'flight-school/simulators' },
						{ slug: 'flight-school/flight-101' },
					],
				},
				{
					label: 'Freestyle',
					items: [
						{ slug: 'freestyle/overview' },
					],
				},
				{
					label: 'Racing',
					items: [
						{ slug: 'racing/overview' },
					],
				},
				{
					label: 'Cinematic',
					items: [
						{ slug: 'cinematic/overview' },
					],
				},
				{
					label: 'Recording',
					items: [
						{ slug: 'recording/overview' },
						{ slug: 'recording/dvr' },
						{ slug: 'recording/hd-recording' },
					],
				},
				{
					label: 'Safety',
					items: [
						{ slug: 'safety/lipo-safety' },
						{ slug: 'safety/flight-safety' },
					],
				},
				{
					label: 'Regulations',
					items: [
						{ slug: 'regulations/overview' },
					],
				},
				{
					label: 'Tools & Accessories',
					items: [
						{ slug: 'tools/overview' },
						{ slug: 'tools/accessories' },
					],
				},
				{
					label: 'Tips & Troubleshooting',
					items: [
						{ slug: 'tips/general' },
						{ slug: 'tips/troubleshooting' },
					],
				},
				{
					label: 'Community',
					items: [
						{ slug: 'community/get-involved' },
						{ slug: 'community/contribute', badge: { text: 'Help!', variant: 'caution' } },
						{ slug: 'community/online-resources' },
					],
				},
			],
		}),
		aiExpand(),
	],
});
