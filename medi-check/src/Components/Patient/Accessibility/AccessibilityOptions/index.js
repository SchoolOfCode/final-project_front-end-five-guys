import ControlledSwitchTwo from '../../../../MUIcomponents/ControlledSwitchTwo';
import ControlledSwitchThree from '../../../../MUIcomponents/ControlledSwitchThree';
// import Slider from "@mui/material/Slider";
// import Box from "@mui/material/Box";

//
import './menu.css';

export default function AccessibilityOptions({
    setDarkMode,
    styleClass,
    setLargeFont,
    onClick,
    setOpen,
}) {
    return (
        <div>
            <div id='basic' className={styleClass}>
                <h4>
                    Dark Mode{' '}
                    <ControlledSwitchTwo
                        setDarkMode={setDarkMode}
                    ></ControlledSwitchTwo>
                </h4>
                <h4>
                    Large Font{' '}
                    <ControlledSwitchThree
                        setLargeFont={setLargeFont}
                    ></ControlledSwitchThree>
                </h4>
            </div>
        </div>
    );
}
