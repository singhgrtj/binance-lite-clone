import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { ReactNode } from "react";

export default interface NavigationType {
    name: string,
    component: any,
    label: ((props: { focused: boolean; color: string; position: LabelPosition; }) => ReactNode) | undefined;
}