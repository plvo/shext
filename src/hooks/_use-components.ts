import { useContext } from "react";
import { _ComponentsContext } from "src/providers/components.provider";

export const useCustomComponents = (key: ComponentsKey): ComponentAndSubComponents => {
    const customComponents = useContext(_ComponentsContext);
    const component = customComponents[key]!;

    if (typeof component === 'function') {
        return { main: component, subComponents: {} };
    }

    return {
        main: component.main,
        subComponents: component.subComponents || {},
    };
};
