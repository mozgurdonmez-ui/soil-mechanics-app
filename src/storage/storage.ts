import AsyncStorage from '@react-native-async-storage/async-storage';

export const getJson = async <T>(key: string, defaultValue: T): Promise<T> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(`Error getting JSON for key "${key}":`, error);
    return defaultValue;
  }
};

export const setJson = async <T>(key: string, value: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting JSON for key "${key}":`, error);
  }
};

export const getNumber = async (key: string, defaultValue: number): Promise<number> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? parseInt(value, 10) : defaultValue;
  } catch (error) {
    console.error(`Error getting number for key "${key}":`, error);
    return defaultValue;
  }
};

export const setNumber = async (key: string, value: number): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value.toString());
  } catch (error) {
    console.error(`Error setting number for key "${key}":`, error);
  }
};
