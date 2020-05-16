# Write-buffer
A log write buffering package meant to reduce file writes

## Installation

Run `npm install @sanderronde/write-buffer --save` or `yarn add @sanderronde/write-buffer`

## How to use

Call `writeBufferInit()` with the following options:
* `maxSeconds` the maximum amount of seconds before the contents should be written.
* `maxLogs` the maximum amount of log entries before the contents should be written.
* `onLog` the function to be called when logging should occur

After that you can call the `stdout(...)` function to write buffer anything you write to it. You can force a flush by calling the `flush()` function.

## License

```text
The MIT License (MIT)

Copyright (c) 2020 Sander Ronde

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
