import bridge from "@vkontakte/vk-bridge";

export const getValueByKeyVKBridge = async (key: string) => {
  return (await bridge.send("VKWebAppStorageGet", { keys: [key] })).keys[0]
    .value;
};

export const setValueByKeyVKBridge = async (value: string, key: string) => {
  return await bridge.send("VKWebAppStorageSet", { key, value });
};
