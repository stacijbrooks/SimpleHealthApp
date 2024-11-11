import { NativeModules } from 'react-native';

import { FitnessDataType } from '../../types';
import { isIOS } from '../../utils';

/** @internal */
const { RNsimplehealthapp } = NativeModules;

/**
 * Gets statistic total for given data type for current day.
 */
export const getStatisticTodayTotal = async (
  dataType: FitnessDataType,
): Promise<number> => {
  if (!isIOS) {
    return RNsimplehealthapp.getStatisticTodayTotal(dataType);
  }
};
