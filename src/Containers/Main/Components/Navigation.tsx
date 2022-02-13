import { HStack } from "@chakra-ui/react"
import { ExpansionButton, EXPANSION_BTN_MODE } from "../../../Components/Buttons/ExpansionButton"
import { PoweredByButton } from "../../../Components/Buttons/PoweredByButton";
import { EXPANSION_MODE } from "../../../Hooks/expansionMode.enum";
import { ExpansionProps } from "../../../Hooks/useExpansion";

export const Navigation = ({ expansionMode, onPartialExpand, onExpand }: ExpansionProps) => {
    const getExpansionBtn = () => {
        if (expansionMode === EXPANSION_MODE.EXPAND) {
            return <ExpansionButton mode={EXPANSION_BTN_MODE.COLLAPSE} aria-label="close" onClick={onPartialExpand} />;
        }
        return <ExpansionButton mode={EXPANSION_BTN_MODE.EXPAND} aria-label="close" onClick={onExpand} />;
    }

    return (
        <HStack justifyContent="space-between" w="100%" pr="2rem">
            {getExpansionBtn()}
            <PoweredByButton aria-label="hashup" />
        </HStack>
    );
}