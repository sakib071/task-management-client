import {
    FiChevronDown
} from "react-icons/fi";
import { FaFlag } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = (props) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(props.default);
    console.log(open);
    console.log(props.priority);

    return (
        <div className="p-2 flex items-center justify-center bg-white">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <span
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex items-center gap-2 px-3 py-1 rounded-md text-red-500 border-red-500 border-2 hover:bg-red-500 hover:text-red-50 transition-colors"
                >
                    <span className="font-medium text-sm">{selected ? selected : "selected"}</span>
                    <motion.span variants={iconVariants}>
                        <FiChevronDown />
                    </motion.span>
                </span>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-32 overflow-hidden"
                >
                    {props?.priority?.map((option) => (
                        <Option
                            key={option.id}
                            setOpen={setOpen}
                            onSelect={() => {
                                setSelected(option.type)
                                props.setItem(option.type)
                            }}
                            Icon={FaFlag}
                            value={option.id}
                            text={option.type}
                        />
                    ))}
                    {/* <Option setOpen={setOpen} onSelect={setSelected} Icon={FaFlag} value="Low" text="Low" />
                    <Option setOpen={setOpen} onSelect={setSelected} Icon={FaFlag} value="Moderate" text="Moderate" />
                    <Option setOpen={setOpen} onSelect={setSelected} Icon={FaFlag} value="High" text="High" /> */}
                </motion.ul>
            </motion.div>
        </div>
    );
};

const Option = ({ text, Icon, setOpen, onSelect, value }) => {
    const handleClick = () => {
        onSelect(value);
        setOpen(false);
    };
    return (
        <motion.li
            variants={itemVariants}
            onClick={handleClick}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-red-100 text-slate-700 hover:text-red-500 transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants}>
                <Icon />
            </motion.span>
            <span>{text}</span>
        </motion.li>
    );
};

export default StaggeredDropDown;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};