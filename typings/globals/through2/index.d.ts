// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/55d9114bbd68142c1afb846732cfaae002aca27c/through2/through2.d.ts
declare module 'through2' {

	import stream = require('stream');

	type TransformCallback = (err?: any, data?: any) => void;
	type TransformFunction = (chunk: any, enc: string, callback: TransformCallback) => void;
	type FlushCallback = (flushCallback: () => void) => void;

	function through2(transform?: TransformFunction, flush?: FlushCallback): stream.Transform;

	function through2(opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlushCallback): stream.Transform;

	namespace through2 {
		export interface Through2Constructor extends stream.Transform {
			new(opts?: stream.DuplexOptions): stream.Transform;
			(opts?: stream.DuplexOptions): stream.Transform;
		}

		/**
		 * Convenvience method for creating object streams
		 */
		export function obj(transform?: TransformFunction, flush?: FlushCallback): stream.Transform;

		/**
		 * Creates a constructor for a custom Transform. This is useful when you
		 * want to use the same transform logic in multiple instances.
		 */
		export function ctor(opts?: stream.DuplexOptions, transfrom?: TransformFunction, flush?: FlushCallback): Through2Constructor;
	}

	export = through2;

}
