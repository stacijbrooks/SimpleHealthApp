import { NativeModules } from 'react-native';

import { DailyData, FitnessDataType } from '../../types';
import { isIOS } from '../../utils';

/** @internal */
const { RNsimplehealthapp } = NativeModules;

/**
 * Gets statistic daily total for specified time period.
 *
 * @param dataType e.g. `FitnessDataType.Steps`
 * @param startDate Unix timestamp or Date for record start date.
 * @param endDate Unix timestamp or Date for record end date.
 */
export const queryDailyTotals = async (
  dataType: FitnessDataType,
  startDate: Date | number,
  endDate: Date | number,
): Promise<DailyData> => {
  if (!isIOS) {
    return RNsimplehealthapp.queryDailyTotals(dataType, +startDate, +endDate);
  }
};
