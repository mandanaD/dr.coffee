import {motion, useInView, useAnimation} from "framer-motion";
import {useRef, useEffect} from "react";
import {ReactNode, CSSProperties} from "react";

type TPropsType = {
    children: ReactNode;
    className: string;
    style?: CSSProperties;
    delay?: number
};

const Reveal = ({children, className, style = {}, delay = 0.1}: TPropsType) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    const control = useAnimation();

    const variants = {
        hidden: {opacity: 0, y: 65},
        visible: {opacity: 1, y: 0},
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [inView, control]);

    return (
        <motion.div
            style={style}
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={control}
            transition={{delay: delay, duration: .8, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;