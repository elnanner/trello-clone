import { useDrag } from "react-dnd"
import { useAppState } from "./AppStateContext"
import { DragItem } from "./DragItem"

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState()
    const [, drag] = useDrag({
        type: item.type,
        item: () => {
            dispatch({
                type: "SET_DRAGGED_ITEM",
                payload: item
            })
            return item
        },
        end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined })
    })
    return { drag }
}

function useAppStateReducer(type: string): { type: "ADD_LIST"; payload: string } | { type: "ADD_TASK"; payload: { text: string; listId: string } } | { type: "MOVE_LIST"; payload: { dragIndex: number; hoverIndex: number } } | { type: "SET_DRAGGED_ITEM"; payload: import("./DragItem").ColumnDragItem | undefined } {
    throw new Error("Function not implemented.")
}
