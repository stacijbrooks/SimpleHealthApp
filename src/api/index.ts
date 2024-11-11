/**
 * Api methods for HealthKit and GoogleFit.
 *
 * These methods work for both platforms: `iOS` and `Android`.
 */
import * as simplehealthapp from './simplehealthapp';
/**
 * Api methods for HealthKit.
 * These methods only work for `iOS`.
 *
 * You can find api methods for both platforms [simplehealthapp](./simplehealthapp.md)
 */
import * as HealthKit from './healthKit';
/**
 * Api methods for GoogleFit.
 * These methods only work for `Android`.
 *
 * You can find api methods for both platforms [simplehealthapp](./simplehealthapp.md)
 */
import * as GoogleFit from './googleFit';

export { simplehealthapp, GoogleFit, HealthKit };
