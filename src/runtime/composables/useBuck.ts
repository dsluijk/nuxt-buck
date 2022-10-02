import { Ref } from "vue";

import { useState } from "#imports";

export enum BuckMode {
    Normal,
    Editing,
}

export interface UseBuck {
    canEdit: Ref<boolean>;
    editMode: Ref<BuckMode>;

    setEditMode: (mode: BuckMode) => void;
}

export const useBuck = (): UseBuck => {
    const canEdit = useState<boolean>("__USE_BUCK__CAN_EDIT", () => true);
    const editMode = useState<BuckMode>(
        "__USE_BUCK__MODE",
        () => BuckMode.Normal,
    );

    const setEditMode = (newMode: BuckMode) => {
        editMode.value = newMode;
    };

    return { canEdit, editMode, setEditMode };
};
