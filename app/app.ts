let disabled: boolean = false;
let WRITE_ARR_SIZE = 500;
let WRITE_TIME = 30 * 1000;
let onLog: (...args: any[]) => void = console.log.bind(console);
let shouldBeEnabled: () => Promise<boolean>|boolean = () => true;

let cached: any[][] = [];
let timer: NodeJS.Timeout | null = null;

export function stdout(...args: any[]) {
	if (disabled) {
		onLog(...args);
		return;
	}

	cached.push(args);

	if (cached.length >= WRITE_ARR_SIZE) {
		flush();
	}
}

function startTimer() {
	timer = setTimeout(() => {
		flush();
	}, WRITE_TIME);
}

export async function flush() {
	if (timer) {
		clearTimeout(timer);
	}

	for (const entry of cached) {
		onLog(...entry);
	}

	cached = [];

	disabled = !await shouldBeEnabled();

	startTimer();
}

export function disable() {
	disabled = true;
}

export function enable() {
	disabled = false;
}

export function writeBufferInit(options: {
	maxSeconds: number;
	maxLogs: number;
	onLog: (...args: any[]) => void;
	disabled?: boolean;
	shouldBeEnabled?(): boolean|Promise<boolean>;
}) {
	if (options.maxSeconds === 0 || options.maxLogs === 0 || options.disabled) {
		disabled = true;
	} else {
		disabled = false;
	}
	WRITE_ARR_SIZE = options.maxLogs;
	WRITE_TIME = options.maxSeconds * 1000;
	onLog = options.onLog;
	options.shouldBeEnabled && (shouldBeEnabled = options.shouldBeEnabled);
	startTimer();
}
