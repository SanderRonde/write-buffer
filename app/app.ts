let WRITE_ARR_SIZE = 500;
let WRITE_TIME = 30;
let onLog: (...args: any[]) => void = console.log.bind(console);

let cached: any[][] = [];
let timer: NodeJS.Timeout | null = null;

export function stdout(...args: any[]) {
	cached.push(args);

	if (cached.length >= WRITE_ARR_SIZE) {
		flush();
	}
}

function startTimer() {
	timer = setTimeout(() => {
		flush();
	}, WRITE_TIME * 1000);
}

export function flush() {
	if (timer) {
		clearTimeout(timer);
	}

	for (const entry of cached) {
		onLog(...entry);
	}

	cached = [];

	startTimer();
}

export function writeBufferInit(options: {
	maxSeconds: number;
	maxLogs: number;
	onLog: (...args: any[]) => void;
}) {
	WRITE_ARR_SIZE = options.maxLogs;
	WRITE_TIME = options.maxSeconds * 1000;
	onLog = options.onLog;
	startTimer();
}
